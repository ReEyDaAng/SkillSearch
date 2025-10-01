export default function ProfileCardSkeleton() {
  return (
    <div className="card animate-pulse">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-slate-200" />
        <div className="flex-1">
          <div className="h-4 w-40 rounded bg-slate-200" />
          <div className="mt-2 h-3 w-28 rounded bg-slate-200" />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <div className="h-6 w-16 rounded-full bg-slate-200" />
        <div className="h-6 w-20 rounded-full bg-slate-200" />
        <div className="h-6 w-14 rounded-full bg-slate-200" />
      </div>
      <div className="mt-3 h-4 w-16 rounded bg-slate-200" />
    </div>
  );
}
