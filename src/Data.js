const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  movementsDates: [
    "2019-11-18",
    "2019-12-23",
    "2020-01-28",
    "2020-04-01",
    "2020-05-08",
    "2020-05-27",
    "2020-07-11",
    "2020-07-12",
  ],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  movementsDates: [
    "2019-11-01",
    "2019-11-30",
    "2019-12-25",
    "2020-01-25",
    "2020-02-05",
    "2020-04-10",
    "2020-06-25",
    "2020-07-26",
  ],
  interestRate: 1.5,
  pin: 2222,
};

const accounts = [account1, account2];

const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
const formatter = new Intl.DateTimeFormat("en-GB", options);

accounts.forEach((account) => {
  account.movementsDates = account.movementsDates.map((dateString) => {
    const date = new Date(dateString);
    return formatter.format(date);
  });
});

export default accounts;
