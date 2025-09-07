import { Title } from "@/components/ui/Title";

export const WhyCustomerLoveUs = () => {
  return (
    <div className="px-4 md:px-6 lg:px-0">
      <div className="text-center">
        <Title text={"Why Customers Love ❤️ Us?"} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 h-auto lg:h-[600px] gap-6 lg:gap-10 pt-7">
        <div className="bg-[#f2f4f6] lg:col-span-8 h-auto lg:h-full flex flex-col gap-8 lg:gap-14 justify-between p-6 md:p-8 lg:p-12 rounded-[16px] md:rounded-[20px] lg:rounded-[24px]">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div>
              <img
                src="/love/dot.svg"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div>
              <span className="text-[18px] md:text-[22px] lg:text-[28px] font-[400] text-[#1a1a1a] leading-relaxed">
                I had initial issue with stock availability and delivery. Once
                the product arrived on site the work has completed very
                fast(400ft.) Value for money and easy to install. Happy with the
                product
              </span>
            </div>
          </div>
          <div className="bg-[url('/love/bg.png')] bg-cover bg-center h-[80px] md:h-[90px] lg:h-[100px] flex justify-between items-center p-4 md:p-5 rounded-xl md:rounded-2xl">
            <div>
              <h2 className="text-[20px] md:text-[26px] lg:text-[32px] font-[600]">
                {" "}
                - Samuel Varughese
              </h2>
            </div>
            <div className="flex gap-2">
              <div className="h-[40px] w-[40px] md:h-[45px] md:w-[45px] lg:h-[51px] lg:w-[51px] rounded-full border-[1px] flex justify-center items-center border-[#00000033] cursor-pointer">
                <img
                  src="/love/left.svg"
                  alt=""
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </div>
              <div className="h-[40px] w-[40px] md:h-[45px] md:w-[45px] lg:h-[51px] lg:w-[51px] rounded-full border-[1px] flex justify-center items-center border-[#00000033] cursor-pointer">
                <img
                  src="/love/right.svg"
                  alt=""
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 bg-[#f2f4f6] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] h-[300px] md:h-[400px] lg:h-full">
          <img
            src="/love/profile.svg"
            className="w-full h-full object-cover rounded-[16px] md:rounded-[20px] lg:rounded-[24px]"
            alt="Customer profile"
          />
        </div>
      </div>
    </div>
  );
};
