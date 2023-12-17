export default function Summary({ interest, totalCredit, totalDebit }) {
  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">{totalCredit} €</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">{totalDebit} €</p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">{interest} €</p>
      <button className="btn--sort">&darr; SORT</button>
    </div>
  );
}
