import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full max-w-md flex items-center justify-between mb-4">

      {/* IZQUIERDA */}
      <div className="flex items-center gap-4">

        <Image
          src="/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="rounded-xl object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold text-green-700 leading-none">
            AGROIA SUCRE
          </h1>

        </div>

      </div>

      {/* DERECHA */}
      <div className="bg-green-100 px-4 py-2 rounded-2xl shadow text-center">

        <p className="text-xs text-gray-700">
          Estado
        </p>

        <p className="text-green-700 font-bold text-lg">
          🟢 Online
        </p>

      </div>

    </div>
  );
}