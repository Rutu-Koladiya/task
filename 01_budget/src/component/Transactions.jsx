import TransactionItem from "./TransactionItem";

export default function Transactions({ transactions }) {
  return (
    <div className="transaction-container grid grid-cols-1 md:grid-cols-2 gap-4 mx-30">
      <TransactionSection title="INCOME" color='rgb(52,137,52)' transactions={transactions.filter(t => t.title === '+')} />
      <TransactionSection title="EXPENSE" color='rgb(208,81,81)' transactions={transactions.filter(t => t.title === '-')} />
    </div>
  );
}

function TransactionSection({ title, color, transactions }) {
  let formattedDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="expense-container mx-12 my-16 p-4">
        <h3 style={{ color , fontWeight: "bold" }}>{title}</h3>
        <div>
          {transactions.length > 0 ? (
            transactions.map((t, index) => (
              <TransactionItem key={index} description={t.description} date={formattedDate} amount={t.amount} type={title} />
            ))
          ) : (<p className="text-gray-500">No {title.toLowerCase()} yet!</p>)}
        </div>
      </div>
  )
}