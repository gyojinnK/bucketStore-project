import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUrl } from "../../lib/api";
import InfiniteScroll from "react-infinite-scroller";
import { GoodsTypeEnum, TGoods } from "../../lib/type";
import Goods from "./goods";
import Spinner from "../ui/spinner";
import GoodsInfoBar from "./goods-info-bar";

const InfiniteGoods = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["goods"],
    queryFn: ({ pageParam }) => fetchUrl(pageParam, GoodsTypeEnum.newest),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.data.data.meta.pageInfo.page;
      const totalPages = lastPage.data.data.meta.pageInfo.pages;
      return currentPage < totalPages + 1 ? currentPage + 1 : undefined;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div className="error">Error! {error.toString()}</div>;
  }
  // console.log(data?.pages[0].data.data.meta.pageInfo.pages);
  // console.log(data?.pages[0].data.data.body);
  return (
    <>
      <div>
        <GoodsInfoBar
          totalGoods={data?.pages[0].data.data.meta.pageInfo.pages}
        />
        <InfiniteScroll
          loadMore={() => {
            if (!isFetching) {
              fetchNextPage();
            }
          }}
          hasMore={hasNextPage}
        >
          <div className="grid grid-cols-4 gap-[2px]">
            {data?.pages.map((page) => {
              return page.data?.data.body.map((item: TGoods) => (
                <Goods key={item.name} item={item}></Goods>
              ));
            })}
          </div>
        </InfiniteScroll>
        {isFetching && <Spinner />}
      </div>
    </>
  );
};

export default InfiniteGoods;
