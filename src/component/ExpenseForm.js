import React, { useState } from "react";
import Button from "./Button";

const ExpenseForm = ({ onAddNewExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [descriptionValidation, setDescriptionValidation] = useState(null);
  const [amountValidation, setAmountValidation] = useState(null);

  function submitHandler(e) {
    e.preventDefault();

    if (!description && !amount) {
      setDescriptionValidation("Description Field Mandatory");
      setAmountValidation("Amount Field Mandatory");
      return;
    }

    if (!description) {
      setDescriptionValidation("Description Field Mandatory");
      return;
    }

    if (!amount) {
      setAmountValidation("Amount Field Mandatory");
      return;
    }

    const expense = {
      id: Date.now().toString(),
      description: description,
      amount: amount,
    };

    onAddNewExpense(expense);

    setDescription("");
    setAmount("");
  }
  return (
    <div className="expense-form">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="fields">
          <label htmlFor="desc">
            Description <span>*</span>
          </label>
          <input
            type="text"
            id="desc"
            placeholder="Enter the Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setDescriptionValidation(null);
            }}
          />
          <p>{descriptionValidation}</p>
        </div>

        <div className="fields">
          <label htmlFor="amount">
            Amount <span>*</span>
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
              setAmountValidation(null);
            }}
          />
          <p>{amountValidation}</p>
        </div>

        <Button>ADD Expense</Button>
      </form>
    </div>
  );
};

export default ExpenseForm;
