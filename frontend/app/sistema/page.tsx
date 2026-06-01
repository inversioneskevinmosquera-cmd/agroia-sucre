"use client";

import { useEffect, useState } from "react";
import { evaluarSistema } from "@/lib/agroiaEngine";

import BottomNav from "@/components/BottomNav";
import SystemCard from "@/components/SystemCard";

type DatosSensores = {
  humedad: number;
  temperatura: number;
  agua: number;
};

export default function SistemaPage() {

  const [modoDemo, setModoDemo] = useState(false);

  const [datos, setDatos] = useState<DatosSensores>({
    humedad: 55,
    temperatura: 26,
    agua: 80,
  });

  // =========================
  // DATOS REALES RASPBERRY
  // =========================

  async function cargarSensores() {

    if (modoDemo) return;

    try {

      const response = await fetch("/api/sensores");

      const data = await response.json();

      setDatos(data);

    } catch (error) {

      console.log("Error sensores:", error);

    }

  }

  useEffect(() => {

    cargarSensores();

    const interval = setInterval(() => {
      cargarSensores();
    }, 2000);

    return () => clearInterval(interval);

  }, [modoDemo]);

  // =========================
  // SIMULACIONES
  // =========================

  function simularSequía() {

    setModoDemo(true);

    setDatos({
      humedad: 10,
      temperatura: 30,
      agua: 40,
    });
  }

  function simularCalorExtremo() {

    setModoDemo(true);

    setDatos({
      humedad: 20,
      temperatura: 42,
      agua: 60,
    });
  }

  function simularTanqueCritico() {

    setModoDemo(true);

    setDatos({
      humedad: 35,
      temperatura: 28,
      agua: 5,
    });
  }

  function simularCultivoEstable() {

    setModoDemo(true);

    setDatos({
      humedad: 65,
      temperatura: 24,
      agua: 85,
    });
  }

  function volverModoReal() {

    setModoDemo(false);

    cargarSensores();
  }

  // =========================
  // MOTOR IA
  // =========================

  const {
    sueloSeco,
    aguaCritica,
    temperaturaAlta,
    riegoActivo,
  } = evaluarSistema(datos);

  return (

    <main className="min-h-screen bg-[#e8f5e9] p-4 pb-24">

      {/* HEADER */}

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

      {/* MODO */}

      <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-lg font-semibold text-gray-800">
            Simulación inteligente
          </h2>

          <button
            onClick={volverModoReal}
            className="bg-black text-white px-4 py-2 rounded-xl text-sm"
          >
            Datos reales
          </button>

        </div>

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

      {/* ESTADO TÉCNICO */}

      <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Estado técnico
        </h2>

        <div className="space-y-2 text-sm text-gray-700">

          <div className="flex justify-between">

            <span>Modo actual</span>

            <span className="font-semibold">
              {modoDemo ? "Simulación" : "Tiempo real"}
            </span>

          </div>

          <div className="flex justify-between">

            <span>Riego automático</span>

            <span className={
              riegoActivo
                ? "text-green-600 font-semibold"
                : "text-yellow-600 font-semibold"
            }>
              {riegoActivo ? "Activo" : "Suspendido"}
            </span>

          </div>

          <div className="flex justify-between">

            <span>Temperatura</span>

            <span className={
              temperaturaAlta
                ? "text-red-600 font-semibold"
                : "text-green-600 font-semibold"
            }>
              {temperaturaAlta ? "Elevada" : "Normal"}
            </span>

          </div>

          <div className="flex justify-between">

            <span>Tanque de agua</span>

            <span className={
              aguaCritica
                ? "text-red-600 font-semibold"
                : "text-green-600 font-semibold"
            }>
              {aguaCritica ? "Crítico" : "Normal"}
            </span>

          </div>

        </div>

      </div>

      {/* TARJETAS */}

      <div className="grid grid-cols-2 gap-4">

        <SystemCard
          titulo="Suelo"
          valor={`${datos.humedad}%`}
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
          valor={`${datos.temperatura}°C`}
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
          valor={`${datos.agua}%`}
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
              : "Sistema en espera"
          }
          icono="🌱"
          color="bg-emerald-100"
        />

      </div>

      <BottomNav />

    </main>
  );
}