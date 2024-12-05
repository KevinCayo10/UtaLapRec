// Data
import { CATEGORIES } from "../../../utils/globalConstants";

// Componentes
import TopBanner from "../TopBanner";
import SiteLogo from "../SiteLogo";
import Greeting from "../Greeting";
import SocialButtons from "@/modules/layout/SocialButtons";
import CartWidget from "@/modules/cart/CartWidget";
import CategoriesMenu from "@/modules/store/CategoriesMenu";
import { useState, useEffect } from "react";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}api/categories`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => console.error(error));
  }, []);

  const styles = `flex-col bg-transparent navbar gap-2
                  sm:flex-row sm:justify-between`;

  return (
    <>
      <TopBanner />
      <div className={styles}>
        <SiteLogo />
        <Greeting />
        <SocialButtons />
        {/* Menu */}
        <div className="justify-between flex-1 px-8 sm:mt-2">
          <CategoriesMenu menuItems={categories} />
          <CartWidget
            className={`fixed z-50 bg-brand text-background rounded-full shadow-lg bottom-4 right-4
                        sm:static sm:rounded-none sm:shadow-none sm:bottom-0 sm:right-0 sm:bg-background sm:text-foreground`}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
