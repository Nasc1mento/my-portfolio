import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="p-5 bg-gray-800 md:flex md:items-center md:justify-center ">
      <nav >
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]" onClick={() => setIsNavOpen(false)}>
              <li className="border-b text-violet-800 border-inherit my-4 uppercase text-3xl border-black">
                <Link  className="font-bold" to="/">home</Link>
              </li>
              <li className="border-b border-inherit text-violet-800 my-4 uppercase text-3xl border-black">
                <Link className="font-bold" to="/Projects">projects</Link>
              </li>
              <div className="top-10">
          <span className="text-xl text-white font-extrabold md:ml-52">Nasc1mento</span>
        </div>
            </ul>
            
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex" >
          <li className="md:mx-4" >
            <Link className="text-xl text-white hover:text-cyan-500 duration-500 " to="/" >HOME</Link>
          </li>
          <li className="md:mx-4">
            <Link className="text-xl text-white hover:text-cyan-500 duration-500" to="/Projects">PROJECTS</Link>
          </li>       
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
      <Outlet />
    </>
  )
};
