import GoodsSection from "./components/layout/goods-section";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import SideMenuSection from "./components/layout/side-menu-section";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import InfiniteGoods from "./goods/infinite-goods";
import GoodsInfoBar from "./goods/goods-info-bar";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <div className="w-screen h-fit font-pre relative">
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className="max-w-[1920px] m-auto">
          <div className="flex gap-2 items-center p-6 max-lg:pt-4 max-lg:pb-0 max-lg:px-3">
            <ArrowLeftIcon className="w-6 h-6 lg:hidden" />
            <h1 className="text-7xl font-bold text-black max-lg:text-xl max-lg:font-medium ">
              상품
            </h1>
          </div>
          <div className="grid grid-cols-4 min-h-[80vh] max-lg:min-h-none max-lg:block">
            <SideMenuSection className="col-span-1 max-lg:col-span-none" />
            <GoodsSection className="col-span-3 text-black max-lg:col-span-none">
              <GoodsInfoBar />
              <InfiniteGoods />
            </GoodsSection>
          </div>
        </div>
        <Footer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
