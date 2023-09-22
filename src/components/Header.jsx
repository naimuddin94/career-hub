import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const links = (
    <>
      <NavLink to="/">
        <li className="px-4 py-2 rounded-md cursor-pointer hover:bg-slate-200 font-medium">
          Statistics
        </li>
      </NavLink>
      <NavLink to="/appliedJob">
        <li className="px-4 py-2 rounded-md cursor-pointer hover:bg-slate-200 font-medium">
          Applied Jobs
        </li>
      </NavLink>
      <li className="px-4 py-2 rounded-md cursor-pointer hover:bg-slate-200 font-medium">
        Blog
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Button>Star Applying</Button>
      </div>
    </div>
  );
};

export default Header;
