import AddBudget from "./component/AddBudget";
import Transactions from "./component/Transactions";
import Header from "./component/Header";
import { useState } from "react";

function App() {
  const [transactionList, setTransactionList] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  function addTransaction(transaction) {
    const updatedTransactions = [
      ...transactionList,
      { ...transaction, amount: Number(transaction.amount) },
    ];
    setTransactionList(updatedTransactions);

    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  }

  const totalIncome = transactionList
    .filter((t) => t.title === "+")
    .reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactionList
    .filter((t) => t.title === "-")
    .reduce((acc, t) => acc + t.amount, 0);
  return (
    <>
      <Header totalIncome={totalIncome} totalExpense={totalExpense} />
      <AddBudget addTransaction={addTransaction} />
      <Transactions transactions={transactionList} />
    </>
  );
}

export default App;
