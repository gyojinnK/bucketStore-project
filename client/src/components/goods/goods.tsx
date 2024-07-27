import { TGoods } from "../../lib/type";
import { generatePriceFormat } from "../../lib/util";

type TGoodsProps = {
  item: TGoods;
};

const Goods = ({ item }: TGoodsProps) => {
  return (
    <div className="flex flex-col gap-2 mb-12">
      <div>
        <img src={`${item.url}`} />
      </div>
      <div className="flex flex-col text-sm gap-1">
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
      <p>{item.badges}</p>
    </div>
  );
};

export default Goods;
