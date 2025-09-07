export const Button = ({
  size,
  text,
  type = "button",
  disabled = false,
  onClick,
}) => {
  const baseClasses =
    "cursor-pointer flex justify-center items-center rounded-[100px] transition-all duration-300";
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:opacity-90";

  if (size === "md") {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${baseClasses} ${disabledClasses} bg-[#b0dd1e] w-[150px] h-[50px]`}
      >
        <span className="text-[18px] font-[500] text-black">
          {text || "Shop Now"}
        </span>
      </button>
    );
  }

  if (size === "sm") {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${baseClasses} ${disabledClasses} bg-[#b0dd1e] w-[110px] h-[32px] md:w-[128px] md:h-[38px]`}
      >
        <span className="text-[12px] md:text-[14px] font-[500] text-black">
          {text || "Shop Now"}
        </span>
      </button>
    );
  }
};
