import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="p-5 bg-gray-800 flex md:items-center md:justify-between " >
      <div className="top-10">
          <span className="text-xl text-white font-extrabold md:ml-52">Nasc1mento</span>
        </div>
        <ul className="md:flex mr-52 ml-40 flex-none">
          <li className="md:mx-4">
            <Link className="text-xl text-white hover:text-cyan-500 duration-500" to="/">HOME</Link>
          </li>
          <li className="md:mx-4">
            <Link className="text-xl text-white hover:text-cyan-500 duration-500" to="/Projects">PROJECTS</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;
