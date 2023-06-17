import React, { useState } from "react";

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const addTransaction = () => {
    const newTransaction = {
      id: Math.random(),
      title: title,
      amount: amount,
      date: date,
    };

    setTransactions([...transactions, newTransaction]);
    setTitle("");
    setAmount(0);
    setDate("");
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );

    setTransactions(updatedTransactions);
  };

  const calculateIncome = () => {
    const income = transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    return income;
  };

  const calculateExpense = () => {
    const expense = transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    return Math.abs(expense);
  };

  const calculateTotal = () => {
    const total = transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    return total;
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <div>
        <h2>Add Transaction</h2>

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={addTransaction}>Add</button>
      </div>

      <div>
        <h2>Transactions</h2>

        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.title} - {transaction.amount} - {transaction.date}
              <button onClick={() => deleteTransaction(transaction.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Summary</h2>

        <p>Income: {calculateIncome()}</p>
        <p>Expense: {calculateExpense()}</p>
        <p>Total: {calculateTotal()}</p>
      </div>
    </div>
  );
};

export default ExpenseTracker;
