import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="p-5 bg-gray-800 md:flex md:items-center md:justify-center">
        <ul className="md:flex">
          <li className="mx-4">
            <Link className="text-xl text-white hover:text-cyan-500 duration-500" to="/">HOME</Link>
          </li>
          <li className="mx-4">
            <Link className="text-xl text-white hover:text-cyan-500 duration-500" to="/About">ABOUT ME</Link>
          </li>
          <li className="mx-4">
            <Link className="text-xl text-white hover:text-cyan-500 duration-500" to="/Projects">PROJECTS</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;
