export default function Main({ currentUser }) {
  const { owner, movements } = currentUser.current;

  return (
    <h1>
      {owner ? (
        <div>
          <p>user:{owner}</p>
          <p>Movements:{movements}</p>
        </div>
      ) : (
        "Not logged in"
      )}
    </h1>
  );
}
