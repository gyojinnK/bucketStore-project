import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GoodsSortButton = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="최신순" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="newest">최신순</SelectItem>
          <SelectItem value="low_price">낮은 가격순</SelectItem>
          <SelectItem value="high_price">높은 가격순</SelectItem>
          <SelectItem value="high_discount_rate">할인율 높은순</SelectItem>
          <SelectItem value="best">판매 인기순</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default GoodsSortButton;
