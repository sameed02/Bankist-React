export default function Summary() {
  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">27 035,20 €</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">1082,61 €</p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">323,46 €</p>
      <button className="btn--sort">&darr; SORT</button>
    </div>
  );
}
