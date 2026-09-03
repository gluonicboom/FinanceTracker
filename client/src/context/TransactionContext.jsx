import { createContext, useContext, useState } from "react";

const TransactionContext = createContext();
const API_URL = import.meta.env.VITE_API_URL;

export function TransactionProvider({ children }) { 
  const [transactions, setTransactions] = useState([]);


  // Fetch all transactions from PostgreSQL
  async function fetchTransactions(){
    try{
      const res = await fetch(`${API_URL}/api/transactions`);
      if(!res.ok){
        throw new Error("Failed to fetch transactions");
      }
      const data = await res.json();
      console.log("Transactions from database:", data);
      setTransactions(data);
    }
    catch(err){
      console.error(err);
    }
  }

 async function addTransaction(type, amount, description, category, date) {

  try{
    const res = await fetch(`${API_URL}/api/transactions` , 

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: 1,
          amount: Number(amount),
          type,
          description,
          category,

        }),
      }
    );

    if(!res.ok){
      throw new Error("Failed to add transaction");
    }
      const newTransaction = await res.json();
      console.log("Transaction Saved:", newTransaction);

 setTransactions(prev => [ 
      ...prev,
      newTransaction,

    ]);

  }

  catch(err){
console.log(err);
  }
   
  }

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, fetchTransactions, }}>
      {children}
    </TransactionContext.Provider>      
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}
