import React, { useState } from "react";
import { FaGripLines, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  IoLogOutOutline,
  IoPersonAddOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineTranslate } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Español from "../assets/Español.png";
import Ingles from "../assets/Ingles.png";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(1);
  let navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <div className="h-screen w-screen absolute transition duration-150">
      {isOpen === 0 ? (
        <div className="flex flex-col w-1/6 h-full bg-blueForm">
          <div className="flex flex-col h-1/3 w-full">
            <div className="flex flex-row h-1/3 w-full justify-between items-start px-8 pt-4">
              <h1 className="text-white font-bold text-xl">TapToGo</h1>
              <button
                className="text-white"
                onClick={() => {
                  setIsOpen(1);
                }}
              >
                <IoIosCloseCircleOutline size={26} />
              </button>
            </div>
            <div className="flex flex-col justify-center h-2/3">
              <div className="flex flex-col justify-center items-center px-8 gap-y-8">
                <h1 className="text-white text-start w-full font-bold">
                  Traducir
                </h1>
                <button
                  onClick={() => {
                    i18n.changeLanguage("es");
                  }}
                  className="flex flex-row w-full justify-start items-center text-white gap-x-2 p-2 hover:bg-blueSecond rounded-md"
                >
                  <img src={Español} alt="" className="h-4" />
                  Español
                </button>
                <button
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                  className="flex flex-row w-full justify-start items-center text-white gap-x-2 p-2 hover:bg-blueSecond rounded-md"
                >
                  <img src={Ingles} alt="" className="h-4" />
                  Ingles
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-1/3 w-full space-y-12 px-8">
            <div className="flex flex-col justify-center items-start">
              <button
                onClick={() => {
                  setIsOpen(0);
                  navigate("/dashboard", { replace: true });
                }}
                className="flex items-center justify-start text-white gap-x-4 text-xl hover:bg-blueSecondHover w-full h-14 px-2 rounded-xl"
              >
                <IoHomeOutline size={24} className="fill-current" />
                {t("Drawer.Option1")}
              </button>
            </div>
            <div className="flex flex-col justify-center items-start">
              <button
                onClick={() => {
                  setIsOpen(0);
                  navigate("/register", { replace: true });
                }}
                className="flex items-center justify-start text-white gap-x-4 text-xl hover:bg-blueSecondHover w-full h-14 px-2 rounded-xl"
              >
                <IoPersonAddOutline size={24} className="fill-current" />
                {t("Drawer.Option2")}
              </button>
            </div>
            <div className="flex flex-col justify-center items-start">
              <button
                onClick={() => {
                  setIsOpen(0);
                  navigate("/stadistics", { replace: true });
                }}
                className="flex items-center justify-start text-white gap-x-4 text-xl hover:bg-blueSecondHover w-full h-14 px-2 rounded-xl"
              >
                <FaChartLine size={24} className="fill-current" />
                {t("Drawer.Option3")}
              </button>
            </div>
          </div>
          <div className="flex flex-col h-1/3 w-full justify-end items-center pb-4 px-4">
            <button
              className="flex items-center justify-start text-white gap-x-4 text-xl hover:bg-blueSecondHover w-full h-14 px-2 rounded-xl"
              onClick={() => {
                sessionStorage.clear();
                window.location.reload();
              }}
            >
              <IoLogOutOutline size={24} className="fill-current" />
              {t("Drawer.Logout")}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col bg-blueForm h-full w-20">
          <div className="flex flex-col h-1/3">
            <div className="flex flex-row h-1/3 w-full justify-center items-start pt-4">
              <button
                onClick={() => {
                  setIsOpen(0);
                }}
                className=" text-white hover:bg-blueSecondHover p-4 rounded-xl"
              >
                <FaGripLines size={24} className="fill-current" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  setIsOpen(0);
                }}
                className="text-white hover:bg-blueSecondHover p-4 rounded-xl"
              >
                <MdOutlineTranslate size={24} className="fill-current" />
              </button>
            </div>
          </div>
          <div className="flex flex-col h-1/3 w-full space-y-12">
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  setIsOpen(0);
                  navigate("/dashboard", { replace: true });
                }}
                className="text-white hover:bg-blueSecondHover p-4 rounded-xl"
              >
                <IoHomeOutline size={24} className="fill-current" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  setIsOpen(0);
                  navigate("/register", { replace: true });
                }}
                className="text-white hover:bg-blueSecondHover p-4 rounded-xl"
              >
                {" "}
                <IoPersonAddOutline size={24} className="fill-current" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  setIsOpen(0);
                  navigate("/stadistics", { replace: true });
                }}
                className="text-white hover:bg-blueSecondHover p-4 rounded-xl"
              >
                {" "}
                <FaChartLine size={24} className="fill-current" />
              </button>
            </div>
          </div>
          <div className="flex flex-col h-1/3 w-full justify-end items-center pb-4">
            <button
              className="text-white hover:bg-blueSecondHover p-4 rounded-xl"
              onClick={() => {
                sessionStorage.clear();
                window.location.reload();
              }}
            >
              <IoLogOutOutline size={26} className="fill-current" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
