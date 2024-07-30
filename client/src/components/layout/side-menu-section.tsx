import { cn } from "../../lib/util";

type TSideMenuSection = {
  className?: string;
};

const SideMenuSection = ({ className }: TSideMenuSection) => {
  return (
    <div
      className={cn(
        "text-black bg-white p-6 max-lg:px-3 max-lg:py-4 relative max-lg:sticky max-lg:top-0 max-lg:left-0 max-lg:z-50",
        className
      )}
    >
      <p className="font-medium sticky top-0 left-0 text-2xl pt-28 max-lg:inline-block max-lg:text-sm max-lg:bg-bl max-lg:px-4 max-lg:py-1 max-lg:border max-lg:rounded-3xl max-lg:bg-black max-lg:text-white">
        전체
      </p>
    </div>
  );
};

export default SideMenuSection;
