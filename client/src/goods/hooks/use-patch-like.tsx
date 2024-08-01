import { virtualPatchAPI } from "@/lib/api";
import { TGoods } from "@/lib/type";
import { queryClient } from "@/react-query/query-client";
import { useLikeStore } from "@/store/use-like-store";
import { useMutation } from "@tanstack/react-query";

const usePatchLike = (item: TGoods, isLike: boolean) => {
  const { likeGoods, updateLikeGoods } = useLikeStore();

  const { mutate: patchLike } = useMutation({
    mutationKey: ["patch-like"],
    mutationFn: virtualPatchAPI,
    onMutate: async () => {
      const newLikeGoods = isLike
        ? likeGoods.filter((goods) => goods !== item.name)
        : [...likeGoods, item.name];

      updateLikeGoods(newLikeGoods);

      return { previousLikeGoods: likeGoods };
    },
    onError: (error, variables, context) => {
      alert(`문제가 발생하였습니다. Error: ${error}`);
      if (context?.previousLikeGoods) {
        updateLikeGoods(context.previousLikeGoods);
      }
    },
    onSettled: () => {
      return queryClient.invalidateQueries({
        queryKey: ["patch-like"],
      });
    },
  });

  return { patchLike };
};

export default usePatchLike;
