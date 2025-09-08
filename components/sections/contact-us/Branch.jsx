export const Branch = () => {
  const branches = [
    { id: 1, name: "Mumbai", image: "/contact/1.png", active: false },
    { id: 2, name: "Delhi", image: "/contact/2.png", active: true },
    { id: 3, name: "Bangalore", image: "/contact/3.png", active: true },
    { id: 4, name: "Chennai", image: "/contact/4.png", active: true },
    { id: 5, name: "Kolkata", image: "/contact/5.png", active: true },
    { id: 6, name: "Pune", image: "/contact/6.png", active: true },
  ];

  return (
    <div className="pb-4 md:pb-6 lg:pb-8">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap gap-2 md:gap-6 lg:gap-10 max-w-full overflow-hidden">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className={`text-center flex justify-center p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl transition-all duration-300 ${
                branch.active
                  ? "bg-white border-[1px] border-gray-200 shadow-sm hover:shadow-md"
                  : "bg-[#f6fbe8] border-[1px] border-gray-200 opacity-[0.5]"
              }`}
            >
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div
                    className={`${
                      branch.id === 6
                        ? "w-[24px] md:w-[28px] lg:w-[32px]"
                        : "w-[50px] md:w-[60px] lg:w-[70px]"
                    }`}
                  >
                    <img
                      className="w-full select-none"
                      src={branch.image}
                      alt={`${branch.name} branch`}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-[12px] md:text-[13px] lg:text-[14px] font-[500] uppercase text-gray-700">
                    {branch.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
