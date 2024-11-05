import { React, useState, useEffect } from "react";
import Drawer from "../components/drawer";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

//Estados del formulario
export default function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("ADMIN");
  const [Status, setStatus] = useState(true);
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Register";
  }, []);

  //URL del registro en la API
  const register_URL = "https://rfidtaptogo.vercel.app/api/admin/register";

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

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (Password === ConfirmPassword) {
      try {
        //Datos que se envian al API
        const UserData = {
          name: Name,
          email: Email,
          role: Role,
          status: Status,
          password: Password,
        };
        const response = await fetch(register_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin",
          body: JSON.stringify(UserData),
        });
        //respuesta
        const ResponseJson = await response.json();
        if (response.status === 200) {
          console.log(response.status);
          Toast.fire({
            icon: "success",
            title: "Se registro exitosamente al usuario",
          });
          window.location.reload();
        } else {
          Toast.fire({
            icon: "error",
            title: "No se pudo registrar el usuario",
          });
        }
      } catch (error) {
        console.error(error);
        return 0;
      }
    } else {
      alert("Las contraseñas no coinciden. ");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Drawer />
      {/* w-full ocupara todo el espacio horizontal del contenedor */}
      {/* max-w-xl ancho máximo para el elemento */}

      <div className="bg-blueForm p-8 rounded-lg shadow-lg w-full max-w-xl z-20">
        <p className="text-base-100 text-center font-bold mb-4">
          {t("Register.Title")}
        </p>
        <form onSubmit={handlerSubmit} className="space-y-4">
          <div>
            <label className="block text-left text-base-100">
              {t("Register.NamePlaceholder")}
            </label>
            <input
              type="text"
              value={Name}
              //onChange: Este es un evento que se dispara cada vez que el valor de un elemento de formulario cambia
              // setName es una función de actualización de estado proporcionada por el hook useState
              //e.target.value obtiene el valor actual del campo de entrada
              onChange={(e) => setName(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-left text-base-100">
              {t("Register.EmailPlaceholder")}
            </label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-left text-base-100">Rol</label>
              <select
                value={Role}
                onChange={(e) => setRole(e.target.value)}
                disabled
                className="input input-bordered w-full"
              >
                <option value="" disabled>
                  Selecciona un rol
                </option>
                <option value="USER">Usuario</option>
                <option value="ADMIN">Administrador</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block text-left text-base-100">
                {t("Register.StatusPlaceholder")}
              </label>
              <select
                value={Status}
                onChange={(e) => setStatus(e.target.value)}
                required
                className="input input-bordered w-full"
              >
                <option value="" disabled>
                  {t("Register.Selector")}
                </option>
                <option value="Activo">{t("Register.SelectorOpt1")}</option>
                <option value="Inactivo">{t("Register.SelectorOpt2")}</option>
              </select>
            </div>
          </div>

          {/* // flex space-x-4 para que ambos campos estén alineados horizontalmente. */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-left text-base-100">
                {t("Register.PasswordPlaceholder")}
              </label>
              <input
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
                // w-full en Tailwind CSS se utiliza para establecer el ancho completo de un elemento
                className="input input-bordered w-full"
              />
            </div>

            <div className="w-full">
              <label className="block text-left text-base-100">
                {t("Register.RepPassPlaceholder")}
              </label>
              <input
                type="password"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="btn-circle w-full  bg-BTN hover:bg-BTNHover text-base-100 font-bold"
            >
              {t("Register.Button")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
