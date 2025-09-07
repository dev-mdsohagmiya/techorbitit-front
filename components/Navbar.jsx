export const Navbar = () => {
    return (
        <div
            className="flex justify-between items-center relative py-10"
            style={{ zIndex: 10 }}
        >
            <div className="">
                <div>
                    <ul className="flex gap-10 text-[18px] font-[400]">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="">
                {/* <div className="translate-y-5 bg-white p-2 rounded-full" style={{ zIndex: 11 }}>
                    <img src="/logo.png" />
                </div> */}
            </div>
            <div className="">
                <ul className=" flex  gap-10 text-[18px] font-[400]">
                    <li className="flex gap-3 items-center">
                        <div className="inline-block"> Login</div>
                        <div className="inline-block w-[24px] h-[24px]">
                            <img className="w-full h-full" src="/icons/user.svg" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className="w-[24px] h-[24px] ">
                                <img className="w-full h-full" src="/icons/search.svg" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className="w-[24px] h-[24px]">
                                <img className="w-full h-full" src="/icons/card.svg" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="absolute left-0 right-0 m-auto w-[111px] h-[127px]">
                <div className="translate-y-5 bg-white p-2 rounded-full" style={{ zIndex: 11 }}>
                    <img src="/logo.png" />
                </div>
            </div>
        </div>
    );
};
