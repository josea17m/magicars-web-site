/* eslint-disable react/prop-types */
const CapItem = ({ image, tile, openModal, list, hr }) => {
  return (
    <div className="w-[95%]" id={`${hr}`}>
      <img className="imga border-[1px] m-0" src={image} alt="" />
      <div className="flex justify-between gap-1 mt-3 items-center ">
        <p className="font-bold">{tile}</p>
        <button
          onClick={() => openModal(image, tile, list)}
          className="bg-black text-white p-3 rounded-xl outline-none"
        >
          Saber más
        </button>
      </div>
    </div>
  );
};

export default CapItem;
