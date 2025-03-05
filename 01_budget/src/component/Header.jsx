import bgImage from "../asset/bg.png";
import SummaryBox from "./SummaryBox";

export default function Header({ totalIncome, totalExpense }) {
  let totalBudget = totalIncome - totalExpense;
  return (
    <header
      className="border-b-1 flex flex-col gap-6 justify-center items-center text-center py-7"

      style={{
        backgroundImage: `url(${bgImage}
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-white ">
        <h1 className="display-month text-[1.2rem] font-normal">
          Available Budget in February 2025:
        </h1>
        <p className="budget-value text-4xl font-medium ">{totalBudget >= 0 ? `+ ${totalBudget}` : `${totalBudget}`}</p>
      </div>

      <div className="summary flex flex-col justify-center gap-2.5 mb-4 ">
        <SummaryBox title="INCOME" amount={totalIncome} color="rgb(52,137,52)" />
        <SummaryBox title="EXPENSE" amount={totalExpense} color="rgb(201,81,81)" />
      </div>
    </header>
  );
}
