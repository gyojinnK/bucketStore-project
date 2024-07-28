import { cn } from "../../lib/util";

type TSideMenuSection = {
  className?: string;
};

const SideMenuSection = ({ className }: TSideMenuSection) => {
  return (
    <div className={cn("text-black p-6 relative", className)}>
      <p className="font-medium sticky top-0 left-0 text-2xl pt-28">전체</p>
    </div>
  );
};

export default SideMenuSection;
