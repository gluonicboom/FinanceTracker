export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-gray-400">Total Income</h2>
          <p className="text-2xl font-bold text-green-400">₹0</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-gray-400">Total Expense</h2>
          <p className="text-2xl font-bold text-red-400">₹0</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-gray-400">Balance</h2>
          <p className="text-2xl font-bold text-indigo-400">₹0</p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <p className="text-gray-500">No transactions yet.</p>
      </div>
    </div>
  );
}
