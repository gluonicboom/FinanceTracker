import { Link } from "react-router-dom";
import {
  HomeIcon,
  PlusCircleIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-700 text-white p-6">

      {/* App Name */}
      <h1 className="text-2xl font-bold mb-10">Finance Tracker</h1>

      {/* Navigation */}
      <nav className="space-y-3">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition"
        >
          <HomeIcon className="w-5 h-5" />
          Dashboard
        </Link>

        <Link
          to="/AddTransactions"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition"
        >
          <PlusCircleIcon className="w-5 h-5" />
          Add Transaction
        </Link>

        <Link
          to="/transactions"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition"
        >
          <ChartBarIcon className="w-5 h-5" />
          Transactions
        </Link>

        <Link
          to="/reports"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition"
        >
          <ChartBarIcon className="w-5 h-5" />
          Reports
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition"
        >
          <Cog6ToothIcon className="w-5 h-5" />
          Settings
        </Link>

      </nav>
    </div>
  );
}