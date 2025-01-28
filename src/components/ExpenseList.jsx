import React, { useState } from "react";

function ExpenseList({ expenses = [], setFilter }) {
  const [searchTerm, setSearchTerm] = useState("");

  function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const filteredExpenses = expenses.filter(exp =>
    exp.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-green-800">Expenses</h2>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="filter"
              value="all"
              onChange={(e) => setFilter(e.target.value)}
              defaultChecked
              className="mr-2"
            />
            All
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="filter"
              value="lastMonth"
              onChange={(e) => setFilter(e.target.value)}
              className="mr-2"
            />
            Last Month
          </label>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      {filteredExpenses.length > 0 ? (
        <ul className="space-y-4">
          {filteredExpenses.map((exp) => (
            <li key={exp.id} className="flex justify-between items-center border rounded-lg p-4 shadow">
              <span className="text-green-800 font-medium">{exp.title}</span>
              <span className="text-green-800 font-medium">₹{exp.amount.toFixed(2)}</span>
              <span className="text-green-800 font-medium">{formatDate(exp.date)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-800">No expenses found.</p>
      )}
    </div>
  );
}

export default ExpenseList;
