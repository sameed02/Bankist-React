import { accounts } from "./Data";

const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
const formatter = new Intl.DateTimeFormat("en-GB", options);

export default function loanMoney(
  loanAmount,
  setMovements,
  setMovementsDates,
  currentUser
) {
  console.log(currentUser);
  const foundAccount = accounts.find((account) => {
    return (
      account.owner.toLowerCase().split(" ").join("") ===
      currentUser.owner.toLowerCase().split(" ").join("")
    );
  });
  if (foundAccount) {
    foundAccount.movements.push(loanAmount);
    foundAccount.movementsDates.push(formatter.format(new Date()));

    console.log(foundAccount.movements);
  } else {
    console.log("invalid details");
  }
}
