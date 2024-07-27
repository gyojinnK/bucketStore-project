import { cn } from "../../lib/util";

type TLogo = {
  className?: string;
};

const Logo = ({ className }: TLogo) => {
  return (
    <div>
      <h1 className={cn(`text-4xl font-bold text-white`, className)}>BUCKET</h1>
    </div>
  );
};

export default Logo;
