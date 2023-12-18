/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Comment = ({ turn, o }) => {
  return (
    <div
      data-aos={`fade-${turn}`}
      data-aos-duration="1000"
      className={`${
        o == "a"
          ? "mr-28 md:mr-[200px] lg:mr-[400px]"
          : o == "b"
          ? "ml-28 md:ml-[200px] lg:ml-[400px]"
          : "mr-10 md:mr-[100px] lg:mr-[200px]"
      } bg-white p-10  rounded-md w-1/2 flex flex-col justify-start`}
    >
      <div>José Montero</div>
      <div>Excelente</div>
    </div>
  );
};

export default Comment;
