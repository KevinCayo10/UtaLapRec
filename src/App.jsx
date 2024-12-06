import "./globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes para Demo (desactivados)
import { ANNOUNCEMENT } from "@/utils/globalConstants";
import AnnouncementBar from "@/modules/ui/AnnouncementBar/AnnouncementBar";
import ReportErrorButton from "@/modules/ui/ReportErrorButton/ReportErrorButton";

// Componentes
import Header from "@/modules/layout/Header";
import ItemListContainer from "@/modules/store/ItemListContainer";

import Footer from "@/modules/layout/Footer";
import Cart from "@/modules/cart/Cart";

// Providers
import { CartProvider } from "@/context/CartContext";

// react-hot-toast
import { Toaster } from "react-hot-toast";
import ItemDetailContainer from "./modules/item/ItemDetailContainer";
import RecommenderContainer from "./modules/store/RecommenderContainer/RecommenderContainer";
import HomeContainer from "./modules/home/HomeContainer";

function App() {
  return (
    <div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 2000,
        }}
      />
      {ANNOUNCEMENT.active && (
        <AnnouncementBar style={ANNOUNCEMENT.style.secondary}>
          <p>{ANNOUNCEMENT.title}</p>
          {ANNOUNCEMENT.showReportErrorButton && <ReportErrorButton />}
        </AnnouncementBar>
      )}
      <div className="container flex flex-col gap-5 m-auto max-w-7xl">
        <BrowserRouter>
          <CartProvider>
            <Header />
            <div className="h-screen">
              <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/store" element={<ItemListContainer />} />
                <Route path="/recommender" element={<RecommenderContainer />} />

                <Route
                  path="/category/:categoryId"
                  element={<ItemListContainer />}
                />
                <Route path="/:productId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="*"
                  element={<h1 className="flex-1">404 - NO ENCONTRADO</h1>}
                />
              </Routes>
            </div>
          </CartProvider>
        </BrowserRouter>
        {/* <Footer /> */}
        {/* TEST ItemListCointainer */}
        {/*       <ItemListContainer>
          <Greeting />
        </ItemListContainer> */}

        {/* TEST ItemDetailContainer - para probar datos de productos */}
        {/* <ItemDetailContainer productId='alienware-m15-r7-240hz-core-i7-12700h-16gb-512gb-rtx-3070ti' /> */}
        {/* <ItemDetailContainer productId='msi-pulse-gl76-17-3-144hz-i7-12th-gen-16gb-512gb-rtx-3070-8gb' /> */}
        {/* <ItemDetailContainer productId='lenovo-ideapad-gaming-3-120hz-ryzen-5-8gb-256gb-rtx-3050ti' /> */}
        {/* <ItemDetailContainer productId='asus-vivobook-pro-14-oled-core-i5-11300h-8gb-256gb' /> */}
        {/* <ItemDetailContainer productId='asus-zenbook-flip-2en1-ryzen-7-5700u-8gb-256gb-geforce-mx450' /> */}
        {/* <ItemDetailContainer productId='lenovo-ideapad-3-14-ryzen-5-8gb-256-gb-ssd' /> */}
      </div>
    </div>
  );
}

export default App;
