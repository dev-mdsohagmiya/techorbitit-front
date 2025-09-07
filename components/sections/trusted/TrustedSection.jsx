export const TrustedSection = () => {
    return <div>
        <div className="bg-[#002B55] relative p-16 rounded-[24px] overflow-hidden">
            <div className="flex justify-center">
                <h2 className="text-[42px] font-[500] text-white">Trusted by over 6K+ customers</h2>
            </div>
            <div className="flex justify-center pt-10">
                <div className="flex gap-16">
                    <div className="flex gap-4 items-center">
                        <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center">
                            <img src="/trusted/3.svg" alt="" />
                        </div>
                        <div className="">
                            <div><h3 className="text-[21px] font-[500] text-white">Premium</h3></div>
                            <div><span className="text-[16px] text-white font-light  opacity-[.9]">Product</span></div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center">
                            <img src="/trusted/1.svg" alt="" />
                        </div>
                        <div className="">
                            <div><h3 className="text-[21px] font-[500] text-white">4000+</h3></div>
                            <div><span className="text-[16px] text-white font-light  opacity-[.9]">Google REviews</span></div>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center">
                            <img src="/trusted/2.svg" alt="" />
                        </div>
                        <div className="">
                            <div><h3 className="text-[21px] font-[500] text-white">Delivery</h3></div>
                            <div><span className="text-[16px] text-white font-light  opacity-[.9]">
                                Across India</span></div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="w-[500px] h-[500px] rounded-full  absolute right-0 left-0 top-32 m-auto blur-[100px] bg-[rgba(27,127,225,0.4)]  "></div>
        </div>
    </div>
}