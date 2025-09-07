import { Button } from "@/components/ui/Button";

export const Card = ({ product }) => {
  return (
    <div className="bg-[#F2F4F6] rounded-[8px] md:rounded-[15px] p-2 md:p-3 overflow-hidden">
      <div className="mb-2 md:mb-0">
        <img
          className="rounded-[6px] md:rounded-[17px] w-full h-auto object-cover"
          src={product?.image || "/products/card.svg"}
          alt={product?.title || "Product"}
        />
      </div>
      <div className="px-1 md:px-2 pb-2 md:pb-0">
        <div className="mb-1">
          <h3 className="text-[#1A1A1A] text-[13px] md:text-[16px] lg:text-[18px] font-[600] leading-tight">
            {product?.title || "JF Barbed Wire- 270 GSM"}
          </h3>
        </div>
        <div className="mb-2 md:mb-0">
          <span className="text-[#1A1A1A] opacity-[0.9] text-[11px] md:text-[14px] lg:text-[16px]">
            {product?.price || "₹4,995.00"}
          </span>
        </div>
        <div className="mt-1 md:mt-4 lg:mt-5">
          <Button size="sm" />
        </div>
      </div>
    </div>
  );
};
