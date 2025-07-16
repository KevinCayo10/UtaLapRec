export const getProductsPaged = async (
  page,
  limit,
  sort,
  { brand, store, characteristic, priceMin, priceMax, search }
) => {
  try {
    const params = new URLSearchParams();
    params.append("limit", limit);
    params.append("page", page);
    params.append("sort", sort);

    const products = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}api/products?${params.toString()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand,
          characteristic,
          priceMin,
          priceMax,
          search,
          store,
        }),
      }
    );
    if (!products.ok) {
      return { status: false, message: "Error al obtener lo datos" };
    }
    const datos = await products.json();
    return { ...datos };
  } catch (error) {
    return { status: false, message: "Error inesperado", error };
  }
};
