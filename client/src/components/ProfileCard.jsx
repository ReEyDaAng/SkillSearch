import { Link } from "react-router-dom";

export default function ProfileCard({ profile }) {
  return (
    <Link to={`/profile/${profile.id}`} className="card block focus:outline-none focus:ring-2 focus:ring-indigo-500">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-slate-200" />
        <div>
          <div className="font-semibold">{profile.name}</div>
          <div className="text-sm text-slate-500">{profile.age}, {profile.city}</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {(profile.skills || []).slice(0, 4).map(s => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>
      <div className="mt-3 text-amber-500" aria-label={`Rating ${profile.rating}`}>
        {"★".repeat(Math.round(profile.rating || 0))}
        <span className="sr-only">{profile.rating}</span>
      </div>
      {typeof profile.score === "number" && (
        <div className="mt-2 text-sm text-slate-500">Score: {profile.score}</div>
      )}
    </Link>
  );
}
