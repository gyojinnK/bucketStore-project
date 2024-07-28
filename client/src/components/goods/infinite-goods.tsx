import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUrl } from "../../lib/api";
import InfiniteScroll from "react-infinite-scroller";
import { TGoods } from "../../lib/type";
import Goods from "./goods";
import Spinner from "../ui/spinner";
import { useOrderTypeStore } from "@/hook/useOrderTypeStore";
import { useEffect } from "react";
import ScrollTopButton from "../ui/scroll-top-button";
import { useGoodsStore } from "@/hook/use-goods-store";

const InfiniteGoods = () => {
  const { orderType } = useOrderTypeStore();
  const { setTotalCount } = useGoodsStore();

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
      return currentPage < totalPages + 1 ? currentPage + 1 : undefined;
    },
  });

  useEffect(() => {
    setTotalCount(data?.pages[0].data.data.meta.pageInfo.pages);
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div className="error">Error! {error.toString()}</div>;
  }
  // console.log(data?.pages[0].data.data.meta.pageInfo.pages);
  // console.log(data?.pages[0].data.data.body);
  return (
    <div className="relative">
      <ScrollTopButton />
      <div>
        <InfiniteScroll
          loadMore={() => {
            if (!isFetching) {
              fetchNextPage();
            }
          }}
          hasMore={hasNextPage}
        >
          <div className="grid max-[1023px]:grid-cols-2 grid-cols-4 gap-[2px]">
            {data?.pages.map((page) => {
              return page.data?.data.body.map((item: TGoods, idx: number) => (
                <Goods key={`${item.name} ${idx}`} item={item}></Goods>
              ));
            })}
          </div>
        </InfiniteScroll>
        {isFetching && <Spinner />}
      </div>
    </div>
  );
};

export default InfiniteGoods;
