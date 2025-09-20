import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-8 py-4 flex items-center justify-between">
      {/* Left side: logo + title */}
      <div className="flex items-center gap-2">
        <FaProjectDiagram className="text-2xl text-white" />
        <span className="text-lg font-semibold">viz-sim</span>
      </div>

      {/* Right side: nav links */}
      <nav className="flex gap-8 text-sm">
        <a href="/about" className="hover:text-blue-400 transition-colors">
          About
        </a>
        <a
          href="https://github.com/<your-username>/<your-repo>"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          Repo
        </a>
      </nav>
    </header>
  );
};

export default Header;
