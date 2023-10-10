const Footer = () => {
  return (
    <footer className="bg-black flex flex-col md:flex-row gap-5 z-0 w-full mt-5 items-center p-5 text-white justify-around">
      <div className="mapouter p-5 md:w-1/3">
        <div className="gmap_canvas">
          <iframe
            className="w-full h-72"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Cl.+36a+Sur+%2347-18%2C+Zona+2%2C+Envigado%2C+Antioquia&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
      <div
        id="dire"
        className="flex flex-col w-10/12 md:w-1/3 text-center gap-5"
      >
        <a
          className="p-3 hover:scale-105 duration-200 bg-green-600"
          href="https://wa.me/573016674716?text=Magicars+Medell%C3%ADn"
        >
          <span>WhatsApp</span>
        </a>

        <a
          className="p-3 hover:scale-105 duration-200 bg-blue-600"
          href="https://www.facebook.com/polarizadosmagicars/"
        >
          <span>Facebook</span>
        </a>

        <a
          className="p-3 hover:scale-105 duration-200 bg-gradient-to-r from-purple-600 to-orange-500 "
          href="https://www.instagram.com/magicarsmedellin/?hl=es-la"
        >
          <span>Instagram</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
