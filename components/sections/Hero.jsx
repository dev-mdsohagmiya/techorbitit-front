import { Button } from "../ui/Button";

export const Hero = () => {
    return (
        <div className="mt-8 -translate-y-[45px]" style={{ zIndex: 1 }}>
            <div className="h-[670px] grid grid-cols-12 bg-[#f2f4f6] p-5 items-center rounded-[24px]">
                <div className="col-span-6 w-full h-full">
                    <div className="w-full h-full">
                        <div className="bg-[url('/hero/bg.svg')] h-full w-full bg-cover bg-center p-5">
                            <img className="w-full h-full " src="/hero/photo.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-span-6 flex justify-center  items-center p-16 ">
                    <div className="grid gap-2">
                        <div className="">
                            <h1 className="leading-[72px] font-[500] text-[62px] text-[var(--Black, rgba(26, 26, 26, 1))]">
                                JF Privezy Grass Wall
                            </h1>
                        </div>
                        <div>
                            <span className="text-[24px] font-[400] leading-[32px] text-[var(--Black, rgba(26, 26, 26, 1))]">
                                The perfact Blend of Greenery
                            </span>
                        </div>
                        <div className="pt-10">
                            <Button size="md" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
