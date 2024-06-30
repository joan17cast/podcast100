import { Link } from "@tanstack/react-router";

function Header() {
  return (
    <div className="flex flex-row border-b px-2 py-1 shadow">
      <Link to="/" className="text-2xl font-semibold text-cyan-600">
        Podcaster
      </Link>
    </div>
  );
}

export default Header;
