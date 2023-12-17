import { accounts } from "./Data";

const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
const formatter = new Intl.DateTimeFormat("en-GB", options);

export default function loanMoney(
  loanAmount,
  setMovements,
  setMovementsDates,
  currentUser,
  setInterest,
  setCurrentUser
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
    const updatedInterest = loanAmount * foundAccount.interestRate;
    foundAccount.interestValue.push(updatedInterest);
    const sum = foundAccount.interestValue.reduce(
      (acc, currVal) => acc + currVal,
      0
    );

    setCurrentUser((user) => ({ ...user, interestValue: [sum] }));
  } else {
    console.log("invalid details");
  }
}
