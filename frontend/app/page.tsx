import { sensorData } from "@/data/sensorData";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import SensorCard from "@/components/SensorCard";
import StatusCard from "@/components/StatusCard";

export default function Home() {
  const sueloSeco = sensorData.humedad < 40;
  return (
    <main className="min-h-screen bg-[#e8f5e9] flex flex-col items-center px-4 pt-4 pb-28">

      <Header />

      {/* Tarjeta principal */}
      <div className="w-full max-w-md mt-2">
        <StatusCard
          titulo="CULTIVO ESTABLE"
          mensaje="Todo está funcionando correctamente"
        />
      </div>

      {/* Imagen */}
      <div className="w-full max-w-md mt-2">
        <img
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop"
          alt="Cultivo"
          className="w-full h-28 object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Sensores */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4 mt-2">

        <SensorCard
          titulo="Suelo"
          valor={sensorData.humedad}
          color="bg-green-100"
        />

        <SensorCard
          titulo="Luz"
          valor={sensorData.luz}
          color="bg-yellow-100"
        />
        <SensorCard
          titulo="Temperatura"
          valor={sensorData.temperatura}
          color="bg-red-100"
        />

        <SensorCard
          titulo="Agua en tanque"
          valor={sensorData.agua}
          color="bg-blue-100"
        />

      </div>

      {/* Botón */}
      <button
        className={`w-full mt-3 py-3 rounded-2xl text-white font-bold text-lg shadow-lg transition ${sueloSeco
            ? "bg-red-600"
            : "bg-green-600"
          }`}
      >
        {sueloSeco
          ? "🚨 RIEGO ACTIVADO"
          : "💧 REGAR MANUALMENTE"}
      </button>

    </main>
  );
}