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
import HomeIcon from "@/modules/ui/Icons/HomeIcon";
import StoreIcon from "@/modules/ui/Icons/StoreIcon";
import ListIcon from "@/modules/ui/Icons/ListIcon";
import { Link } from "react-router-dom";

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

  return (
    <>
      <TopBanner />
      <div
        className="flex-col bg-transparent  gap-2
                  sm:flex-row sm:justify-between navbar bg-base-100 "
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">
                  <HomeIcon />
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/store">
                  <StoreIcon />
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/recommender">
                  <ListIcon />
                  Recomendaciones
                </Link>
              </li>
            </ul>
          </div>
          <SiteLogo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <HomeIcon />
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/store">
                <StoreIcon />
                Tienda
              </Link>
            </li>
            <li>
              <Link to="/recommender">
                <ListIcon />
                Recomendaciones
              </Link>
            </li>
          </ul>
        </div>

        {/* <SocialButtons /> */}
        {/* Menu */}
        <div className=" flex-1 px-8 sm:mt-2 navbar-end">
          {/* <CategoriesMenu menuItems={categories} /> */}
          <CartWidget
            className={`fixed z-50  text-background rounded-full shadow-lg bottom-4 right-4
                        sm:static sm:rounded-none sm:shadow-none sm:bottom-0 sm:right-0 sm:bg-background  `}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
