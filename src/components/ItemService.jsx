import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ItemService = ({ image, tile, r }) => {
  return (
    <Link
      to={`/${r}`}
      className="w-full h-[200px] md:h-full md:overflow-hidden"
    >
      <div
        className={`${image} md:object-cover md:hover:scale-125 md:hover:brightness-50 w-full h-[150px] md:h-full duration-300 azucar1`}
      ></div>

      <div className="bg-black text-center h-[50px] text-white py-2 rounded-b-lg md:rounded-none duration-300 azucar2 flex justify-center items-center">
        {tile}
      </div>
    </Link>
  );
};

export default ItemService;

/*    <Link to="/capacitacion">
      <div className="flex flex-col items-center item">
        <img src={image} className="duration-300 w-full" alt="" />
        <h3 className="text-center -z-10 duration-300">{tile}</h3>
        <div className="bg-black text-white btn p-2 -translate-y-[80px] -z-10 duration-300 w-full rounded-b-md">
          Saber mas
        </div>
      </div>
    </Link>*/
