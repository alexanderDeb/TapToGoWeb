import { React, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
  let navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const {t} = useTranslation();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const AuthData = { email: Email, password: Password };
    try {
      const response = await fetch(
        `https://rfidtaptogo.vercel.app/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(AuthData),
        }
      );
      if (response.status === 200) {
        //se esta ejecutando la alerta con un mensaje de acceso
        Toast.fire({
          icon: "success",
          title: "Inicio de sesion exitoso",
        });
        sessionStorage.setItem("email", Email);
        sessionStorage.setItem("password", Password);
        navigate("/dashboard", { replace: true });
      } else {
        //se esta ejecutando la alerta con un mensaje de error
        Toast.fire({
          icon: "error",
          title: "Hubo un error al iniciar sesion",
        });
      }
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  //Se esta utilizando la libreria sweetalert

  //Toast es una constante que almacena una alerta del sweetalert
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xl p-6 bg-blueForm rounded-lg">
        <h2 className="text-center text-2xl text-base-100 font-bold mb-6">
          {t("Login.Title")}
        </h2>

        <form onSubmit={handlerSubmit} className="space-y-10">
          <div className="mb-4">
            <label className="block text-left text-base-100">
              {t("Login.EmailPlaceholder")}
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-base-100">{t("Login.PasswordPlaceholder")}</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 rounded-full bg-BTN text-base-100 font-bold hover:bg-BTNHover transition duration-200"
          >
            {t("Login.Button")}
          </button>
        </form>
      </div>
    </div>
  );
}
