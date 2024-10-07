import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/products",
      name: "Products",
    },
    {
      path: "/product-management",
      name: "Management",
    },
    {
      path: "/about-us",
      name: "About",
    },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 px-4 w-52 p-2 shadow"
          >
            {links?.map((menu, idx) => (
              <Link key={idx} to={menu?.path}>
                {menu?.name}
              </Link>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Fitness Tools</a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal text-lg">
          {links?.map((menu, idx) => (
            <Link className="px-2" key={idx} to={menu?.path}>
              {menu?.name}
            </Link>
          ))}
        </ul>
        <div>
          <Link
            to="/cart"
            className="flex items-center text-primaryColor text-lg"
          >
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
