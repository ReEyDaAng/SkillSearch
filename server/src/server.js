import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const DATA_PATH = path.join(__dirname, "..", "data", "profiles.json");

function readProfiles() {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

// GET /profiles – return all
app.get("/profiles", (req, res) => {
  try {
    const profiles = readProfiles();
    res.json(profiles);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to read profiles" });
  }
});

// POST /search – { skills: string[] } -> filter + score + sort
app.post("/search", (req, res) => {
  try {
    const body = req.body || {};
    let skills = Array.isArray(body.skills) ? body.skills : [];
    // normalize
    skills = skills
      .map(s => String(s).trim().toLowerCase())
      .filter(Boolean);
    skills = Array.from(new Set(skills)); // unique
    const maxScore = 5;

    const profiles = readProfiles();

    const results = profiles
      .map(p => {
        const pSkills = (p.skills || []).map(s => String(s).trim().toLowerCase());
        const matches = skills.filter(s => pSkills.includes(s));
        const score = Math.min(maxScore, matches.length);
        return { ...p, score };
      })
      .filter(p => p.score >= 1)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return (b.rating || 0) - (a.rating || 0);
      });

    res.json({ results, count: results.length });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Search failed" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
