import GoodsSortButton from "./goods-sort-button";

type TGoodsInfoBar = {
  totalGoods: number;
};

const GoodsInfoBar = ({ totalGoods }: TGoodsInfoBar) => {
  return (
    <div className="flex justify-between items-center pb-4 text-sm">
      <p className="font-semibold">{totalGoods}개</p>
      <GoodsSortButton />
    </div>
  );
};

export default GoodsInfoBar;
