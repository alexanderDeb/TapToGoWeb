import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://imagenes.eltiempo.com/files/image_1200_600/uploads/2021/11/29/61a4fc7217f4d.jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="flex flex-col max-w-md items-center">
          <h1 className="mb-5 text-5xl font-bold">{t("Hero.Title")}</h1>
          <p className="mb-5">
            {t("Hero.Parragraph")}
          </p>
          <a
            href="#Noticias"
            className="flex justify-center items-center bg-BTN rounded-xl h-12 w-32 hover:bg-BTNHover transition-colors duration-300 text-white font-bold"
          >
            {t("Hero.Button")}
          </a>
        </div>
      </div>
    </div>
  );
}
