import { PUBLIC_IMG_PATH } from "@/utils/globalConstants";
import Balancer from "react-wrap-balancer";

// Componentes
import TextWithLineBreaks from "../TextWithLineBreaks/TextWithLineBreaks";

function ProductSpecs({ features }) {
  return (
    <section className="flex flex-col items-center gap-4  w-3/4">
      <h2 className="text-2xl card-title">Especificaciones</h2>
      <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 lg:grid-cols-e xl:grid-cols-5  w-full">
        {Object.entries(features).map(([key, value]) => {
          // Validar si el valor es válido
          if (
            !value ||
            value.text === "" ||
            value.text === "Otra" ||
            value.text == null
          ) {
            return null;
          }

          return (
            <div
              key={key}
              className="relative flex flex-row gap-2 p-5 pt-16 card bg-brand/10   "
            >
              <div className="absolute w-16 rounded-lg top-1 right-1 aspect-square">
                <img
                  src={`${PUBLIC_IMG_PATH.featureIcons}/${key}.png`}
                  alt={`${key}-icon`}
                />
              </div>
              <div>
                <h3 className="pb-2 text-2xl leading-tight sm:text-xl card-title text-primary">
                  <Balancer>{value.title}</Balancer>
                </h3>
                <p className="text-base sm:text-sm">
                  <Balancer>
                    <TextWithLineBreaks>{value.text}</TextWithLineBreaks>
                  </Balancer>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductSpecs;
