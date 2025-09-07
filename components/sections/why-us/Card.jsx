export const Card = ({ id, icon, title, description, bgColor = "#1B7FE1" }) => {
    return (
        <div className={`grid gap-5 p-10 rounded-[24px] ${id === 2 ? "bg-[#002B55] " : "bg-[#f2f4f6]"} relative overflow-hidden ${id === 2 ? "-translate-y-20" : null}`}>
            <div>
                <img src={icon} alt="" />
            </div>
            <div>
                <h3 className={`text-[26px] font-[500] ${id === 2 ? "text-white" : "text-[#1a1a1a]"} leading-[130%]`}>
                    {title}
                </h3>
            </div>
            <div>
                <span className={`text-[17px] font-[400] ${id === 2 ? "text-white opacity-[0.8px]" : "text-[#1a1a1a]"}`}>
                    {description}
                </span>
            </div>

            <div
                className="w-[340px] h-[340px] rounded-full absolute -right-40 -top-40 m-auto blur-[100px] opacity-[0.5]"
                style={{ backgroundColor: bgColor }}
            ></div>
        </div>
    );
};
