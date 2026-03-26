import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "../../context/TransactionContext";

export default function AddTransactions() {
  // 1️⃣ get function from context
  const { addTransaction } = useTransactions();

  // 2️⃣ local state for inputs
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();

  const navigate = useNavigate();

  // 3️⃣ handling submit in react way
  function handleSubmit(e) {
    e.preventDefault();

    if (income) {
      addTransaction("income", income,
        description,
         category);
    }

    if (expense) {
      addTransaction("expense", expense,
        description,
        category
      );
    }

    navigate("/Dashboard");
  }

  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col justify-center px-6 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold text-white">
            Add a transaction
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* 4️⃣ React form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-100">
                Income
              </label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-100">
                Expense
              </label>
              <input
                type="number"
                value={expense}
                onChange={(e) => setExpense(e.target.value)}
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-100">
                Description
              </label>
              <input
                type="string"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-100">
                Category
              </label>
              <input
                type="string"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-white"
              />
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 font-semibold text-white hover:bg-indigo-400"
            >
              Add
            </button>

          </form>
        </div>
      </div>
    </>
  );
}
