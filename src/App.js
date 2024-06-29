import Button from "./component/Button";
import ExpenseForm from "./component/ExpenseForm";

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="space-between">
        <div>Balance X</div>
        <Button>ADD</Button>
      </div>
      <ExpenseForm />
      <div className="filter">
        <input
          className="filter"
          type="text"
          placeholder="Search here"
        />
      </div>
    </div>
  );
}

export default App;
