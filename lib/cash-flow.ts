import { getTransactions } from "./transactions";

export async function getCashFlow() {
  const today = new Date();
  let last12Months = new Array();

  const transactionsData = await getTransactions();

  const subtotals = transactionsData.reduce((acc, transaction) => {
    let date = new Date(transaction.date).getMonth();
    if (acc[date]) {
      acc[date] += transaction.amount;
    } else {
      acc[date] = transaction.amount;
    }
    return acc;
  }, {});

  for (let i = 0; i < 12; i++) {
    let date = new Date().setMonth(today.getMonth() - (11 - i));
    let month = new Date(date).getMonth() + 1;
    let monthText = month.toLocaleString();
    let value = 0;
    if (subtotals[i]) {
      value += subtotals[i];
    }
    let options = { month: "short" };
    const dateTimeFormat = new Intl.DateTimeFormat("en-GB", options);

    last12Months.push({
      month: dateTimeFormat.format(date),
      total: value,
    });
  }

  console.log(last12Months)

  return last12Months;
}
