import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfiles } from "../lib/api.js";

export default function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfiles()
      .then(list => {
        setProfile(list.find(x => String(x.id) === String(id)));
      })
      .catch(e => setError(e.message || "Failed to load"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading…</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!profile) return <div className="text-slate-500">Profile not found.</div>;

  return (
    <article className="mx-auto max-w-2xl">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 rounded-2xl bg-slate-200" />
        <div>
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <div className="text-slate-500">{profile.age}, {profile.city}</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {(profile.skills || []).map(s => <span key={s} className="chip">{s}</span>)}
      </div>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="mt-2 text-slate-700">{profile.about}</p>
        <div className="mt-2 text-amber-500">{"★".repeat(Math.round(profile.rating || 0))}</div>
      </section>
    </article>
  );
}
