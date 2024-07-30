import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOrderTypeStore } from "@/hook/useOrderTypeStore";
import { GoodsTypeEnum } from "@/lib/type";

const GoodsSortButton = () => {
  const { orderType, updateOrderType } = useOrderTypeStore();

  const updateOrderTypeHandler = (currentOrderType: GoodsTypeEnum) => {
    updateOrderType(currentOrderType);
  };

  const typeToTextHandler = (type: GoodsTypeEnum) => {
    switch (type) {
      case GoodsTypeEnum.newest:
        return "최신순";
      case GoodsTypeEnum.low_price:
        return "낮은 가격순";
      case GoodsTypeEnum.high_price:
        return "높은 가격순";
      case GoodsTypeEnum.high_discount_rate:
        return "할인율 높은순";
      case GoodsTypeEnum.best:
        return "판매 인기순";
    }
  };

  return (
    <Select onValueChange={updateOrderTypeHandler}>
      <SelectTrigger className="w-28 py-0 text-sm font-medium">
        <SelectValue placeholder={typeToTextHandler(orderType)} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={GoodsTypeEnum.newest}>최신순</SelectItem>
          <SelectItem value={GoodsTypeEnum.low_price}>낮은 가격순</SelectItem>
          <SelectItem value={GoodsTypeEnum.high_price}>높은 가격순</SelectItem>
          <SelectItem value={GoodsTypeEnum.high_discount_rate}>
            할인율 높은순
          </SelectItem>
          <SelectItem value={GoodsTypeEnum.best}>판매 인기순</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default GoodsSortButton;
