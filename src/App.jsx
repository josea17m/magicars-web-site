/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import logo from "/public/logo.png";
import imagen from "/public/pulidos.png";

import Footer from "./components/Footer";
import AOS from "aos";
import ItemService from "./components/ItemService";
import { Link } from "react-router-dom";
import golpes from "/public/golpes-parabrisas.png";
import wrapping from "/public/wrapping.png";
import polarizado from "/public/polarizado.png";
import pdr from "/public/pdr.png";
import pdf from "/public/pdf.png";
import Comment from "./components/Comment.jsx";
import Benefit from "./components/Benefit";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [servicesModal, setServicesModal] = useState(false);
  const [navbarMobile, setNavbarMobile] = useState(false);
  const widthScreen = screen.width;
  useEffect(() => {
    AOS.init({ once: true });
    setTimeout(() => {
      setArrow(true);
    }, 1000);
  }, []);
  const location = window.location.pathname;
  window.addEventListener("scroll", () => {
    if (location.length < 2) {
      const d = document.getElementById("imagen");
      const caja = d.getBoundingClientRect();
      if (caja.top < -800) {
        setNavbar(true);
        return;
      }
      setNavbar(false);
    }
  });

  return (
    <>
      {/* Background Image */}
      <div className="h-d">
        <div
          data-aos="zoom-in"
          className="bg-img w-full h-full flex flex-col items-center justify-center"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="logo-img bg-contain md:bg-auto w-10/12 md:w-9/12 h-1/2"
          ></div>
          {arrow ? (
            <svg
              className={`duration-300 absolute bottom-10`}
              data-aos="fade-down"
              data-aos-duration="1500"
              version="1.1"
              viewBox="0 0 129 129"
              enableBackground="new 0 0 129 129"
              width="50"
              height="50"
            >
              <g>
                <path
                  fill="#989490"
                  d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
                />
              </g>
            </svg>
          ) : (
            ""
          )}
        </div>
      </div>

      <Navbar
        setServicesModal={setServicesModal}
        servicesModal={servicesModal}
        navbar={navbar}
        setNavbarMobile={setNavbarMobile}
        navbarMobile={navbarMobile}
        setNavbar={setNavbar}
        page={false}
      />

      {/* Servicios */}
      <h2
        id="services"
        className="items-center px-2 md:px-10 lg:pb-5 pt-6 my-10 flex gap-10 justify-center"
      >
        <span
          data-aos="fade-right"
          data-aos-duration="1500"
          className="bg-black h-[1px] w-[15%] md:w-[20%] lg:h-[2px] lg:w-[30%]"
        ></span>
        <span
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="font-bold text-lg md:text-2xl lg:text-4xl w-[35%] md:w-[29%] text-center"
        >
          Te ofrecemos
        </span>
        <span
          data-aos="fade-left"
          data-aos-duration="1500"
          className="bg-black h-[1px] w-[15%] md:w-[20%] lg:h-[2px] lg:w-[30%]"
        ></span>
      </h2>
      <div className="p-4 md:p-0 layout-page border-black grid gap-10 md:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        <ItemService image="p" tile="Pulida de vidrios" r="pulida-vidrios" />
        <ItemService image="g" tile="Pulida de vidrios" r="" />
        <ItemService image="w" tile="Pulida de vidrios" r="" />
        <ItemService image="pl" tile="Pulida de vidrios" r="" />
        <ItemService image="pd" tile="Pulida de vidrios" r="" />
        <ItemService image="pf" tile="Pulida de vidrios" r="" />
      </div>

      {/* Beneficios */}
      <div className="flex flex-col gap-10 p-5 lg:flex-row justify-around items-center w-full my-10">
        <Benefit
          tile="INNOVADOR"
          pagra="La innovación es nuestro segundo nombre. Mientras que otros fabricantes
        venden las mismas herramientas cansadas año tras año, nosotros siempre
        estamos esforzándonos por mejorar. Cuando utiliza GlasWeld, está
        utilizando las herramientas más innovadoras disponibles."
        />
        <Benefit
          tile="RÁPIDO"
          pagra=" No hace falta que le digamos que el tiempo es dinero. Ya sea que
          esté en el mundo del vidrio para automóviles o del vidrio plano, la
          reparación del vidrio debe ser rápida. Nuestras herramientas y
          técnicas optimizadas le permiten realizar reparaciones en solo
          minutos."
        />
        <Benefit
          tile="SIMPLE"
          pagra=" Con las herramientas adecuadas, la reparación de cristales no tiene
          por qué ser complicada. Es por eso que diseñamos nuestras
          herramientas para que sean simples y fáciles de usar. Con las
          herramientas GlasWeld, incluso los principiantes pueden obtener
          resultados sorprendentes la primera vez."
        />
      </div>

      {/* Comentarios */}
      <div className="py-10 bg-black flex flex-col gap-10">
        <h2 className="text-white text-center md:text-left text-lg md:text-2xl lg:text-4xl font-bold px-10 lg:pb-5 pt-6">
          Nuestros clientes nos recomiendan
        </h2>
        <div className="gap-10 flex flex-col items-center h-full justify-center">
          <Comment turn="up" o="a" />
          <Comment turn="down" o="b" />
          <Comment turn="up" o="c" />
        </div>
      </div>

      {/* Capacitaciones */}
      <h2
        id="capacitaciones"
        className="text-center md:text-left text-lg md:text-2xl lg:text-4xl font-bold px-10 lg:pb-5 pt-5"
      >
        Se parte de nuestra familia
      </h2>
      <div className="layout-service flex flex-col md:flex-row items-center">
        <div className="w-1/2 h-full md:h-3/4 p-5 bg-white">
          Descubre una gama de cursos especializados diseñados para convertirte
          en un experto en la industria automotriz. 
          <br /><br />
          En nuestra escuela, te
          ofrecemos una variedad de oportunidades de capacitación:
        </div>
        <div className="w-1/2 h-full md:h-3/4  p-5 bg-white ">
          Nuestras herramientas
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

{
  /*  */
}
