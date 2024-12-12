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

// Importa la librería uuid para generar un UUID único
import { v4 as uuidv4 } from "uuid";
import Timer from "./modules/ui/Timer";

function App() {
  // Genera el user_id si no existe en localStorage
  const userId = localStorage.getItem("user_id") || uuidv4();

  // Si no existe, guardamos el user_id en localStorage
  if (!localStorage.getItem("user_id")) {
    localStorage.setItem("user_id", userId);
  }

  console.log("User ID:", userId); // Puedes usar este ID en otros componentes

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
            {/* <Timer /> */}
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
      </div>
    </div>
  );
}

export default App;
