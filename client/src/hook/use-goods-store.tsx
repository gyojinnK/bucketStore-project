import { TGoods } from "@/lib/type";
import { create } from "zustand";

type State = {
  goodsData: TGoods[];
  totalGoodsCount: number;
};

type Action = {
  setGoodsData: (data: TGoods[]) => void;
  setTotalCount: (cnt: number) => void;
};

export const useGoodsStore = create<State & Action>((set) => ({
  goodsData: [],
  totalGoodsCount: 0,
  setGoodsData: (data) => set(() => ({ goodsData: data })),
  setTotalCount: (cnt) => set(() => ({ totalGoodsCount: cnt })),
}));
