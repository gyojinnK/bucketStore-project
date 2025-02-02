import { ReactNode } from "react";
import { cn } from "../../lib/util";

type TGoodsSection = {
  children: ReactNode;
  className: String;
};

const GoodsSection = ({ children, className }: TGoodsSection) => {
  return <div className={cn("px-6 max-lg:px-0", className)}>{children}</div>;
};

export default GoodsSection;
