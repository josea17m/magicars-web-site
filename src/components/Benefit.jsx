/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Benefit = ({ tile, pagra }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="1000"
      className="p-10  md:p-20 w-11/12 md:w-2/3 lg:w-[27%] border-[1px] flex flex-col justify-center"
    >
      <h3 className="font-bold mb-5 text-center">{tile}</h3>
      <span>{pagra}</span>
    </div>
  );
};

export default Benefit;
