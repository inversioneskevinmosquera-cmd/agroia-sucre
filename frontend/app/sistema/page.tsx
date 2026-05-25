import BottomNav from "@/components/BottomNav";
import SystemCard from "@/components/SystemCard";

export default function SistemaPage() {
  return (
    <main className="min-h-screen bg-[#e8f5e9] p-5 pb-24">

      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
        ESTADO DEL SISTEMA
      </h1>

      <div className="space-y-5">

        <SystemCard
          icono="📶"
          titulo="Sistema conectado"
          valor="Todo funcionando correctamente"
          descripcion="Última revisión: 10:42 a. m."
        />

        <SystemCard
          icono="💧"
          titulo="Nivel de agua"
          valor="65%"
          descripcion="Suficiente"
        />

        <SystemCard
          icono="🌱"
          titulo="Riego automático"
          valor="Activado"
          descripcion="El sistema decide cuándo regar"
        />

        <SystemCard
          icono="💡"
          titulo="Iluminación (LED)"
          valor="Automático"
          descripcion="Se enciende si la luz es baja"
        />

        <SystemCard
          icono="🌡️"
          titulo="Temperatura ambiente"
          valor="24 °C"
          descripcion="Normal"
        />

      </div>

      <BottomNav />

    </main>
  );
}