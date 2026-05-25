import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around py-3">

      <Link
        href="/"
        className="flex flex-col items-center text-green-700"
      >
        <span className="text-2xl">🏠</span>
        <span>Inicio</span>
      </Link>

      <Link
        href="/sistema"
        className="flex flex-col items-center text-gray-500"
      >
        <span className="text-2xl">⚙️</span>
        <span>Sistema</span>
      </Link>

      <Link
        href="/alertas"
        className="flex flex-col items-center text-gray-500"
      >
        <span className="text-2xl">🔔</span>
        <span>Alertas</span>
      </Link>

    </nav>
  );
}