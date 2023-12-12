export default function Movements({ movements, movementsDates }) {
  const reversedMovements = [...movements].reverse();

  return (
    <div className="movements">
      {reversedMovements.map((mov, i) => {
        const reverseIndex = movements.length - i;
        console.log(movements.length);
        return (
          <MovementsRow
            key={i}
            mov={mov}
            index={i}
            transaction={reverseIndex}
            movementsDates={movementsDates}
          />
        );
      })}
    </div>
  );
}

function MovementsRow({ mov, index, transaction, movementsDates }) {
  return (
    <div className="movements__row">
      <div
        className={`movements__type ${
          mov > 0 ? "movements__type--deposit" : "movements__type--withdrawal"
        }`}
      >
        {mov > 0 ? `${transaction} deposit` : `${transaction} withdrawal`}
      </div>
      <div className="movements__date">{movementsDates[index]}</div>
      <div className="movements__value">{mov},00&nbsp;€</div>
    </div>
  );
}
