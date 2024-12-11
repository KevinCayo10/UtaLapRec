import React from "react";

export default function Paginator({ totalPages, currentPage, onPageChange }) {
  const generatePageNumbers = () => {
    const pages = [];
    const range = 5; // Número de botones de página visibles

    // Calcula los límites del rango de páginas visibles
    const startPage = Math.max(1, currentPage - Math.floor(range / 2));
    const endPage = Math.min(totalPages, startPage + range - 1);

    // Ajusta el inicio si el rango no cubre suficientes páginas al final
    const adjustedStartPage = Math.max(1, endPage - range + 1);

    for (let i = adjustedStartPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = generatePageNumbers();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="join">
      {/* Botón para retroceder */}
      <button
        className={`join-item btn  rounded-r-none ${currentPage === 1 ? "btn-disabled" : ""}`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        «
      </button>

      {/* Botones de números de página */}
      {pages.map((page) => (
        <button
          key={`page-${page}`}
          className={`join-item btn  rounded-none ${
            page === currentPage ? "btn-active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Botón para avanzar */}
      <button
        className={`join-item btn rounded-l-none ${
          currentPage === totalPages ? "btn-disabled" : ""
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
}
