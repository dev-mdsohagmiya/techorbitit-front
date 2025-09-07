import { Title } from "@/components/ui/Title"

export const WhyCustomerLoveUs = () => {
    return <div>
        <div className="text-center">
            <Title text={"Why Customers Love ❤️ Us?"} />
        </div>

        <div className="grid grid-cols-12 h-[600px] gap-10 pt-7">
            <div className="bg-[#f2f4f6] col-span-8 h-full flex  flex-col  gap-14 justify-between p-12 rounded-[24px]">
                <div className="flex flex-col gap-8">
                    <div>
                        <img src="/love/dot.svg" alt="" />
                    </div>
                    <div>
                        < span className="text-[28px] font-[400] text-[#1a1a1a]">
                            I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product
                        </span>
                    </div>
                </div>
                <div className="bg-[url('/love/bg.png')] bg-cover bg-center h-[100px] flex justify-between p-5 rounded-2xl">
                    <div>
                        <h2 className="text-[32px] font-[600]"> - Samuel Varughese</h2>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-[51px] w-[51px] rounded-full border-[1px] flex justify-center items-center border-[#00000033] cursor-pointer">
                            <img src="/love/left.svg" alt="" />
                        </div>
                        <div className="h-[51px] w-[51px] rounded-full border-[1px] flex justify-center items-center border-[#00000033] cursor-pointer">
                            <img src="/love/right.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-4 bg-[#f2f4f6] rounded-[24px] ">
                <img src="/love/profile.svg" className="w-full h-full" alt="" />

            </div>
        </div>
    </div>
}