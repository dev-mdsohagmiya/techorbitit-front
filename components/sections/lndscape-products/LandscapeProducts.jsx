import { Title } from "@/components/ui/Title"
import { Card } from "../agricultural-products/Card"


export const LandscapeProducts = () => {
    return <div>

        <div>
            <Title text="Landscape Products" />
        </div>

        <div className="grid grid-cols-12 relative gap-5 pt-8">
            <div className="col-span-3">
                <Card />
            </div>
            <div className="col-span-3">
                <Card />
            </div>
            <div className="col-span-3">
                <Card />
            </div>
            <div className="col-span-3">
                <Card />
            </div>



            <div className="absolute -left-7 top-1/2 -translate-y-1/2">
                <img src="/products/left.svg" className="cursor-pointer" alt="" />
            </div>
            <div className="absolute -right-7 top-1/2 -translate-y-1/2">
                <img src="/products/right.svg" alt="" className="cursor-pointer" />
            </div>
        </div>
    </div>
}