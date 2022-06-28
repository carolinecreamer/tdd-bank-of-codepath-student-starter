import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import { useState } from "react"

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [transfers, setTransfers] = useState([]);
  const [error, setError] = useState("");
  const [filterInputValue, setFilterInputValue] = useState("");
  const [newTransactionForm, setNewTransactionForm] = useState({"category": "", "description": "", "amount": 0});
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="App">
           <nav>
      <BrowserRouter>
        <Navbar filterInputValue={filterInputValue} setFilterInputValue={setFilterInputValue}/>
        <main>
      <Routes>
        <Route path="/" element={
        <Home transactions={transactions} setTransactions={setTransactions} transfers={transfers}
        setTransfers={setTransfers} error={error} setError={setError} isLoading={isLoading}
        setIsLoading={setIsLoading} filterInputValue={filterInputValue} filteredTransactions={filteredTransactions} 
        setFilteredTransactions={setFilteredTransactions} newTransactionForm={newTransactionForm} 
        setNewTransactionForm={setNewTransactionForm} isCreating={isCreating} setIsCreating={setIsCreating}/>
        }/>

        <Route path="/transactions/:transactionId" element={
          <TransactionDetail/>
        }/>
        
      </Routes>
        </main>
   
      </BrowserRouter>
      </nav>
    </div>
  )
}
