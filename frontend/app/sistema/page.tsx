import BottomNav from "@/components/BottomNav";
import SystemCard from "@/components/SystemCard";
import { sensorData } from "@/data/sensorData";

export default function SistemaPage() {

  const sueloSeco = sensorData.humedad < 40;
  const aguaBaja = sensorData.agua < 20;
  const luzBaja = sensorData.luz < 30;
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

      {/* Eventos activos */}

      <div className="mb-6">

        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Eventos activos
        </h2>

        <div className="space-y-3">

          {sueloSeco && (
            <div className="bg-red-100 rounded-2xl p-4 shadow-sm">
              🌱 Riego automático activado
            </div>
          )}

          {luzBaja && (
            <div className="bg-yellow-100 rounded-2xl p-4 shadow-sm">
              💡 LEDs activados automáticamente
            </div>
          )}

          {aguaBaja && (
            <div className="bg-blue-100 rounded-2xl p-4 shadow-sm">
              🚨 Nivel de agua crítico
            </div>
          )}

          {!sueloSeco && !luzBaja && !aguaBaja && (
            <div className="bg-green-100 rounded-2xl p-4 shadow-sm">
              ✅ No hay eventos críticos
            </div>
          )}

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
            aguaBaja
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