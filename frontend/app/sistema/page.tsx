import { evaluarSistema } from "@/lib/agroiaEngine";
import BottomNav from "@/components/BottomNav";
import SystemCard from "@/components/SystemCard";
import { sensorData } from "@/data/sensorData";

export default function SistemaPage() {

  const {
    sueloSeco,
    luzBaja,
    aguaCritica,
    temperaturaAlta,
    eventos,
    estadoTitulo,
    estadoMensaje,
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
      <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Estado técnico
        </h2>

        <div className="space-y-2 text-sm text-gray-700">

          <div className="flex justify-between">
            <span>Riego automático</span>
            <span className={sueloSeco ? "text-green-600 font-semibold" : ""}>
              {sueloSeco ? "Activo" : "En espera"}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Iluminación LED</span>
            <span className={luzBaja ? "text-yellow-600 font-semibold" : ""}>
              {luzBaja ? "Encendida" : "Apagada"}
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
            sueloSeco ? "Humedad baja" : "Nivel óptimo"
          }
          icono="💧"
          color="bg-green-100"
        />

        <SystemCard
          titulo="Iluminación"
          valor={luzBaja ? "Baja" : "Normal"}
          descripcion={
            luzBaja
              ? "LEDs activos"
              : "Luz adecuada"
          }
          icono="💡"
          color="bg-yellow-100"
        />

        <SystemCard
          titulo="Temperatura"
          valor={`${sensorData.temperatura}°C`}
          descripcion="Temperatura ambiente"
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

      </div>

      <BottomNav />

    </main>
  );
}