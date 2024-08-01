import { useOrderTypeStore } from "../../store/use-order-type-store";
import { fetchUrl } from "@/lib/api";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteGoods = () => {
  const { orderType } = useOrderTypeStore();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["goods", orderType],
    queryFn: ({ pageParam }) => fetchUrl(pageParam, orderType),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.data.data.meta.pageInfo.page;
      const totalPages = lastPage.data.data.meta.pageInfo.pages;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  };
};

export default useInfiniteGoods;
