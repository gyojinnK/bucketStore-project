import { useGoodsStore } from "@/store/use-goods-store";
import GoodsSortButton from "./goods-sort-button";

const GoodsInfoBar = () => {
  const { totalGoodsCount } = useGoodsStore();

  return (
    <div className="flex justify-between items-center pb-4 text-sm max-lg:px-3">
      <p className="font-semibold">
        {totalGoodsCount ? totalGoodsCount : "... "}개
      </p>
      <GoodsSortButton />
    </div>
  );
};

export default GoodsInfoBar;
