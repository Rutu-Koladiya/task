export default function SummaryBox({title, amount, color}) {
  return (
    <div className="income-box flex justify-between p-4 w-[25rem] rounded-lg bg-[rgb(52,137,52)] shadow-sm"  style={{backgroundColor: color}}>
      <p className="title font-medium ">{title}</p>
      <p className="balance text-amber-50 ">{title === "INCOME" ? `+ ${amount}` : `- ${amount}`}</p>
    </div>
  );
}
