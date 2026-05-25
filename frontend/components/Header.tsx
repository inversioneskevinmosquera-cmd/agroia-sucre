export default function Header() {
  return (
    <header className="w-full max-w-md flex items-center justify-between">

      <div className="flex items-center gap-3">

        <img
          src="/logo.png"
          alt="Logo AgroIA"
          className="w-16 h-16 object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold text-green-700 leading-tight">
            AGROIA SUCRE
          </h1>

          <p className="text-green-600 text-sm">
            Sistema inteligente de gestión hídrica rural
          </p>
        </div>

      </div>

      <div className="bg-green-100 px-4 py-3 rounded-2xl shadow">
        <p className="text-gray-700 text-sm">
          Estado del sistema
        </p>

        <p className="text-green-700 font-bold text-xl">
          Conectado
        </p>
      </div>

    </header>
  );
}