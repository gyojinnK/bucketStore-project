import { GoodsTypeEnum, TGoods } from "../lib/type";
import { generatePriceFormat } from "../lib/util";
import { HeartIcon } from "@heroicons/react/24/solid";
import TypeBadge from "../components/ui/type-badge";
import { useEffect, useState } from "react";
import { useOrderTypeStore } from "../store/use-order-type-store";
import { useLikeStore } from "@/store/use-like-store";
import usePatchLike from "./hooks/use-patch-like";

type TGoodsProps = {
  item: TGoods;
};

const Goods = ({ item }: TGoodsProps) => {
  const { orderType } = useOrderTypeStore();
  const { likeGoods } = useLikeStore();
  const [isLike, setIsLike] = useState<boolean>(false);
  const { patchLike } = usePatchLike(item, isLike);

  const typeText = orderType === GoodsTypeEnum.newest ? "NEW" : null;
  useEffect(() => {
    setIsLike(likeGoods.includes(item.name));
  }, [likeGoods, item.name]);

  return (
    <div className="flex flex-col gap-2 mb-12 relative z-0">
      <HeartIcon
        className={`w-6 h-6 absolute top-2 right-2 ${
          isLike ? "text-red-500" : "text-black/10"
        }`}
        onClick={() => patchLike()}
      />
      <div>
        <img src={`${item.url}`} />
      </div>
      <div className="flex flex-col text-sm gap-1 max-lg:px-3">
        <p className="font-bold">{item.brandName}</p>
        <p className="font-medium">{item.name}</p>
        <div className="flex items-center gap-2">
          <p className="text-black font-bold">
            {generatePriceFormat(item.price.maxDiscountPrice)}
          </p>
          <p className="text-gray-400">
            {generatePriceFormat(item.price.real)}
          </p>
        </div>
      </div>
      {typeText && <TypeBadge typeText={typeText} />}
    </div>
  );
};

export default Goods;
