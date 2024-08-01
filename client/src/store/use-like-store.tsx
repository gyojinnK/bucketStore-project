import { create } from "zustand";
type State = {
  likeGoods: string[];
};

type Action = {
  updateLikeGoods: (newLikeGoods: string[]) => void;
};

export const useLikeStore = create<State & Action>((set) => {
  const storedLikeGoods = localStorage.getItem("likeGoods");
  const initialLikeGoods = storedLikeGoods ? JSON.parse(storedLikeGoods) : [];
  return {
    likeGoods: initialLikeGoods,
    updateLikeGoods: (newLikeGoods) => {
      localStorage.setItem("likeGoods", JSON.stringify(newLikeGoods));
      set({ likeGoods: newLikeGoods });
    },
  };
});
