import { useState } from "react";
import sendButton from "../asset/checkButton.svg";

export default function AddBudget({ addTransaction }) {
  const [transactionInfo, setTransactionInfo] = useState({
    title: "+",
    description: "",
    amount: "",
  });

  function handleChange(e) {
    setTransactionInfo({
      ...transactionInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    if (
      !transactionInfo.title ||
      !transactionInfo.description ||
      !transactionInfo.amount
    ) {
      return alert("Please fill out all fields!");
    }
    // sole.log(transactionInfo);
    addTransaction(transactionInfo);
    setTransactionInfo({ title: "+", description: "", amount: "" });
  }

  return (
    <div className="input-container flex justify-center bg-[rgb(242,240,238)] p-4 gap-3.5 shadow-sm ">
      <select
        name="title"
        className="bg-white rounded-lg p-2"
        value={transactionInfo.title}
        onChange={handleChange}
      >
        <option value="+">+</option>
        <option value="-">-</option>
      </select>

      <input
        name="description"
        className="description bg-white rounded-lg p-2 w-[32rem] focus:outline-none"
        type="text"
        placeholder="Add or search description"
        value={transactionInfo.description}
        onChange={handleChange}
      />

      <input
        name="amount"
        className="value bg-white rounded-lg p-2 w-[8rem] focus:outline-none"
        type="number"
        placeholder="Value"
        value={transactionInfo.amount}
        onChange={handleChange}
      />

      <button
        className="rounded-lg p-1 cursor-pointer active:scale-95 transition"
        onClick={handleSubmit}
      >
        <img src={sendButton} alt="Enter Button" width="34" />
      </button>
    </div>
  );
}
