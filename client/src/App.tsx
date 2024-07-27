import GoodsSection from "./components/layout/goods-section";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import SideMenuSection from "./components/layout/side-menu-section";
import GoodsInfoBar from "./components/ui/goods-info-bar";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import InfiniteGoods from "./components/goods/infinite-goods";

function App() {
  return (
    <div className="w-screen h-screen font-pre">
      <QueryClientProvider client={queryClient}>
        <Header />
        <h1 className="text-7xl font-bold p-6 text-black">상품</h1>
        <div className="grid grid-cols-4">
          <SideMenuSection className="col-span-1" />
          <GoodsSection className="col-span-3 text-black">
            <GoodsInfoBar />
            <InfiniteGoods />
          </GoodsSection>
        </div>
        <Footer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
