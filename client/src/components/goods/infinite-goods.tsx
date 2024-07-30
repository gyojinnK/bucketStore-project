import InfiniteScroll from "react-infinite-scroller";
import { TGoods } from "../../lib/type";
import Goods from "./goods";
import Spinner from "../ui/spinner";
import { useEffect } from "react";
import ScrollTopButton from "../ui/scroll-top-button";
import { useGoodsStore } from "@/hook/use-goods-store";
import useInfiniteGoods from "@/hook/useInfiniteGoods";

const InfiniteGoods = () => {
  const { setTotalCount } = useGoodsStore();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteGoods();

  useEffect(() => {
    setTotalCount(data?.pages[0].data.data.meta.pageInfo.pages);
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div className="error">Error! {error?.toString()}</div>;
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
          <div className="grid max-lg:grid-cols-2 grid-cols-4 gap-[2px]">
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
