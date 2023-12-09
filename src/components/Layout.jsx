import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/user/actions";

const Layout = () => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const handleSignOutClick = () => dispatch(signOut());

  return (
    <>
      <header className="container flex gap-2 mx-auto py-1 px-2">
        <h1>Hello, {user.email}</h1>
        <nav className="ml-auto flex gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-500"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/notes"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-500"
            }
          >
            Notes
          </NavLink>
          <p className="cursor-pointer" onClick={handleSignOutClick}>
            Logout
          </p>
        </nav>
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
