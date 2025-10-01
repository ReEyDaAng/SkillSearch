export default function Loader({ label = "Loading…" }) {
  return (
    <div
      className="flex items-center justify-center gap-3 py-10"
      role="status"
      aria-live="polite"
    >
      <span className="inline-block h-6 w-6 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
      <span className="text-slate-600">{label}</span>
    </div>
  );
}
