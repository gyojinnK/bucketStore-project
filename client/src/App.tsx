import GoodsSection from "./components/layout/goods-section";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import SideMenuSection from "./components/layout/side-menu-section";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import InfiniteGoods from "./components/goods/infinite-goods";
import GoodsInfoBar from "./components/goods/goods-info-bar";

function App() {
  return (
    <div className="w-screen h-fit font-pre relative">
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className="max-w-[1920px] m-auto">
          <h1 className="text-7xl font-bold p-6 text-black">상품</h1>
          <div className="grid grid-cols-4 min-h-[80vh]">
            <SideMenuSection className="col-span-1" />
            <GoodsSection className="col-span-3 text-black">
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
