import { useState } from "react";
import logo from "/public/logo.png";
import Footer from "../components/Footer";
import pulidos from "/public/pulidos.png";
import golpes from "/public/golpes-parabrisas.png";
import wrapping from "/public/wrapping.png";
import ppf from "/public/pdf.png";
import pdr from "/public/pdr.png";
import polarizado from "/public/polarizado.png";
import CapItem from "../components/CapItem";
import CapPage from "../components/CapPage";
import Form from "../components/Form";

const Capacitacion = () => {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    image: pulidos,
    tile: "",
    list: [],
  });


  const openModal = (i, t, l) => {
    setModal(true);
    setModalInfo({ image: i, tile: t, list: l });
  };
  return (
    <div className="flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full borde items-end md:hidden fixed z-10 bg-white">
        <div className="p-2">
          <svg
            onClick={() => setMenu(!menu)}
            width="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 18L20 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M4 12L20 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M4 6L20 6"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        </div>
        <div
          className={`${
            menu ? "onsd" : "offsd"
          } nav-bar-shadow duration-[200ms]`}
          onClick={() => setMenu(false)}
        ></div>

        <div
          className={` ${
            menu ? "on" : "off"
          } nav-bar h w-[80vw] border-t-[1px] z-0 borde-t bg-white flex flex-col gap-5 py-10 px-4`}
        >
          <a href="#pulido">Restauración de vidrios</a>
          <a href="#golpe">Golpes en parabrisas</a>
          <a href="#pdr">PDR</a>
          <a href="#ppf">PPF</a>
          <a href="#wc">Wrapping car</a>
          <a href="#polarizado">Polarizado</a>
          <a href="#form">Contáctanos</a>
          <a href="#dire">Dirección</a>
        </div>
      </nav>

      {/* Logo */}
      <div className="flex justify-center p-5 mt-[48px]">
        <img src={logo} alt="logo" />
      </div>

      {/* Tile */}
      <div className="w-11/12">
        <h1 className="font-extrabold text-center mt-5 my-10 text-2xl">
          Bienvenido a nuestra escuela de capacitación automotriz
        </h1>
        <p className="text-lg font-semibold lg:text-center lg:pt-5">
          Descubre una gama de cursos especializados diseñados para convertirte
          en un
          <span className="text-[#ee1f24] font-bold lg:text-center">
            {" "}
            experto{" "}
          </span>
          en la industria automotriz.
        </p>
        <br />
        <p className="text-lg font-semibold lg:text-center">
          En nuestra escuela, te ofrecemos una variedad de oportunidades de
          capacitación:
        </p>
      </div>

      {/* Cap Items */}
      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-20 items-center mt-10 p-2">
        <CapItem
          setModalInfo={setModalInfo}
          image={pulidos}
          tile="Pulida de vidrios"
          hr="pulido"
          list={[
            "Aprende a eliminar tanto rayones superficiales como profundos en vidrios de autos de manera altamente efectiva.",
            "Domina el uso de productos y herramientas especializados para lograr            resultados sorprendentes en la restauración de vidrios dañados.",
            " Descubre técnicas de pulido que no solo mejoran la estética, sino también garantizan una visión cristalina y segura.",
            " Adquiere conocimientos sobre cómo abordar rayones profundos para mantener la integridad de los vidrios y evitar reemplazos costosos.",
            "Cumple con las regulaciones y normativas, y domina las mejores prácticas en seguridad.",
            "Conviértete en un experto en mejorar la claridad visual y la apariencia de vehículos, ofreciendo un servicio de alta demanda.",
            "Aumenta tus ingresos en la industria automotriz y destácate como un profesional de la reparación de vidrios. ¡Inscríbete hoy y sorprende con vidrios impecables y seguros!",
          ]}
          openModal={openModal}
        />
        <CapItem
          setModalInfo={setModalInfo}
          image={golpes}
          tile="Reparación de golpes en parabrisas"
          hr="golpe"
          list={[
            "Aprende a reparar de forma efectiva y profesional golpes y daños en parabrisas, preservando la seguridad y la estética del vehículo.",
            "Domina las técnicas especializadas y las herramientas requeridas para restaurar la integridad de los parabrisas.",
            "Adquiere habilidades esenciales en la identificación y evaluación precisa de los daños en los parabrisas.",
            "Cumple con las normativas y regulaciones de seguridad mientras brindas soluciones de calidad.",
            "Conviértete en un especialista en la industria automotriz, ofreciendo un servicio en alta demanda.",
            "Aumenta tus ingresos y establece una reputación sólida en la reparación de parabrisas. ¡Únete a nosotros y marca la diferencia en la seguridad vial! ",
          ]}
          openModal={openModal}
        />
        <CapItem
          setModalInfo={setModalInfo}
          image={wrapping}
          tile="Wrapping Car"
          hr="wc"
          list={[
            "Descubre el arte de transformar la apariencia de automóviles mediante la instalación experta de vinilos adhesivos.",
            "Aprende técnicas de aplicación que permiten cambios de color y diseño, ya sea de manera temporal o permanente.",
            "Adquiere destrezas en el uso de herramientas y materiales especializados para obtener resultados impecables.",
            "Conviértete en un profesional en personalización automotriz, ofreciendo a tus clientes un mundo de posibilidades estilísticas.",
            "Cumple con los más altos estándares de calidad y precisión en la instalación de vinilos.",
            "Aumenta tus ingresos y establece tu nombre en la industria automotriz como un experto en el arte del wrapping. ¡Inscríbete y crea obras maestras sobre ruedas!",
          ]}
          openModal={openModal}
        />
        <CapItem
          setModalInfo={setModalInfo}
          image={ppf}
          tile="PPF (Paint Protection Film)"
          hr="ppf"
          list={[
            "Aprende a aplicar películas de protección de pintura de manera experta en vehículos, preservando su apariencia y valor.",
            "Domina técnicas de instalación precisas para proteger la carrocería de automóviles contra rayones, insectos y otros daños.",
            "Adquiere conocimientos sobre productos y herramientas específicas utilizadas en la aplicación de PPF.",
            "Conviértete en un especialista en personalización y protección automotriz, ofreciendo servicios de alta calidad.",
            "Cumple con estándares de calidad y seguridad en la instalación de PPF, ganando la confianza de tus clientes.",
            "Aumenta tus ingresos y establece una sólida reputación en la industria automotriz. ¡Únete a nosotros y protege la belleza de los vehículos con destreza y precisión!",
          ]}
          openModal={openModal}
        />
        <CapItem
          setModalInfo={setModalInfo}
          image={pdr}
          tile="PDR (Paintless Dent Repair)"
          hr="pdr"
          list={[
            "Domina la técnica revolucionaria de PDR para eliminar abolladuras en automóviles sin dañar la pintura original.",
            "Aprende a utilizar herramientas especializadas y técnicas precisas para restaurar la apariencia de los vehículos de manera eficiente.",
            "Adquiere habilidades avanzadas en la identificación y evaluación de abolladuras de diferentes tamaños y tipos.",
            "Conviértete en un experto en la industria automotriz, ofreciendo servicios de reparación de alta calidad y reduciendo costos de reparación.",
            "Cumple con las regulaciones de seguridad y las mejores prácticas para destacar en la reparación de abolladuras.",
            "Aumenta tus ingresos y establece una sólida reputación como profesional en PDR. ¡Únete a nosotros y transforma la apariencia de los automóviles de manera impecable!",
          ]}
          openModal={openModal}
        />
        <CapItem
          setModalInfo={setModalInfo}
          image={polarizado}
          tile="Polarizado"
          hr="polarizado"
          list={[
            "Aprende a aplicar películas de polarizado en ventanas de vehículos de manera profesional, mejorando la privacidad y la protección solar.",
            "Domina las técnicas precisas de instalación para proporcionar una apariencia estilizada y funcionalidad a tus clientes.",
            "Adquiere conocimientos sobre los productos, herramientas y tipos de películas utilizados en el polarizado de ventanas.",
            "Conviértete en un especialista en personalización automotriz, ofreciendo servicios de alta demanda.",
            "Cumple con las regulaciones locales sobre transmisión de luz y garantiza la satisfacción de tus clientes.",
            "Aumenta tus ingresos y establece tu reputación como profesional en polarizado automotriz. ¡Únete a nosotros y dale un toque de estilo y comodidad a cada vehículo!",
          ]}
          openModal={openModal}
        />
      </div>

      <Form />

      <CapPage
        image={modalInfo.image}
        tile={modalInfo.tile}
        setModal={setModal}
        list={modalInfo.list}
        modal={modal}
      />

      <Footer />
    </div>
  );
};

export default Capacitacion;
