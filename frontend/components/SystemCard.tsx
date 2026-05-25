type SystemCardProps = {
    icono: string;
    titulo: string;
    valor: string;
    descripcion: string;
  };
  
  export default function SystemCard({
    icono,
    titulo,
    valor,
    descripcion,
  }: SystemCardProps) {
    return (
      <div className="bg-white rounded-3xl p-5 shadow-md flex items-center justify-between">
  
        <div className="flex items-center gap-4">
  
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
            {icono}
          </div>
  
          <div>
            <h2 className="text-xl font-bold text-black">
              {titulo}
            </h2>
  
            <p className="text-green-700 font-semibold">
              {valor}
            </p>
  
            <p className="text-gray-500 text-sm">
              {descripcion}
            </p>
          </div>
  
        </div>
  
        <span className="text-2xl text-gray-400">
          ›
        </span>
  
      </div>
    );
  }