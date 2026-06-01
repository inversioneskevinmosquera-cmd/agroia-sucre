"use client";

import { useEffect, useState } from "react";

import BottomNav from "@/components/BottomNav";

import { evaluarSistema } from "@/lib/agroiaEngine";

type DatosSensores = {
  humedad: number;
  temperatura: number;
  agua: number;
};

export default function AlertasPage() {

  const [modoDemo, setModoDemo] = useState(false);

  const [datos, setDatos] = useState<DatosSensores>({
    humedad: 55,
    temperatura: 26,
    agua: 80,
  });

  // =========================
  // CARGAR SENSORES REALES
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
      temperatura: 34,
      agua: 50,
    });
  }

  function simularCalor() {

    setModoDemo(true);

    setDatos({
      humedad: 40,
      temperatura: 42,
      agua: 70,
    });
  }

  function simularTanqueCritico() {

    setModoDemo(true);

    setDatos({
      humedad: 45,
      temperatura: 26,
      agua: 5,
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
    eventos,
    ultimaAccion,
  } = evaluarSistema(datos);

  return (

    <main className="min-h-screen bg-[#e8f5e9] p-5 pb-24">

      {/* HEADER */}

      <div className="flex items-center gap-3 mb-8">

        <img
          src="/logo.png"
          alt="Logo"
          className="w-14 h-14 rounded-2xl"
        />

        <div>

          <h1 className="text-2xl font-bold text-green-700">
            Alertas inteligentes
          </h1>

          <p className="text-sm text-gray-600">
            Monitoreo predictivo agrícola
          </p>

        </div>

      </div>

      {/* BOTONES */}

      <div className="bg-white rounded-3xl p-5 shadow-sm mb-5">

        <div className="flex justify-between items-center mb-4">

          <h2 className="font-semibold text-gray-800">
            Simulación
          </h2>

          <button
            onClick={volverModoReal}
            className="bg-black text-white px-4 py-2 rounded-xl text-sm"
          >
            Datos reales
          </button>

        </div>

        <div className="grid grid-cols-3 gap-3">

          <button
            onClick={simularSequía}
            className="bg-yellow-100 text-yellow-700 rounded-2xl p-3 text-sm font-medium"
          >
            🌵 Sequía
          </button>

          <button
            onClick={simularCalor}
            className="bg-red-100 text-red-700 rounded-2xl p-3 text-sm font-medium"
          >
            🌡️ Calor
          </button>

          <button
            onClick={simularTanqueCritico}
            className="bg-blue-100 text-blue-700 rounded-2xl p-3 text-sm font-medium"
          >
            🚨 Agua baja
          </button>

        </div>

      </div>

      {/* ÚLTIMA ACCIÓN */}

      <div className="bg-white rounded-3xl p-5 shadow-sm border border-green-100 mb-5">

        <p className="text-sm text-gray-500 mb-2">
          Última acción automática
        </p>

        <h2 className="text-lg font-semibold text-green-700">
          {ultimaAccion}
        </h2>

      </div>

      {/* EVENTOS */}

      <div className="space-y-4">

        {

          eventos.length > 0 ? (

            eventos.map((evento, index) => (

              <div
                key={index}
                className={`rounded-3xl p-5 shadow-sm border-l-4

                ${evento.tipo === "critico"
                    ? "bg-red-100 border-red-600"

                    : evento.tipo === "advertencia"
                      ? "bg-yellow-100 border-yellow-500"

                      : "bg-blue-100 border-blue-500"
                  }
                `}
              >

                <h2 className="text-lg font-semibold text-gray-800">
                  {evento.mensaje}
                </h2>

                <p className="text-gray-600 text-sm mt-2">

                  {

                    evento.mensaje.includes("humedad")

                      ? "El sistema detectó baja humedad en el suelo."

                      : evento.mensaje.includes("temperatura")

                        ? "La temperatura puede afectar el cultivo."

                        : evento.mensaje.includes("agua")

                          ? "El tanque requiere recarga inmediata."

                          : "AGROIA detectó actividad importante."

                  }

                </p>

              </div>

            ))

          ) : (

            <div className="bg-green-100 rounded-3xl p-5 shadow-sm">

              <h2 className="text-lg font-semibold text-green-800">
                Sistema estable
              </h2>

              <p className="text-green-700 mt-2">
                No se detectan riesgos importantes.
              </p>

            </div>

          )

        }

      </div>

      <BottomNav />

    </main>

  );
}