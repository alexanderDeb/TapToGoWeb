import React, { useState, useEffect } from "react";
import Drawer from "../components/drawer";
import StatsCard from "../components/statsCard";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useTranslation } from "react-i18next";

export default function Stadistics() {
  Chart.register(CategoryScale);
  const [info, setInfo] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Stadistics";
  }, []);

  const GetInfo = async () => {
    try {
      const response = await fetch(`https://rfidtaptogo.vercel.app/api/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  useEffect(() => {
    GetInfo();
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <Drawer />
      <div className="flex flex-col justify-center items-center h-full w-3/5 gap-y-20 z-20 py-10">
        <div className="flex flex-col lg:flex-row  w-full justify-center items-center gap-8">
          {info.length !== 0 ? (
            <StatsCard
              title={t("Stads.Title1")}
              value={info.length}
              message={t("Stads.Description1")}
              color="#0284c7"
            />
          ) : (
            <StatsCard
              title="Error"
              value="0"
              message="Error"
              color="#dc2626"
            />
          )}
          {info.length !== 0 ? (
            <StatsCard
              title={t("Stads.Title2")}
              value={
                info.filter((e) => {
                  return e.status === true;
                }).length
              }
              message={t("Stads.Description2")}
              color="#65a30d"
            />
          ) : (
            <StatsCard
              title="Error"
              value="0"
              message="Error"
              color="#dc2626"
            />
          )}
          {info.length !== 0 ? (
            <StatsCard
              title={t("Stads.Title3")}
              value={
                info.filter((e) => {
                  return e.status === false;
                }).length
              }
              message={t("Stads.Description3")}
              color="#dc2626"
            />
          ) : (
            <StatsCard
              title="Error"
              value="0"
              message="Error"
              color="#dc2626"
            />
          )}
        </div>
        <div className="flex flex-col h-full w-full justify-center items-center">
          {info.length !== 0 ? (
            <Line
              data={{
                labels: info.map((data) => data.name),
                datasets: [
                  {
                    label: t("Stads.StadTitle"),
                    data: info.map((data) => data.saldo),
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.2,
                  },
                ],
              }}
            />
          ) : (
            <div className="flex h-3/4 justify-center items-center">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
