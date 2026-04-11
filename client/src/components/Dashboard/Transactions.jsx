import { useTransactions } from "../../context/TransactionContext";
import { useNavigate } from "react-router-dom";

export default function Transactions() {
  const { transactions } = useTransactions();
  const navigate = useNavigate();

  //   EMPTY STATE
  if (transactions.length === 0) {
    return (
      <div className="p-6 text-center bg-blue-950 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold text-white">
          No transactions yet
        </h2>
        <p className="text-gray-400 mt-2">
          Start by adding your first transaction
        </p>

        <button
          onClick={() => navigate("/AddTransactions")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Transaction
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-blue-950 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-white">
        Your Transactions
      </h1>

      <div className="bg-blue-900 rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-600 text-gray-300">
              <th className="p-3">Date</th>
              <th className="p-3">Description</th>
              <th className="p-3">Category</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr
                key={t.id}
                className="border-b border-gray-700 hover:bg-blue-800 transition"
              >
                {/* DATE */}
                <td className="p-3 text-white">
                  {new Date(t.date).toLocaleDateString()}
                </td>

                {/* DESCRIPTION */}
                <td className="p-3 text-white">
                  {t.description || "-"}
                </td>

                {/* CATEGORY */}
                <td className="p-3 text-gray-300">
                  {t.category}
                </td>

                {/* AMOUNT */}
                <td
                  className={`p-3 font-semibold ${
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