import { Link } from "react-router-dom";
import { createContext, useState, useContext, useEffect } from "react";

import { ChevronFirst, ChevronLast } from "lucide-react";

const SidebarContext = createContext();
const Sidebar = ({ children }) => {
  console.log(localStorage.getItem("expanded"));
  const [expanded, setExpanded] = useState(() => {
    const storedState = localStorage.getItem("expanded");
    return storedState ? Boolean(storedState) : true;
  });

  useEffect(() => {
    console.log("Changing state: " + expanded);
    localStorage.setItem("expanded", expanded);
    console.log(localStorage.getItem("expanded"));
  }, [expanded]);

  const flipExpanded = () => {
    setExpanded((curr) => !curr);
  };

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white horder-r shodow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Link to="/">
            <h1
              className={`text-2xl font-bold text-blue-600 overflow-hidden transition-all ${
                expanded ? "w-55" : "w-0"
              }`}
            >
              Ctrl+Alt+Employed
            </h1>
          </Link>
          <button
            onClick={flipExpanded}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p3">
          <div className="w-10 h-10 rounded-md">@</div>
          <div
            className={`
                flex justify-between items-center 
                overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
           `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">TEST USER</h4>
              <span className="text-xs text-gray-600">testing@email.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export const SidebarItem = ({ icon, text, active, alert }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-300 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-100 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
};

export default Sidebar;
