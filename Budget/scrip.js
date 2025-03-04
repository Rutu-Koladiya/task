const selectType = document.querySelector("select");
const descriptionInput = document.querySelector(".description");
const valueInput = document.querySelector(".value");
const addButton = document.querySelector("button");
const incomeContainer = document.querySelector(".income-container .incomes");
const expenseContainer = document.querySelector(".expense-container .expense");
const budgetValue = document.querySelector(".budget-value");
const incomeBalance = document.querySelector(".income-box .balance");
const expenseBalance = document.querySelector(".expense-box .balance");

let totalIncome = 0.0;
let totalExpense = 0.0;

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const updateUi = () => {
  incomeContainer.innerHTML = "";
  expenseContainer.innerHTML = "";
  totalIncome = 0;
  totalExpense = 0;

  transactions.forEach(({ title, description, amount, date }) => {
    const amountClass = title === "+" ? "income-amount" : "expense-amount";

    const html = `<ul class="transaction-item">
          <li>${description}</li>
          <li class="date">${date}</li>
          <li class='${amountClass}'>${title} ${amount}</li>
        </ul>`;

    if (title === "+") {
      totalIncome += amount;
      incomeBalance.innerHTML = `+ ${totalIncome.toFixed(2)}`;
      incomeContainer.insertAdjacentHTML("beforeend", html);
    }

    if (title === "-") {
      totalExpense += amount;
      expenseBalance.innerHTML = `- ${totalExpense.toFixed(2)}`;
      expenseContainer.insertAdjacentHTML("beforeend", html);
    }

    const budget = totalIncome - totalExpense;
    budgetValue.innerHTML = `${budget >= 0 ? "+" : ""} ${budget.toFixed(2)}`;
  });
};

updateUi();

addButton.addEventListener("click", () => {
  const title = selectType.value;
  const description = descriptionInput.value.trim();
  const amount = parseFloat(valueInput.value.trim());

  let date = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // console.log(title, description, amount, date);

  if (!description || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid description and value!");
  }

  const newTransaction = { title, description, amount, date };

  transactions.push(newTransaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  updateUi();

  descriptionInput.value = "";
  valueInput.value = "";
});
