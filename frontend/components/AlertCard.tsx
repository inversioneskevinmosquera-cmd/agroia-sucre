type AlertCardProps = {
    titulo: string;
    mensaje: string;
    color: string;
    icono: string;
  };
  
  export default function AlertCard({
    titulo,
    mensaje,
    color,
    icono,
  }: AlertCardProps) {
    return (
      <div className={`${color} rounded-2xl p-4 shadow`}>
  
        <div className="flex items-center gap-3 mb-2">
  
          <span className="text-3xl">
            {icono}
          </span>
  
          <h3 className="text-gray-800 font-bold">
            {titulo}
          </h3>
  
        </div>
  
        <p className="text-gray-700 text-sm">
          {mensaje}
        </p>
  
      </div>
    );
  }