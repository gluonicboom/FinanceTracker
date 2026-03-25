import React from "react";
import { useTransactions } from "../../context/TransactionContext";

export default function RecentTransactions() {
  const { transactions } = useTransactions();

  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">

          <thead className="text-gray-400 border-b border-gray-700">
            <tr>
              <th className="py-2">Date</th>
              <th>Description</th>
              <th>Category</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            {recentTransactions.map((t, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-700/30"
              >
                <td className="py-2">{t.date}</td>
                <td>{t.description}</td>
                <td>{t.category}</td>

                <td
                  className={`text-right font-semibold ${
                    t.type === "income"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"}₹{t.amount}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}