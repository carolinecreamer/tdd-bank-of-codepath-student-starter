import * as React from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"
import axios from "axios"

export default function Home({transactions, setTransactions, transfers, setTransfers, error, setError,
  isLoading, setIsLoading, filterInputValue, filteredTransactions, setFilteredTransactions, newTransactionForm,
  setNewTransactionForm, isCreating, setIsCreating}) {
    function handleOnSubmitNewTransaction(event) {

    }
  React.useEffect(()=>{
    let setup = async()=>{
      setIsLoading(true);
      const transactionsResponse = await axios.get(`http://localhost:3001/bank/transactions`).catch((err)=>{
        setError(err)
      })
      const transfersResponse = await axios.get(`http://localhost:3001/bank/transfers`).catch((err)=>{
        setError(err)
      })
    
      //setProductsFiltered(p.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())));
      setTransactions(transactionsResponse.data.transactions);
      setTransfers((previousArray)=>[...previousArray, transfersResponse.data.transfers]);

      if (filterInputValue === "") {
        setFilteredTransactions(transactionsResponse.data.transactions);
      }
      else {
        setFilteredTransactions(transactionsResponse.data.transactions.filter((item)=>item.description.toLowerCase().includes(filterInputValue.toLowerCase())));
      }
      setIsLoading(false);
    }
    setup();

  }, [])
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <AddTransaction isCreating={isCreating} setIsCreating={setIsCreating} form={newTransactionForm} setForm={setNewTransactionForm} handleOnSubmit={handleOnSubmitNewTransaction}/>
      </div>
    )
  }
  else if (error) {
    return (
      <h2 className="error">{error}</h2>
    )
  }
  else {
    return (
      <div className="home">
        <AddTransaction isCreating={isCreating} setIsCreating={setIsCreating} form={newTransactionForm} setForm={setNewTransactionForm} handleOnSubmit={handleOnSubmitNewTransaction}/>
        <BankActivity transactions={filteredTransactions}/>
      </div>
    )
  }
}
