import { NavLink, Outlet } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-lg ${
        isActive ? "bg-indigo-100 text-indigo-700" : "hover:bg-slate-100"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
          <div className="font-semibold text-indigo-600">SkillSearch</div>
          <nav className="flex gap-2">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/search">Search</NavItem>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
