import React from "react";
import RecommenderContent from "../RecommenderContent";
import RecommenderUser from "../RecommenderUser";
import { useState } from "react";

function RecommenderContainer({ ...props }) {
  const [recommenderContent, setRecommenderContent] = useState(0);
  const [recommenderUser, setRecommenderUser] = useState(0);

  const handlerSetContent = (count) => {
    setRecommenderContent(count);
  };

  const handlerSetUser = (count) => {
    setRecommenderUser(count);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="collapse collapse-arrow bg-base-100 rounded-box">
        {/* RecommenderUser Collapse */}
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium flex items-center">
          <p> Descubre lo que otros usuarios aman</p>
          <span className="badge badge-primary mx-2 text-background">
            {recommenderUser}
          </span>
        </div>
        <div className="collapse-content">
          <RecommenderUser onDataLengthChange={handlerSetUser} />
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 rounded-box mt-4">
        {/* RecommenderContent Collapse */}
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium flex items-center">
          Recomendaciones para tí
          <span className="badge badge-primary mx-2 text-background">
            {recommenderContent}
          </span>
        </div>
        <div className="collapse-content">
          <RecommenderContent onDataLengthChange={handlerSetContent} />
        </div>
      </div>
    </div>
  );
}

export default RecommenderContainer;
