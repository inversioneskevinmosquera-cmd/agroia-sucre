type SensorCardProps = {
  titulo: string;
  valor: string | number;
  color: string;
};

export default function SensorCard({
  titulo,
  valor,
  color,
}: SensorCardProps) {
  return (
    <div className={`${color} rounded-2xl p-4 shadow`}>

      <p className="text-gray-700 text-sm">
        {titulo}
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-2">
        {valor}
      </h2>

    </div>
  );
}