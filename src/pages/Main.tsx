import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="flex h-screen items-center justify-center">
      <nav className="w-1/3 rounded-2xl bg-slate-100 p-8 shadow-2xl">
        <div className="mb-10 text-center text-4xl font-bold text-gray-800">
          Projects
        </div>
        <div className="flex flex-col space-y-6">
          <Link
            to="/resultsSummary"
            className="rounded-lg px-6 py-3 text-xl font-semibold text-blue-700 transition duration-150 ease-in-out hover:bg-blue-100 hover:text-blue-900"
          >
            Results Summary
          </Link>
          <Link
            to="/socialProfile"
            className="rounded-lg px-6 py-3 text-xl font-semibold text-blue-700 transition duration-150 ease-in-out hover:bg-blue-100 hover:text-blue-900"
          >
            Social Profile
          </Link>
          <Link
            to="/qrCode"
            className="rounded-lg px-6 py-3 text-xl font-semibold text-blue-700 transition duration-150 ease-in-out hover:bg-blue-100 hover:text-blue-900"
          >
            QR Code
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Main;
