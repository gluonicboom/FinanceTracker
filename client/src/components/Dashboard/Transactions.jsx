import { useTransactions } from "../../context/TransactionContext";
import { useNavigate } from "react-router-dom";


export default function Transactions(){
    const {transactions} = useTransactions();
    const navigate = useNavigate();


    if(transactions.length === 0){
        return (
            <div className ="p-6 text-center">
              <h2 className = "text-xl font-semibold">No transaction yet</h2> 
              <p className = "text-gray-400 mt-2">
                Start by adding your first transaction
                </p> 

                <button
                 onClick = {() => navigate("/AddTransactions")}  
                className = "mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                >
                 Add Transaction
                </button>
            </div>

        );

    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Transactions</h1>
      <table className="w-full text-left">
        <thead>
            <tr className="border-b border-gray-600">
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
        </thead>
         <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b border-gray-700">
              <td>{new Date(t.date).toLocaleDateString()}</td>
              <td>{t.description}</td>
              <td>{t.category}</td>
              <td
                className={
                  t.amount > 0 ? "text-green-400" : "text-red-400"
                }
              >
                {t.amount > 0 ? "+" : "-"}₹{Math.abs(t.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

        </div>
    );

}