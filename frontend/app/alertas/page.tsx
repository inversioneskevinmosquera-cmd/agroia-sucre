"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { evaluarSistema } from "@/lib/agroiaEngine";
import BottomNav from "@/components/BottomNav";

export default function AlertasPage() {
  const router = useRouter();
  const {
    eventos,
    aguaCritica,
    temperaturaAlta,
    ultimaAccion,
  } = evaluarSistema();
  useEffect(() => {

    const interval = setInterval(() => {
      router.refresh();
    }, 1000);

    return () => clearInterval(interval);

  }, [router]);
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

      {/* ÚLTIMA ACCIÓN AUTOMÁTICA */}

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
                      ? "El sistema mantiene monitoreo constante del suelo."

                      : evento.mensaje.includes("temperatura")
                        ? "Se recomienda proteger el cultivo del calor extremo."

                        : evento.mensaje.includes("agua")
                          ? "El tanque requiere recarga para mantener el riego."

                          : "AGROIA detectó actividad importante en el cultivo."
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