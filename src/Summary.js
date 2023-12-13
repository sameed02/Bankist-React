export default function Summary() {
  return (
    <div class="summary">
      <p class="summary__label">In</p>
      <p class="summary__value summary__value--in">27 035,20 €</p>
      <p class="summary__label">Out</p>
      <p class="summary__value summary__value--out">1082,61 €</p>
      <p class="summary__label">Interest</p>
      <p class="summary__value summary__value--interest">323,46 €</p>
      <button class="btn--sort">&darr; SORT</button>
    </div>
  );
}
