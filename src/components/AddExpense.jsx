import React, { useRef } from "react";

function AddExpense({ onAddExpense }) {
  let titleRef = useRef();
  let amountRef = useRef();
  let dateRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAddExpense({
      id: Math.random().toString(),
      title: titleRef.current.value,
      amount: parseFloat(amountRef.current.value),
      date: dateRef.current.value,
    });
    titleRef.current.value = "";
    amountRef.current.value = "";
    dateRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-6 shadow-lg rounded-lg">
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Expense name" ref={titleRef} required className="border rounded-lg p-3" />
        <input type="number" placeholder="Amount" ref={amountRef} required className="border rounded-lg p-3" />
        <input type="date" ref={dateRef} required className="border rounded-lg p-3" />
        <button type="submit" className="bg-green-500 text-white rounded-lg p-3 mt-4 hover:bg-green-600">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default AddExpense;
