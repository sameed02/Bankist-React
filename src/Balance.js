import { useEffect, useState } from "react";
export default function Balance({ totalCredit, totalDebit }) {
  const balance = totalCredit - -totalDebit;
  const [currentDateTime, setCurrentDateTime] = useState("");
  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const formatter = new Intl.DateTimeFormat("en-GB", options);
      setCurrentDateTime(formatter.format(new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="balance">
      <div>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">{currentDateTime}</span>
        </p>
      </div>
      <p className="balance__value">{balance} ₹</p>
    </div>
  );
}
