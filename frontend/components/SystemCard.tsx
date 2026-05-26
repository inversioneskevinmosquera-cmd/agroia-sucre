type SystemCardProps = {
  titulo: string;
  valor: string;
  descripcion: string;
  icono: string;
  color: string;
};

export default function SystemCard({
  titulo,
  valor,
  descripcion,
  icono,
  color,
}: SystemCardProps) {
  return (
    <div
      className={`${color} rounded-3xl p-4 shadow-sm border border-white/40`}
    >
      <div className="flex items-center gap-3">

        <div className="text-2xl">
          {icono}
        </div>

        <div>
          <p className="text-sm text-gray-600">
            {titulo}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            {valor}
          </h2>
        </div>

      </div>

      <p className="text-xs text-gray-500 mt-3">
        {descripcion}
      </p>
    </div>
  );
}