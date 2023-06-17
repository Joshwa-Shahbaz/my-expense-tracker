import logo from "./logo.svg";
import "./App.css";
import ExpenseTracker from "./Expense";
import Expense from "./Check";

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker App</h1>
      {/* <ExpenseTracker /> */}
      <Expense />
    </div>
  );
}

export default App;
