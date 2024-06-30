import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onRemoveExpense }) => {
  if (!expenses.length) {
    return <p style={{ textAlign: "center" }}>💰 No expenses found 💰</p>;
  }
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem
          expense={expense}
          key={expense.id}
          onRemoveExpense={onRemoveExpense}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
