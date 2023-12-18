/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logoGray from "/public/logo-gray.png";
import { useEffect } from "react";

const Navbar = ({
  setServicesModal,
  servicesModal,
  navbar,
  setNavbarMobile,
  navbarMobile,
  page,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const widthScreen = screen.width;
  return (
    <>
      {/* Navbar */}
      {widthScreen > 767 && (
        <nav
          id="nav"
          className={`${navbar ? "top-0" : "-top-40"} ${
            page ? "top-0" : "-top-40 fixed"
          } w-full bg-black text-white flex z-20 justify-between items-center duration-500`}
        >
          <Link to="/" className="flex justify-center w-1/3 p-8">
            <img
              src={logoGray}
              className="h-full md:w-10/12 lg:w-5/12"
              alt="logo"
            />
          </Link>

          <ul
            className={` bg-black p-0 w-2/3 text-sm lg:text-lg flex justify-center gap-10 items-center`}
          >
            {/* Navbar Desktop */}
            <div
              onClick={() => setServicesModal(!servicesModal)}
              className="hidden md:block max-content cursor-pointer hover:text-red-500 duration-500"
            >
              <div> Nuestros servicios</div>

              <ul
                className={`${
                  servicesModal ? "smon" : "smoff"
                } absolute -bottom-40 text-lg bg-white text-black  services-modal`}
              >
                <li>Pulida de vidrios</li>
                <li>Reparación de parabrisas</li>
                <li>Polarizados</li>
                <li>Wrapping Car</li>
                <li>PPF (Paint Protection Film)</li>
                <li>PDR (Paintless Dent Repair)</li>
              </ul>
            </div>
            <Link
              to="/capacitacion"
              className="hidden md:block max-content cursor-pointer hover:text-red-500 duration-500"
            >
              Capacitaciones
            </Link>
            <Link className="hidden md:block max-content cursor-pointer hover:text-red-500 duration-500">
              Contactános
            </Link>
          </ul>
        </nav>
      )}

      {/* Navbar Mobile */}
      {widthScreen < 767 && (
        <nav
          className={`${
            navbar ? "top-0" : "-top-40"
          }  bg-black flex flex-col fixed duration-500 z-20 w-full`}
        >
          <svg
            onClick={() => setNavbarMobile(!navbarMobile)}
            className="cursor-pointer"
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 18H10"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M4 12L16 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M4 6L20 6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>

          <div
            className={`${
              navbarMobile ? "nbon" : "nboff"
            }  navbar-h p-5 bg-white md:hidden flex flex-col gap-5 z-20 fixed top-[64px]`}
          >
            <a
              href="#services"
              onClick={() => setNavbarMobile(false)}
              className="font-bold text-lg flex gap-2"
            >
              <span className=" bg-black">.</span>Servicios
            </a>
            <div className="flex flex-col gap-2 pl-5 pb-5">
              <a href="/pulida-vidrios">Pulida de vidrios</a>
              <a href="/golpes-parabrisas">Reparación de parabrisas</a>
              <a href="/polarizados">Polarizados</a>
              <a href="/wrapping">Wrapping Car</a>
              <a href="/ppf">PPF (Paint Protection Film)</a>
              <a href="/pdr">PDR (Paintless Dent Repair)</a>
            </div>
            <a
              href="#capacitaciones"
              onClick={() => setNavbarMobile(false)}
              className="font-bold text-lg flex gap-2"
            >
              <span className=" bg-black">.</span>Capacitaciones
            </a>
            <a
              href="#contacto"
              onClick={() => setNavbarMobile(false)}
              className="font-bold text-lg flex gap-2"
            >
              <span className=" bg-black">.</span>Contáctanos
            </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
