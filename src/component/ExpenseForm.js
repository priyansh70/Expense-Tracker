import React from "react";
import Button from "./Button";

const ExpenseForm = () => {
  return (
    <div className="expense-form">
      <form>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          id="desc"
          placeholder="Enter the Description"
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          placeholder="Amount"
        />

        <Button>ADD Expense</Button>
      </form>
    </div>
  );
};

export default ExpenseForm;
