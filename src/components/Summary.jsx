import React, { useEffect, useState } from "react";

function Summary({ expenses = [] }) {
  let [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(expenses.reduce((acc, exp) => acc + exp.amount, 0));
  }, [expenses]);

  return (
    <div className="mb-6 p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-green-800">Summary</h2>
      <p className="text-gray-800 text-lg">Total Expenses: ₹{total.toFixed(2)}</p>
    </div>
  );
}

export default Summary;
