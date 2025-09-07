import { Button } from "@/components/ui/Button"

export const Card = () => {
    return <div className=" bg-[#F2F4F6] rounded-[15px] p-2">
        <div>
            <img className="rounded-[17px]" src="/products/card.svg" alt="" />
        </div>
        <div className="py-5 px-2">
            <div>
                <h3 className="text-[#1A1A1A] text-[18px] font-[600]">JF Barbed Wire- 270 GSM</h3>
            </div>
            <div className="pt-1">
                <span className="text-[#1A1A1A] opacity-[0.9]">₹4,995.00</span>
            </div>
            <div className="mt-5">
                <Button size="sm" />
            </div>
        </div>
    </div>
}