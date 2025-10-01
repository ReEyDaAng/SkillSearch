import { useEffect, useState } from "react";
import { searchProfiles } from "../lib/api.js";
import ProfileCard from "../components/ProfileCard.jsx";

export default function Search() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  const addChip = (value) => {
    const v = value.trim();
    if (!v) return;
    if (!chips.includes(v)) setChips([...chips, v]);
    setInput("");
  };

  const onSearch = async () => {
    setLoading(true);
    setError("");
    setResults([]);
    try {
      const payload = chips.length ? chips : (input ? [input] : []);
      const data = await searchProfiles(payload);
      setResults(data.results || []);
    } catch (e) {
      setError(e.message || "Search failed");
    } finally {
      setLoading(false);
    }
  };

  const removeChip = (c) => setChips(chips.filter(x => x !== c));

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Search Profiles</h2>
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addChip(input)}
          placeholder="Skills"
          className="w-64 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button onClick={() => addChip(input)} className="rounded-lg border px-3 py-2 hover:bg-slate-50">Add</button>
        <button onClick={onSearch} className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Search</button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {chips.map(c => (
          <button key={c} onClick={() => removeChip(c)} className="chip hover:bg-indigo-200">{c} ×</button>
        ))}
      </div>

      {loading && <div className="mt-6">Loading…</div>}
      {error && <div className="mt-6 text-red-600">{error}</div>}
      {!loading && !error && results.length === 0 && (
        <div className="mt-6 text-slate-500">No results yet. Add a skill and press Search.</div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map(p => <ProfileCard key={p.id} profile={p} />)}
      </div>
    </div>
  );
}
