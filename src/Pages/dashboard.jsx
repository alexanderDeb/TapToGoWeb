import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Drawer from "../components/drawer";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const [info, setInfo] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Dashboard";
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

  const columns = [
    {
      name: t("Dashboard.Table.Name"),
      selector: (row) => row.name,
    },
    {
      name: t("Dashboard.Table.Email"),
      selector: (row) => row.email,
    },
    {
      name: t("Dashboard.Table.Card"),
      selector: (row) => row.rfid,
    },
    {
      name: t("Dashboard.Table.Balance"),
      selector: (row) => row.saldo,
      sortable: true,
    },
    {
      name: t("Dashboard.Table.Status"),
      selector: (row) => row.status,
      cell: (row) =>
        row.status === true ? (
          <p className="text-success">Activo</p>
        ) : (
          <p className="text-error">Inactivo</p>
        ),
    },
    {
      name: t("Dashboard.Table.Activate"),
      selector: (row) => row.status,
      cell: (row) => (
        <button
          type="submit"
          onClick={async () => {
            try {
              const response = await fetch(
                `https://rfidtaptogo.vercel.app/api/status/${row.email}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ status: true }),
                }
              );
              if (response.status === 200) {
                //se esta ejecutando la alerta con un mensaje de acceso
                Toast.fire({
                  icon: "success",
                  title: "Se activo el usuario",
                });
                GetInfo();
              } else {
                //se esta ejecutando la alerta con un mensaje de error
                Toast.fire({
                  icon: "error",
                  title: "Hubo un error",
                });
              }
            } catch (error) {
              console.error(error);
              return 0;
            }
          }}
        >
          <FaCheckCircle size={20} className="text-success" />
        </button>
      ),
    },
    {
      name: t("Dashboard.Table.Deactivate"),
      selector: (row) => row.status,
      cell: (row) => (
        <button
          type="submit"
          onClick={async () => {
            try {
              const response = await fetch(
                `https://rfidtaptogo.vercel.app/api/status/${row.email}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ status: false }),
                }
              );
              if (response.status === 200) {
                //se esta ejecutando la alerta con un mensaje de acceso
                Toast.fire({
                  icon: "success",
                  title: "Se desactivo el usuario",
                });
                GetInfo();
              } else {
                //se esta ejecutando la alerta con un mensaje de error
                Toast.fire({
                  icon: "error",
                  title: "Hubo un error",
                });
              }
            } catch (error) {
              console.error(error);
              return 0;
            }
          }}
        >
          <IoMdCloseCircle size={24} className="text-error" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <Drawer />
      <div className="flex flex-col items-center justify-center h-screen z-20">
        <div className="w-3/5">
          <h1 className="text-start text-2xl font-bold text-blueForm">
            {t("Dashboard.Title")}
          </h1>
        </div>
        <div className="flex flex-col h-4/5 w-4/6 justify-center items-center p-4 shadow-xl">
          {info ? (
            <DataTable columns={columns} data={info} pagination rows={10} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
