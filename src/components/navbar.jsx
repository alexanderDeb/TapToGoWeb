import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Español from "../assets/Español.png";
import { MdOutlineTranslate } from "react-icons/md";
import Ingles from "../assets/Ingles.png";

export default function Navbar() {
  let navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div className="navbar bg-blueForm py-4 h-20 absolute shadow-md">
      <div className="flex-1 gap-x-4">
        <a
          className="btn btn-ghost text-xl text-base-100 font-semibold"
          href="/"
        >
          TapToGo
        </a>
      </div>
      <div className="flex-none space-x-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            <MdOutlineTranslate size={24} className="fill-current" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a
                onClick={() => {
                  i18n.changeLanguage("es");
                }}
              >
                <img src={Español} alt="Es" className="h-4" />
                Español
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
              >
                <img src={Ingles} alt="In" className="h-4" />
                Ingles
              </a>
            </li>
          </ul>
        </div>
        <button
          className="flex justify-center items-center h-12 w-32 bg-blueSecond rounded-lg text-base-100 transition-colors duration-300 hover:bg-blueSecondHover"
          onClick={() => {
            //Maneja el evento y posteriormente cambia a la pagina de inicio de sesion
            navigate("/login");
          }}
        >
          {t("Nav.Button")}
        </button>
      </div>
    </div>
  );
}
