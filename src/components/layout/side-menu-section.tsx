import { cn } from "../../lib/util";

type TSideMenuSection = {
  className?: string;
};

const SideMenuSection = ({ className }: TSideMenuSection) => {
  return (
    <div className={cn("text-black p-6", className)}>
      <div className="text-2xl">
        <p className="font-medium">전체</p>
      </div>
    </div>
  );
};

export default SideMenuSection;
