import { GoodsTypeEnum } from "@/lib/type";
import { create } from "zustand";

type State = {
  orderType: GoodsTypeEnum;
};

type Action = {
  updateOrderType: (newType: GoodsTypeEnum) => void;
};

export const useOrderTypeStore = create<State & Action>((set) => ({
  orderType: GoodsTypeEnum.newest,
  updateOrderType: (newType) => set(() => ({ orderType: newType })),
}));
