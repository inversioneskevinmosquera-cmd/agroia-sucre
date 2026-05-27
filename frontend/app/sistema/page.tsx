"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { actualizarSensores } from "@/data/sensorData";

import { evaluarSistema } from "@/lib/agroiaEngine";
import BottomNav from "@/components/BottomNav";
import SystemCard from "@/components/SystemCard";
import { sensorData } from "@/data/sensorData";

export default function SistemaPage() {
  const router = useRouter();
    useEffect(() => {

    const interval = setInterval(() => {
      router.refresh();
    }, 1000);

    return () => clearInterval(interval);

  }, [router]);
  function simularSequía() {

    actualizarSensores({
      humedad: 10,
      temperatura: 30,
      agua: 40,
    });

    router.refresh();
  }

  function simularCalorExtremo() {

    actualizarSensores({
      humedad: 20,
      temperatura: 42,
      agua: 60,
    });

    router.refresh();
  }

  function simularTanqueCritico() {

    actualizarSensores({
      humedad: 35,
      temperatura: 28,
      agua: 5,
    });

    router.refresh();
  }

  function simularCultivoEstable() {

    actualizarSensores({
      humedad: 65,
      temperatura: 24,
      agua: 85,
    });

    router.refresh();
  }
  const {
    sueloSeco,
    aguaCritica,
    temperaturaAlta,
    riegoActivo,
  } = evaluarSistema();

  return (

    <main className="min-h-screen bg-[#e8f5e9] p-4 pb-24">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <img
          src="/logo.png"
          alt="Logo"
          className="w-14 h-14 rounded-2xl"
        />

        <div>

          <h1 className="text-2xl font-bold text-green-700">
            Estado del sistema
          </h1>

          <p className="text-gray-600 text-sm">
            Monitoreo inteligente en tiempo real
          </p>

        </div>

      </div>
      {/* MODO DEMOSTRACIÓN */}

      <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Modo demostración
        </h2>

        <div className="grid grid-cols-2 gap-3">

          <button
            onClick={simularCultivoEstable}
            className="bg-green-100 text-green-700 font-medium rounded-2xl p-3"
          >
            ✅ Cultivo estable
          </button>

          <button
            onClick={simularSequía}
            className="bg-yellow-100 text-yellow-700 font-medium rounded-2xl p-3"
          >
            🌵 Sequía extrema
          </button>

          <button
            onClick={simularCalorExtremo}
            className="bg-red-100 text-red-700 font-medium rounded-2xl p-3"
          >
            🌡️ Calor extremo
          </button>

          <button
            onClick={simularTanqueCritico}
            className="bg-blue-100 text-blue-700 font-medium rounded-2xl p-3"
          >
            🚨 Tanque crítico
          </button>

        </div>

      </div>
      {/* Estado técnico */}

      <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Estado técnico
        </h2>

        <div className="space-y-2 text-sm text-gray-700">

          <div className="flex justify-between">

            <span>Riego automático</span>

            <span className={riegoActivo
              ? "text-green-600 font-semibold"
              : "text-yellow-600 font-semibold"}
            >
              {riegoActivo ? "Activo" : "Suspendido"}
            </span>

          </div>
          <div className="flex justify-between">

            <span>Temperatura</span>

            <span className={temperaturaAlta ? "text-red-600 font-semibold" : ""}>
              {temperaturaAlta ? "Elevada" : "Normal"}
            </span>

          </div>

          <div className="flex justify-between">

            <span>Tanque de agua</span>

            <span className={aguaCritica ? "text-red-600 font-semibold" : ""}>
              {aguaCritica ? "Crítico" : "Normal"}
            </span>

          </div>

        </div>

      </div>

      {/* Grid */}

      <div className="grid grid-cols-2 gap-4">

        <SystemCard
          titulo="Suelo"
          valor={`${sensorData.humedad}%`}
          descripcion={
            sueloSeco
              ? "Humedad baja detectada"
              : "Nivel adecuado"
          }
          icono="💧"
          color="bg-green-100"
        />

        <SystemCard
          titulo="Temperatura"
          valor={`${sensorData.temperatura}°C`}
          descripcion={
            temperaturaAlta
              ? "Temperatura elevada"
              : "Temperatura estable"
          }
          icono="🌡️"
          color="bg-red-100"
        />

        <SystemCard
          titulo="Agua"
          valor={`${sensorData.agua}%`}
          descripcion={
            aguaCritica
              ? "Nivel crítico"
              : "Nivel suficiente"
          }
          icono="🚰"
          color="bg-blue-100"
        />

        <SystemCard
          titulo="Riego"
          valor={riegoActivo ? "Activo" : "Suspendido"}
          descripcion={
            riegoActivo
              ? "Riego automático funcionando"
              : "Protección por temperatura elevada"
          }
          icono="🌱"
          color="bg-emerald-100"
        />

      </div>

      <BottomNav />

    </main>
  );
}