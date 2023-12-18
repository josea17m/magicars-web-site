const Form = () => {
  return (
    <div id="form" className="p-2 my-16">
      <h3 className="font-bold text-lg text-center">
        Resgístrate en este formulario si te interesa formar parte de nuestra
        familia
      </h3>

      <form
        action="https://formsubmit.co/magicarscolombia@gmail.com"
        method="post"
        name="register"
        className=" flex flex-col gap-10 p-5 border-2 border-black rounded-xl mt-4"
      >
        <label className="flex flex-col justify-between">
          <span>Nombre completo:</span>
          <input
            className="bg-gray-200 p-2 outline-none border-b-[1px] mt-2 font-semibold border-gray-400"
            type="text"
            name="Nombre"
            required
            autoComplete="true"
          />
        </label>
        <label className="flex flex-col justify-between">
          <span>Correo Electrónico:</span>
          <input
            className="bg-gray-200 p-2 outline-none border-b-[1px] mt-2 font-semibold border-gray-400"
            type="email"
            name="Email"
            required
            autoComplete="true"
          />
        </label>
        <label className="flex flex-col justify-between">
          <span>Número de teléfono:</span>
          <input
            className="bg-gray-200 p-2 outline-none border-b-[1px] mt-2 font-semibold border-gray-400"
            type="number"
            name="Número de télefono"
            minLength="2"
            pattern="^[0-9]-"
            required
            autoComplete="true"
          />
        </label>
        <button
          className="bg-black text-white p-1 mt-3 rounded-xl"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
