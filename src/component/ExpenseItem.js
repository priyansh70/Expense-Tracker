import React from "react";
import Button from "./Button";

const ExpenseItem = ({ expense, onRemoveExpense }) => {
  return (
    <li className="expense-item">
      <span className="description">{expense.description}</span>
      <h3 className="amount">${expense.amount}</h3>
      <Button onclick={() => onRemoveExpense(expense.id)}>Remove</Button>
    </li>
  );
};

export default ExpenseItem;
