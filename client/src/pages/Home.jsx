import { Link } from "react-router-dom";
import TagCloudChaotic from "../components/TagCloudChaotic.jsx";

export default function Home() {
  return (
    <div className="grid gap-8 md:grid-cols-2 items-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to the Platform</h1>
        <p className="text-slate-600">Find developers by skills in seconds.</p>
        <Link to="/search" className="inline-block rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Go to Search
        </Link>
      </div>
      <TagCloudChaotic />
    </div>
  );
}
