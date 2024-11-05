import React from "react";

export default function InfoCard({ image, title, description }) {
  return (
    <div className="flex flex-col rounded-lg bg-base-100 w-full h-full lg:w-1/4 shadow-xl transition-transform transform hover:scale-105">
      <figure>
        <img src={image} alt="Shoes" className=" rounded-t-lg"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blueForm">{title}</h2>
        <p className="text-slate_600">{description}</p>
      </div>
    </div>
  );
}
