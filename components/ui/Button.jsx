export const Button = ({ size, text }) => {
  if (size === "md") {
    return (
      <div className="cursor-pointer flex justify-center items-center   bg-[#b0dd1e] w-[150px] h-[50px] rounded-[100px]">
        <span className="text-[18px] font-[500] text-black"> Shop Now</span>
      </div>
    );
  }

  if (size === "sm")
    return (
      <div className="cursor-pointer flex justify-center items-center bg-[#b0dd1e] w-[110px] h-[32px] md:w-[128px] md:h-[38px] rounded-[100px]">
        <span className="text-[12px] md:text-[14px] font-[500] text-black">
          {" "}
          Shop Now
        </span>
      </div>
    );
};
