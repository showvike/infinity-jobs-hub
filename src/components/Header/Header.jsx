import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-li-gr-fr/[.05] to-li-gr-to/[.05] flex justify-between items-center pt-12 px-24">
      <h1 className="font-extrabold text-3xl text-dark-01">
        Infinity Jobs Hub
      </h1>
      <ul className="flex gap-7 font-medium text-dark-03">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/statistics">Statistics</Link>
        </li>
        <li>
          <Link to="/applied-jobs">Applied Jobs</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
      </ul>
      <button className="px-7 py-4 bg-gradient-to-r from-li-gr-fr to-li-gr-to rounded-lg font-extrabold text-xl text-white">
        Start Applying
      </button>
    </nav>
  );
};

export default Header;
