import { accounts } from "./Data";

const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
const formatter = new Intl.DateTimeFormat("en-GB", options);

export default function transferMoney(
  userName,
  amount,
  setMovements,
  currentUser,
  setMovementsDates,
  setTotalCredit,
  setTotalDebit
) {
  const foundAccount = accounts.find((account) => {
    return (
      account.owner.toLowerCase().split(" ").join("") ===
      userName.toLowerCase().split(" ").join("")
    );
  });
  if (foundAccount) {
    foundAccount.movements.push(amount);
    foundAccount.movementsDates.push(formatter.format(new Date()));

    currentUser.movements.push(-amount);
    setMovements(currentUser.movements);

    currentUser.movementsDates.push(formatter.format(new Date()));
    setMovementsDates(currentUser.movementsDates);

    const totalCredit = currentUser.movements
      .filter((val) => val > 0)
      .reduce((acc, currCredit) => acc + currCredit, 0);
    setTotalCredit(totalCredit);

    const totalDebit = currentUser.movements
      .filter((val) => val < 0)
      .reduce((acc, currCredit) => acc + currCredit, 0);
    setTotalDebit(totalDebit);

    console.log(foundAccount.movements);
  } else {
    console.log("invalid details");
  }
}
