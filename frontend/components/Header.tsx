export default function Header() {

  return (

    <div className="w-full max-w-md flex items-center justify-center gap-4 mb-6">

      <img
        src="/logo.png"
        alt="Logo"
        className="w-20 h-20 rounded-3xl shadow-sm"
      />

      <div>

        <h1 className="text-4xl font-bold text-green-700 leading-tight">
          AGROIA SUCRE
        </h1>

        <p className="text-gray-600 text-sm">
          Sistema inteligente de riego agrícola
        </p>

      </div>

    </div>

  );
}