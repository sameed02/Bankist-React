export default function Balance() {
  return (
    <div className="balance">
      <div>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">12/12/2023, 16:23</span>
        </p>
      </div>
      <p className="balance__value">25&nbsp;952,59&nbsp;€</p>
    </div>
  );
}
