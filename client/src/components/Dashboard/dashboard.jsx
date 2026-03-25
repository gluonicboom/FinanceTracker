import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useTransactions } from "../../context/TransactionContext";
import Sidebar from "./sidebar";
import RecentTransactions from "./recentTransaction";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  // ✅ read-only access to global state
  const { transactions } = useTransactions();

  // ✅ derive values (NOT stored in state)
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar/>
        {/* Main Content */}
        <div className="flex-1 bg-gray-900 text-white p-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-gray-400">Total Income</h2>
              <p className="text-2xl font-bold text-green-400">
                ₹{totalIncome}
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-gray-400">Total Expense</h2>
              <p className="text-2xl font-bold text-red-400">
                ₹{totalExpense}
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-gray-400">Balance</h2>
              <p className="text-2xl font-bold text-indigo-400">
                ₹{balance}
              </p>
            </div>
          </div>
          {/* recent Transactions */}
           <RecentTransactions/>
        </div>
     
      </div>
    </>
  );
}
