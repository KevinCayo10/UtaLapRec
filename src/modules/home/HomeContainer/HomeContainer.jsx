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
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            ¡Descarga nuestra aplicación móvil!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Escanea el código QR para descargar nuestra aplicación y disfrutar
            de una experiencia de compra más rápida y sencilla.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="border-4 border-blue-500 p-4 rounded-lg shadow-lg">
            <img
              src={`${PUBLIC_IMG_PATH.images}/app_uta_lap_rec.svg`} // Asegúrate de tener el archivo SVG del QR en la ruta correcta
              alt="QR Code para la app"
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomeContainer;
