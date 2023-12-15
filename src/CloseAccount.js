import accounts from "./Data";

export default function closeAccount(userName, pin) {
  const foundAccount = accounts.find((account) => {
    return (
      account.owner.toLowerCase().split(" ").join("") ===
        userName.toLowerCase().split(" ").join("") && account.pin === pin
    );
  });
  if (foundAccount) {
    console.log(`closing account of ${userName} & ${pin}`);
  } else {
    console.log("invalid details");
  }
}
