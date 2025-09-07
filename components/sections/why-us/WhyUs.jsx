import { Title } from "@/components/ui/Title";
import { Card } from "./Card";

// Random data for Why Us cards
const whyUsData = [
    {
        id: 1,
        icon: "/why-us/1.svg",
        title: "Unmatched Durability with Corrosion-Free Technology",
        description:
            "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.",
        bgColor: "#1B7FE1",
    },
    {
        id: 2,
        icon: "/why-us/2.svg",
        title: "Premium Quality Materials & Expert Craftsmanship",
        description:
            "We use only the finest materials sourced from trusted suppliers, combined with decades of expertise in fencing installation. Our skilled technicians ensure every project meets the highest standards of quality and precision.",
        bgColor: "#1B7FE1",
    },
    {
        id: 3,
        icon: "/why-us/3.svg",
        title: "24/7 Customer Support & Maintenance Services",
        description:
            "Our commitment doesn't end with installation. We provide round-the-clock customer support and comprehensive maintenance services to ensure your fencing remains in perfect condition for years to come.",
        bgColor: "#1B7FE1",
    },
];

export const WhyUs = () => {
    return (
        <div>
            <div>
                <div className="flex justify-center">
                    <Title text={"Why Us"} />
                </div>
                <div className="flex justify-center">
                    <div className="max-w-[800px] text-center">
                        <span className="text-[20px] font-[400] text-center">
                            We specialize in delivering durable and innovative fencing
                            solutions built to last. With a focus on quality and trust, we
                            help secure spaces across industries and <br /> communities.
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-10 mt-36">
                    {whyUsData.map((card) => (
                        <div key={card.id} className="col-span-4">
                            <Card
                                id={card.id}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                                bgColor={card.bgColor}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
