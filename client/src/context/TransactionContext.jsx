import { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  

  function addTransaction(type, amount, description, category, date) {
    setTransactions(prev => [
      ...prev,
      {
        id: Date.now(), 
        type: type ,
        amount: Number(amount),
        description,
        category,
        date: date || new Date().toISOString(),
      },

    ]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>      
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}
