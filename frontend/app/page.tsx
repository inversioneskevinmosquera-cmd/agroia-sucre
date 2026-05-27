"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { evaluarSistema } from "@/lib/agroiaEngine";
import { sensorData } from "@/data/sensorData";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import SensorCard from "@/components/SensorCard";

export default function Home() {
  const router = useRouter();
  const {
    sueloSeco,
    aguaCritica,
    temperaturaAlta,
    riegoActivo,
    estadoTitulo,
    estadoMensaje,
  } = evaluarSistema();
  useEffect(() => {

    const interval = setInterval(() => {
      router.refresh();
    }, 1000);

    return () => clearInterval(interval);

  }, [router]);
  return (
    <main className="min-h-screen bg-[#e8f5e9] flex flex-col items-center px-4 pt-4 pb-28">

      <Header />

      {/* Estado inteligente */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-5 mt-2">

        <div className="flex items-center gap-3">

          <div
            className={`w-4 h-4 rounded-full ${aguaCritica
              ? "bg-red-500"
              : temperaturaAlta
                ? "bg-yellow-500"
                : sueloSeco
                  ? "bg-orange-400"
                  : "bg-green-500"
              }`}
          />

          <h2 className="text-2xl font-semibold text-gray-800">
            {estadoTitulo}
          </h2>

        </div>

        <p className="text-gray-600 mt-3 text-sm">
          {estadoMensaje}
        </p>

        <p className="text-gray-400 text-xs mt-4">
          Actualizado hace unos segundos
        </p>

      </div>

      {/* Imagen */}
      <div className="w-full max-w-md mt-2">
        <img
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop"
          alt="Cultivo"
          className="w-full h-20 object-cover rounded-3xl shadow-md"
        />
      </div>

      {/* Sensores */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4 mt-2">

        <SensorCard
          titulo="Suelo"
          valor={`${sensorData.humedad}%`}
          color="bg-green-100"
          icono="💧"
        />

        <SensorCard
          titulo="Temperatura"
          valor={`${sensorData.temperatura}°C`}
          color="bg-red-100"
          icono="🌡️"
        />

        <SensorCard
          titulo="Agua en tanque"
          valor={`${sensorData.agua}%`}
          color="bg-blue-100"
          icono="🚰"
        />
        <SensorCard
          titulo="Riego"
          valor={riegoActivo ? "Activo" : "Suspendido"}
          color="bg-emerald-100"
          icono="🌱"
        />
      </div>
      {/* Botón */}

      <BottomNav />
    </main>
  );
}