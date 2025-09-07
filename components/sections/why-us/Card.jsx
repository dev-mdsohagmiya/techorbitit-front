export const Card = ({ id, icon, title, description, bgColor = "#1B7FE1" }) => {
  return (
    <div
      className={`grid gap-4 md:gap-5 p-6 md:p-8 lg:p-10 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] ${
        id === 2 ? "bg-[#002B55] " : "bg-[#f2f4f6]"
      } relative overflow-hidden ${id === 2 ? "md:-translate-y-20" : null}`}
    >
      <div>
        <img
          src={icon}
          alt=""
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        />
      </div>
      <div>
        <h3
          className={`text-[20px] md:text-[22px] lg:text-[26px] font-[500] ${
            id === 2 ? "text-white" : "text-[#1a1a1a]"
          } leading-[130%]`}
        >
          {title}
        </h3>
      </div>
      <div>
        <span
          className={`text-[15px] md:text-[16px] lg:text-[17px] font-[400] ${
            id === 2 ? "text-white opacity-[0.8px]" : "text-[#1a1a1a]"
          } leading-relaxed`}
        >
          {description}
        </span>
      </div>

      <div
        className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[340px] lg:h-[340px] rounded-full absolute -right-20 -top-20 md:-right-32 md:-top-32 lg:-right-40 lg:-top-40 m-auto blur-[60px] md:blur-[80px] lg:blur-[100px] opacity-[0.5]"
        style={{ backgroundColor: bgColor }}
      ></div>
    </div>
  );
};
