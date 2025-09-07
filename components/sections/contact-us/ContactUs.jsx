import { Branch } from "./Branch";
import { Form } from "./Form";

export const ContactUS = () => {
  return (
    <div className="px-4 md:px-6 lg:px-0">
      <div className="border-[1px] border-gray-300 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] relative">
        <div className="absolute -top-[12px] md:-top-[15px] left-4 right-4 flex justify-center z-10">
          <div className="text-[14px] md:text-[16px] font-[500] bg-[#b0dd1e] w-[100px] md:w-[123px] h-[22px] md:h-[25px] cursor-pointer flex items-center justify-center rounded-full">
            <span className="text-[12px] md:text-[14px] font-[500] text-black uppercase">
              Branches
            </span>
          </div>
        </div>

        <div className="pt-12 md:pt-14 lg:pt-16">
          <div className="px-4 md:px-6 lg:px-0">
            <Branch />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 p-4 md:p-6 lg:p-10 gap-6 md:gap-8 lg:gap-10">
            <div className="lg:col-span-5 order-1">
              <Form />
            </div>

            <div className="lg:col-span-7 w-full order-2">
              <img
                className="w-full h-auto select-none cursor-pointer rounded-[12px] md:rounded-[16px] lg:rounded-[20px]"
                src="/contact/location.svg"
                alt="Location map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
