import menuOpen from "../assets/icon-menu.svg";
import menuClose from "../assets/icon-menu-close.svg";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    console.log("Open drawer: ", openDrawer);
  }, [openDrawer]);

  return (
    <header className="flex justify-between items-center py-4 px-8" id="Home">
      <h1 className="flex-1">TheSulabh</h1>
      <div className="drawer drawer-end inline-block flex-1">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
          checked={openDrawer}
          onChange={() => setOpenDrawer(!openDrawer)}
        />
        <nav className="flex justify-end">
          <div className="lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <img src={menuOpen} alt="Open menu" />
            </label>
          </div>

          <div className="hidden lg:block">
            <div className="menu menu-horizontal flex gap-6">
              {navLinks.map((link) => (
                <span>{link}</span>
              ))}
            </div>
          </div>
        </nav>

        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 h-full text-left bg-off-white text-black relative bg-green-300">
            {/* Close drawer btn */}
            <img
              src={menuClose}
              alt="Close menu"
              className="h-8 w-8 ml-auto m-[5%] cursor-pointer btn-ghost btn-square p-2"
              onClick={() => setOpenDrawer(false)}
            />

            {/* drawer links */}
            {navLinks.map((link) => (
              <p className="pb-4" onClick={() => setOpenDrawer(false)}>
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
