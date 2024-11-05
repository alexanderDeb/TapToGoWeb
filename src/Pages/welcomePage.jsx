import { React, useEffect } from "react";
import Navbar from "../components/navbar";
import celular from "../assets/celular.png";
import InfoCard from "../components/infoCard";
import Footer from "../components/footer";
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.jpg";
import Card3 from "../assets/Card3.jpg";
import Hero from "../components/hero";
import { useTranslation } from "react-i18next";

export default function WelcomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="flex flex-col bg-slate_100">
      <Navbar />
      <Hero />
      <div className="flex flex-col h-screen space-y-40 pt-40" id="Noticias">
        <div className="flex flex-col justify-center items-center space-y-6">
          <h1 className="text-blueForm font-extrabold text-3xl">
            {t("Welcome.Title")}
          </h1>
          <h1 className="text-xl">{t("Welcome.Subtitle")}</h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 px-6 justify-between items-center md:px-32">
          <InfoCard
            image={Card1}
            title={t("Cards.Title1")}
            description={t("Cards.Description1")}
          />
          <InfoCard
            image={Card2}
            title={t("Cards.Title2")}
            description={t("Cards.Description2")}
          />
          <InfoCard
            image={Card3}
            title={t("Cards.Title3")}
            description={t("Cards.Description3")}
          />
        </div>
      </div>
      <div className="flex flex-col h-screen">
        <div className="flex flex-row h-full w-full justify-between items-center px-20">
          <div className="flex w-1/2 h-full justify-center items-center">
            <div className=" flex h-1/2 max-w-xs justify-center items-center">
              <img src={celular} alt="..." className="w-3/4 h-auto" />
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-full justify-center items-start">
            <h1 className="text-2xl font-semibold">
              {t("App.Question")}
            </h1>
            <p>
              {t("App.Description")}
            </p>
            <div className="flex flex-col items-center pt-5 space-y-2">
              <a
                href="https://expo.dev/artifacts/eas/oUudEWKDKrJg7i5MFWFsnZ.apk"
                className="flex justify-center items-center  text-white h-12 w-36 bg-blueForm rounded-lg hover:bg-blueSecond"
              >
                {t("App.Button")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
