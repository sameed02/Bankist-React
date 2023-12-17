export default function Balance({ totalCredit, totalDebit }) {
  const balance = totalCredit - -totalDebit;
  return (
    <div className="balance">
      <div>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">12/12/2023, 16:23</span>
        </p>
      </div>
      <p className="balance__value">{balance}€</p>
    </div>
  );
}
