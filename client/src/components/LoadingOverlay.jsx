export default function LoadingOverlay({ label = "Loading…" }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 grid place-items-center bg-white/60 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <span className="inline-block h-7 w-7 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" />
        <span className="font-medium text-indigo-700">{label}</span>
      </div>
    </div>
  );
}
