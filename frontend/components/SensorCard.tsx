type SensorCardProps = {
  titulo: string;
  valor: string | number;
  color: string;
  icono: string;
};

export default function SensorCard({
  titulo,
  valor,
  color,
  icono,
}: SensorCardProps) {
  return (
    <div
      className={`${color} rounded-3xl p-4 shadow-sm border border-white/40`}
    >
      <div className="flex items-center gap-2">

        <span className="text-xl">
          {icono}
        </span>

        <p className="text-gray-700 text-sm font-medium">
          {titulo}
        </p>

      </div>

      <h2 className="text-3xl font-semibold text-gray-900 mt-3">
        {valor}
      </h2>
    </div>
  );
}