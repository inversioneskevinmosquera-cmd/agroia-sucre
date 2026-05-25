type StatusCardProps = {
  titulo: string;
  mensaje: string;
};

export default function StatusCard({
  titulo,
  mensaje,
}: StatusCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-5">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl">
          ✓
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-700">
            {titulo}
          </h2>

          <p className="text-gray-600 mt-1 text-sm">
            {mensaje}
          </p>
        </div>

      </div>

    </div>
  );
}