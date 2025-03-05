export default function TransactionItem({ description, date, amount, type }) {
  return (
    <>
      <ul className="flex justify-between items-center mt-2 border-t border-[#ddd] py-3">
        <li className="desc flex-1 p-[4px] text-left min-w-[150px]">
          {description}
        </li>
        <li className="flex-1 p-[4px] text-center min-w-[182px] text-sm font-medium">
          {date}
        </li>
        <li className={`flex-1 p-[4px] text-center min-w-[100px] ${type === 'INCOME' ? 'text-[rgb(52,137,52)]' : 'text-[rgb(208,81,81)]'}`}>
          {type === "INCOME" ? `+ ${amount}` : `- ${amount}`}
        </li>
      </ul>
    </>
  );
}
