import { useState } from "react";
import Button from "./component/Button";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [addExpense, setAddExpense] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("input");

  const totalAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  function addNewExpense(expense) {
    setExpenses((expenses) => [...expenses, expense]);
    setAddExpense(false);
  }

  function removeExpense(id) {
    setExpenses((expenses) => expenses.filter((expense) => expense.id !== id));
  }

  let filteredExpenses = [...expenses];

  if (filter === "Price : Low to High") {
    filteredExpenses.sort((a, b) => a.amount - b.amount);
  } else if (filter === "Price : High to Low") {
    filteredExpenses.sort((a, b) => b.amount - a.amount);
  } else if (filter === "A to Z") {
    filteredExpenses.sort((a, b) => a.description.localeCompare(b.description));
  } else if (filter === "Z to A") {
    filteredExpenses.sort((a, b) => b.description.localeCompare(a.description));
  }

  const searchedExpenses = filteredExpenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <div className="space-between">
        <div>
          Expense <span>${totalAmount}</span>
        </div>
        <Button
          onclick={() => {
            setAddExpense((addExpense) => !addExpense);
            setSearchQuery("");
          }}
        >
          {addExpense ? "CLOSE" : "ADD"}
        </Button>
      </div>
      {addExpense && <ExpenseForm onAddNewExpense={addNewExpense} />}
      <div className="expenses">
        <h2>Expenses</h2>
        {expenses.length > 0 && (
          <div className="filter">
            <input
              className="filter"
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div>
              <label htmlFor="filter">Sort By : </label>
              <select
                name="filter"
                id="filter"
                className="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="input">Input</option>
                <option value="Price : Low to High">Price : Low to High</option>
                <option value="Price : High to Low">Price : High to Low</option>
                <option value="A to Z">Description : A to Z</option>
                <option value="Z to A">Description : Z to A</option>
              </select>
            </div>
          </div>
        )}
        <div className="expense-list">
          <ExpenseList
            expenses={searchQuery ? searchedExpenses : filteredExpenses}
            onRemoveExpense={removeExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
