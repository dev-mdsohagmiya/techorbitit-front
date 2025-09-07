import { Branch } from "./Branch";
import { Form } from "./Form";

export const ContactUS = () => {
    return (
        <div>
            <div className="border-[1px] border-gray-300 rounded-[24px] relative ">
                <div className="absolute -top-[15px] left-4 right-4 flex justify-center z-10">
                    <div className="text-[16px] font-[500] bg-[#b0dd1e] w-[123px] h-[25px] cursor-pointer flex items-center justify-center rounded-full">
                        <span className="text-[14px] font-[500] text-black uppercase">
                            Branches
                        </span>
                    </div>
                </div>

                <div className="pt-16 ">
                    <div className="">
                        <Branch />
                    </div>

                    <div className="grid grid-cols-12 p-10 gap-10">
                        <div className="col-span-5">
                            <Form />
                        </div>

                        <div className="col-span-7 w-full">
                            <img
                                className="w-full  select-none cursor-pointer"
                                src="/contact/location.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
