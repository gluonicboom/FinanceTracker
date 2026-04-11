import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TransactionProvider } from "./context/TransactionContext";
import Landing from "./components/Landing";
import ReadMore from "./components/ReadMore";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import AddTransactions from "./components/Dashboard/AddTransactions";
import Transactions from "./components/Dashboard/transactions";
import Reports from "./components/Dashboard/reports";

export default function App() {
  return (
    <TransactionProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ReadMore" element={<ReadMore />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path ="/Dashboard" element = {<Dashboard/>} />
        <Route path="/AddTransactions" element = {<AddTransactions/>} />
        <Route path="/Transactions" element ={<Transactions/>} />
        <Route path ="/Reports" element = {<Reports/>}/>
      </Routes>
    </Router>
    </TransactionProvider>
  );
}
