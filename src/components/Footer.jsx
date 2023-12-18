import ws from "/public/assets/whatsapp.png";
import fb from "/public/assets/facebook.png";
import ins from "/public/assets/instagram.png";
import yt from "/public/assets/youtube.png";
import gm from "/public/assets/new.png";

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="bg-black flex flex-col gap-5 z-0 w-full mt-5 items-center text-white justify-around"
    >
      <h3 className="text-center pb-5 text-xl md:text-3xl mt-16">
        Nuestras sedes
      </h3>
      <div className="flex flex-col md:flex-row justify-around w-full px-10 pb-32">
        <div className="mapouter p-5 md:p-1 md:w-2/4 lg:w-2/5">
          <div className="gmap_canvas">
            <iframe
              className="w-full h-52 md:h-72"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Cl.+36a+Sur+%2347-18%2C+Zona+2%2C+Envigado%2C+Antioquia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>

        <div className="mapouter p-5 md:p-1 md:w-2/4 lg:w-2/5">
          <div className="gmap_canvas">
            <iframe
              className="w-full h-52 md:h-72"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.635761594795!2d-75.5953683842998!3d6.2096711008646786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46837f2e546dd9%3A0xac1e8ce78d9b6848!2sMagicars!5e0!3m2!1ses-419!2sus!4v1702678142559!5m2!1ses-419!2sus"
            ></iframe>
          </div>
        </div>
        <div className="mapouter p-5 md:p-1 md:w-2/4 lg:w-2/5">
          <div className="gmap_canvas">
            <iframe
              className="w-full h-52 md:h-72"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Cl.+36a+Sur+%2347-18%2C+Zona+2%2C+Envigado%2C+Antioquia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="bg-white w-full h-full text-black px-5">
        <h3 className="text-center pb-5 text-xl md:text-3xl mt-10 ">
          Nuestras redes sociales
        </h3>
        <div
          id="dire"
          className="flex flex-col border-[2px] p-5 md:flex-row justify-around w-full text-center mb-16 gap-10 md:gap-5 shadow-2xl"
        >
          <div className="flex flex-col gap-5 md:w-[20%]">
            <a
              className="flex w-full justify-center md:hover:scale-110 duration-200"
              href="https://wa.me/573016674716?text=Magicars+Medell%C3%ADn"
              target="_blank"
              rel="noreferrer"
            >
              <img className="" src={ws} alt="" />
            </a>
            <span>+57 301-667-4716</span>
          </div>
          <div className="flex flex-col gap-5  md:w-[20%]">
            <a
              className="flex w-full justify-center md:hover:scale-110 duration-200"
              href="https://www.instagram.com/magicarsmedellin/?hl=es-la"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ins} alt="" />
            </a>
            <span>@MAGICARSMEDELLIN</span>
          </div>
          <div className="flex flex-col gap-5  md:w-[20%]">
            <a
              className="flex w-full justify-center md:hover:scale-110 duration-200"
              href="https://www.youtube.com/@magicarscolombia2629"
              target="_blank"
              rel="noreferrer"
            >
              <img src={yt} alt="" />
            </a>
            <span>Magicars colombia</span>
          </div>
          <div className="flex flex-col gap-5  md:w-[20%]">
            <a
              className="flex w-full justify-center md:hover:scale-110 duration-200"
              href="https://www.facebook.com/polarizadosmagicars/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fb} alt="" />
            </a>
            <span>Magicars</span>
          </div>
          <div className="flex flex-col gap-5  md:w-[20%]">
            <div className="flex w-full justify-center">
              <img src={gm} alt="" />
            </div>
            <span>magicarscolombia@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
