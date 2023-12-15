export default function HeaderMain({ user, onHandleLogout }) {
  const { owner } = user;
  const userName = owner.split(" ").slice(0, 1);
  return (
    <nav>
      <p className="welcome">Good Day, {userName}!</p>
      <img src="logo.png" alt="Logo" className="logo"></img>
      <button className="form__btn btn-logout" onClick={onHandleLogout}>
        Logout →
      </button>
    </nav>
  );
}
