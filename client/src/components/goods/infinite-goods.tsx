import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUrl, initialUrl } from "../../lib/api";

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
    queryFn: ({ pageParam }) => fetchUrl(pageParam),
    initialPageParam: initialUrl,
    getNextPageParam: (lastPage) => {
      return lastPage.next || undefined;
    },
  });

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (isError) {
    return <div className="error">Error! {error.toString()}</div>;
  }
  console.log(data);
  return (
    <div>
      {data?.pages.map((page) => {
        return page.results.map((item: any) => {
          return <div>{item}</div>;
        });
      })}
    </div>
  );
};

export default InfiniteGoods;
