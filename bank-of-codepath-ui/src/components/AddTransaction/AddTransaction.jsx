import * as React from "react"
import "./AddTransaction.css"

export default function AddTransaction({isCreating, setIsCreating, form, setForm, handleOnSubmit}) {
  function handleOnFormFieldChange(change) {
    if (change.target.name === "description") {
      setForm({"category": form.category, "description": change.target.value, "amount": form.amount})
    }
    else if (change.target.name === "category") {
      setForm({"category": change.target.value, "description": form.description, "amount": form.amount})
    }
    else if (change.target.name === "amount") {
      setForm({"category": form.category, "description": form.description, "amount": change.target.value})
    }
  }

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm handleOnFormFieldChange={handleOnFormFieldChange} form={form} />
    </div>
  )
}

export function AddTransactionForm({handleOnFormFieldChange, form}) {
  console.log(form);
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input name="description" value={form.description} onChange={handleOnFormFieldChange}/>
        </div>
        <div className="field">
          <label>Category</label>
          <input name="category" value={form.category} onChange={handleOnFormFieldChange}/>
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input name="amount" value={form.amount} onChange={handleOnFormFieldChange}/>
        </div>

        <button className="btn add-transaction" type="submit">
          Add
        </button>
      </div>
    </div>
  )
}
