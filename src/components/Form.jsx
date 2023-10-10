const Form = () => {
  return (
    <div id="form" className="p-2 my-16">
      <h3 className="font-bold text-lg text-center">
        Resgístrate en este formulario si te interesa formar parte de nuestra
        familia
      </h3>

      <form
        data-netlify="true"
        name="register"
        className=" flex flex-col gap-10 p-5 border-2 border-black rounded-xl mt-4"
        action=""
      >
        <label className="flex flex-col justify-between">
          <span>Nombre completo:</span>
          <input
            className="bg-gray-200 outline-none border-b-[1px] border-gray-400"
            type="text"
            name="name"
          />
        </label>
        <label className="flex flex-col justify-between">
          <span>Correo Electrónico:</span>
          <input
            className="bg-gray-200 outline-none border-b-[1px] border-gray-400"
            type="email"
            name="email"
            id=""
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
