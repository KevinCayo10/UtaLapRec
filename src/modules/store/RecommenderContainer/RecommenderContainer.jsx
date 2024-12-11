import React from "react";
import RecommenderContent from "../RecommenderContent";
import RecommenderUser from "../RecommenderUser";

function RecommenderContainer({ ...props }) {
  return (
    <div className="container mx-auto p-4">
      <div className="collapse collapse-arrow bg-base-100 rounded-box">
        {/* RecommenderUser Collapse */}
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">
          Recomendaciones basado en interacciones
        </div>
        <div className="collapse-content">
          <RecommenderUser />
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 rounded-box mt-4">
        {/* RecommenderContent Collapse */}
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">
          Recomendaciones basado en contenido
        </div>
        <div className="collapse-content">
          <RecommenderContent />
        </div>
      </div>
    </div>
  );
}

export default RecommenderContainer;
