import { Button } from "@/components/ui/Button"

export const Form = () => {

    return <div className="bg-[#002b55] rounded-[24px] p-10 ">
        <div>
            <h2 className="text-white font-[500] text-[38px]" > Contact Us</h2>
        </div>
        <div className="flex flex-col gap-5">
            <div>
                <input type="text" className="h-[60px] text-white bg-[#FFFFFF1A] w-full  placeholder:text-[20px] placeholder:font-[400] placeholder:text-white p-5 rounded-[24px]" placeholder="Your Name" />
            </div>
            <div>
                <input type="text" className="h-[60px] text-white bg-[#FFFFFF1A] w-full  placeholder:text-[20px] placeholder:font-[400] placeholder:text-white p-5 rounded-[24px]" placeholder="Your Name" />
            </div>
            <div>
                <textarea type="text" className="h-[100px] text-white bg-[#FFFFFF1A] w-full  placeholder:text-[20px] placeholder:font-[400] placeholder:text-white p-5 rounded-[24px]" placeholder="Your Name" />
            </div>
            <div>
                <Button text={"Submit"} size={"sm"} />
            </div>
        </div>
    </div>
}