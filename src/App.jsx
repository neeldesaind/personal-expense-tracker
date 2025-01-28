import React, { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";

function App() {
  let [expenses, setExpenses] = useState([]);
  let [filter, setFilter] = useState("all");

  function addExpense(exp) {
    setExpenses([...expenses, exp]);
  }

  let filteredExpenses = expenses.filter((exp) => {
    if (filter === "lastMonth") {
      let now = new Date();
      let oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
      return new Date(exp.date) >= oneMonthAgo && new Date(exp.date) <= now;
    }
    return true;
  });

  return (
    <div className="p-8 max-w-lg mx-auto min-h-screen shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Personal Expense Tracker</h1>
      <AddExpense onAddExpense={addExpense} />
      <Summary expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} setFilter={setFilter} />
    </div>
  );
}

export default App;
