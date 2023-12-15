import accounts from "./Data";

const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
const formatter = new Intl.DateTimeFormat("en-GB", options);

export default function transferMoney(
  userName,
  amount,
  setMovements,
  currentUser,
  setMovementsDates
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

    console.log(foundAccount.movements);
  } else {
    console.log("invalid details");
  }
}
