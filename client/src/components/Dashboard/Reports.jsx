import { useTransactions } from "../../context/TransactionContext";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Reports() {
  const { transactions } = useTransactions();
  const navigate = useNavigate();
  

  //  EMPTY STATE
  if (transactions.length === 0) {
    return (
      <div className="p-6 text-center bg-blue-950 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold text-white">
          No transactions yet
        </h2>
        <p className="text-gray-400 mt-2">
          Add transactions to see reports
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

  // EXPENSE CATEGORY DATA (Pie 1)
  const expenseData = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      expenseData[t.category] =
        (expenseData[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(expenseData).map((key) => ({
    name: key,
    value: expenseData[key],
  }));

  //  INCOME vs EXPENSE (Pie 2)
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const incomeExpenseData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  //  COLORS
  const COLORS = [
    "#22c55e",
    "#ef4444",
    "#3b82f6",
    "#facc15",
    "#a855f7",
    "#06b6d4",
    "#f97316",
  ];

  return (
    <div className="p-6 bg-blue-950 min-h-screen text-white ">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>

      <div className=" flex justify-center gap-40">

        {/*  EXPENSE BREAKDOWN PIE */}
        <div className="bg-blue-900 p-4 rounded-lg w-[550px]">
          <h2 className="mb-4 text-lg">Expense Breakdown</h2>

          {pieData.length === 0 ? (
            <div className="h-[250px] flex items-center justify-center text-gray-400 border border-gray-700 rounded">
              No expense data
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={90}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />

                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        {/*  INCOME vs EXPENSE PIE */}
        <div className="bg-blue-900 p-4 rounded-lg w-[550px]">
          <h2 className="mb-4 text-lg">Income vs Expense</h2>

          {income === 0 && expense === 0 ? (
            <div className="h-[250px] flex items-center justify-center text-gray-400 border border-gray-700 rounded">
              No data available
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={incomeExpenseData}
                  dataKey="value"
                  outerRadius={90}
                  label
                >
                  <Cell fill="#22c55e" /> {/* Income */}
                  <Cell fill="#ef4444" /> {/* Expense */}
                </Pie>

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />

                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

      </div>
    </div>
  );
}