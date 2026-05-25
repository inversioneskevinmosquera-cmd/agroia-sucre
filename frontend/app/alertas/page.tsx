import { sensorData } from "@/data/sensorData";
import BottomNav from "@/components/BottomNav";
import AlertCard from "@/components/AlertCard";

export default function AlertasPage() {
  const sueloSeco = sensorData.humedad < 40;
  return (
    <main className="min-h-screen bg-[#e8f5e9] p-5 pb-24">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Alertas del sistema
      </h1>

      <div className="space-y-4">


        {sueloSeco && (
          <div className="bg-red-100 p-4 rounded-2xl shadow">
            <h2 className="font-bold text-red-700">
              ⚠️ Suelo muy seco
            </h2>

            <p className="text-gray-700 mt-2">
              El sistema activó el riego automáticamente.
            </p>
          </div>
        )}
        

        <AlertCard
          titulo="Nivel de agua bajo"
          mensaje="Revisar tanque de agua pronto."
          color="bg-yellow-100"
          icono="💧"
        />

        <AlertCard
          titulo="Luz baja"
          mensaje="Los LEDs se encendieron automáticamente."
          color="bg-blue-100"
          icono="💡"
        />

        <AlertCard
          titulo="Posible sequía"
          mensaje="La humedad del suelo ha disminuido constantemente."
          color="bg-red-100"
          icono="⚠️"
        />

        <AlertCard
          titulo="Ahorro de agua"
          mensaje="El sistema utilizó 28% menos agua esta semana."
          color="bg-green-100"
          icono="💧"
        />

      </div>

      <BottomNav />

    </main>
  );
}