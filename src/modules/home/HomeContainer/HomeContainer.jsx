import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PUBLIC_IMG_PATH } from "@/utils/globalConstants";
import StoreIcon from "@/modules/ui/Icons/StoreIcon";
import { Link } from "react-router-dom";
import Footer from "@/modules/layout/Footer";

function HomeContainer() {
  const [brands, setBrands] = useState([]);
  const [validIcons, setValidIcons] = useState({}); // Estado para almacenar los iconos válidos

  const getBrands = () => {
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/brands`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        setBrands(data.data);
        checkIcons(data.data); // Verificamos si los iconos existen
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBrands();
  }, []);

  const checkIcons = (brands) => {
    const iconStatus = {};

    brands.forEach((brand) => {
      const img = new Image();
      img.onload = () => {
        // Si la imagen carga exitosamente, marcamos el icono como válido
        iconStatus[brand] = true;
        setValidIcons((prev) => ({ ...prev, [brand]: true }));
      };
      img.onerror = () => {
        // Si la imagen no se puede cargar, marcamos el icono como inválido
        iconStatus[brand] = false;
        setValidIcons((prev) => ({ ...prev, [brand]: false }));
      };

      // Intentamos cargar la imagen (cualquier error en la carga la marcará como no válida)
      img.src = `${PUBLIC_IMG_PATH.featureIcons}/${brand}.svg`;
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero px-6 py-10 bg-gradient-to-rrounded-xl">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-between max-w-6xl mx-auto">
          <img
            src={`${PUBLIC_IMG_PATH.images}/ecommerce.png`}
            alt="System Illustration"
            className="lg:max-w-md rounded-xl mb-8 lg:mb-0"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              ¡Bienvenido a nuestro Sistema de Recomendación!
            </h1>
            <p className="text-lg lg:text-xl mb-6">
              Descubre los mejores productos basados en tus preferencias de
              marcas y tiendas online. ¡Haz compras más inteligentes y rápidas!
            </p>
            <Link
              to="/store"
              className="btn btn-primary px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 gap-2 "
            >
              <StoreIcon />
              <span>Ir a la tienda</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-20 px-6 bg-white">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-gray-600">
            Nuestro sistema utiliza tecnología avanzada para sugerir productos
            ideales para ti, basados en tus preferencias y comportamientos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          <div className="text-center">
            <div className="bg-gray-200 p-8 rounded-xl shadow-lg mb-6">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">
                Recomendación Personalizada
              </h3>
              <p className="text-gray-600">
                Basado en tus intereses y hábitos de compra, te ofrecemos las
                mejores sugerencias.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 p-8 rounded-xl shadow-lg mb-6">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">
                Múltiples Marcas
              </h3>
              <p className="text-gray-600">
                Explora productos de marcas reconocidas y confiables, siempre
                con la mejor calidad.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 p-8 rounded-xl shadow-lg mb-6">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">
                Accede a Tiendas Online
              </h3>
              <p className="text-gray-600">
                Recomendamos productos de tiendas online seguras y confiables
                para hacer tus compras más fáciles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands py-10 px-6  rounded-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Marcas
        </h2>
        <div className="flex flex-wrap sm:flex-row items-center justify-center gap-10 max-w-6xl mx-auto  ">
          {brands.length > 0 ? (
            brands.map((brand, index) => {
              if (!validIcons[brand]) {
                return null; // Si no existe el icono, no mostramos nada
              }
              return (
                <div key={index} className="text-center">
                  <img
                    src={`${PUBLIC_IMG_PATH.featureIcons}/${brand}.svg`} // Concatenamos la marca para formar la URL del icono
                    alt={`${brand}-icon`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              );
            })
          ) : (
            <p>Cargando marcas...</p>
          )}
        </div>
      </section>
      <section className="download-app py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-col">
            ¡Descarga nuestra aplicación móvil!
          </h2>
          <a
            href="/mi-aplicacion.apk"
            download
            className="btn btn-primary btn-lg text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#c1c9ce"
                d="m20 22l-4-4l1.4-1.425L19 18.15V14h2v4.15l1.6-1.575L24 18zM4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h8l6 6v4.25h-3V22zm7-13h5l-5-5zM5 19h10q-.1-1.225-.75-2.25t-1.7-1.625l.95-1.7q.05-.1.025-.225t-.15-.175q-.1-.05-.213-.025t-.162.125l-.975 1.75q-.5-.2-1-.312T10 14.45t-1.025.113t-1 .312L7 13.125Q6.95 13 6.838 13t-.238.05l-.1.375l.95 1.7q-1.05.6-1.7 1.625T5 19m2.75-1.5q-.2 0-.35-.15T7.25 17t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15m4.5 0q-.2 0-.35-.15t-.15-.35t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15"
              />
            </svg>
            Descargar APK
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomeContainer;
