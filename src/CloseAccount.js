export default function closeAccount(
  userName,
  pin,
  handleLogout,
  accountsDb,
  setAccountsDb
) {
  const foundAccount = accountsDb.find((account) => {
    return (
      account.owner.toLowerCase().split(" ").join("") ===
        userName.toLowerCase().split(" ").join("") && account.pin === pin
    );
  });

  if (foundAccount) {
    const updatedAccounts = accountsDb.filter(
      (account) =>
        account.owner.toLowerCase().split(" ").join("") !==
          foundAccount.owner.toLowerCase().split(" ").join("") &&
        account.pin !== foundAccount.pin
    );

    setAccountsDb(updatedAccounts);
    console.log(updatedAccounts);
    handleLogout(false);
  } else {
    console.log("Invalid details");
  }
}
