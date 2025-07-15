import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="w-1/4 max-w-3xs px-6 py-6 flex flex-col items-center bg-gray-300">
      <Link to="/">
        <h1 className="text-lg font-bold text-blue-600">Ctrl+Alt+Employed</h1>
      </Link>
      <a href="#" className="mr-6 font-medium hover:text-blue-600 transition">
        Home
      </a>
      <a href="#" className="mr-6 font-medium hover:text-blue-600 transition">
        Dashboard
      </a>
      <a href="#" className="mr-6 font-medium hover:text-blue-600 transition">
        Jobs
      </a>
    </nav>
  );
};

export default Sidebar;
