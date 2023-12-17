export default function Operation({
  operationType,
  headingOperationText,
  formType,
  is2ndFormInput,
  formInputClassType1,
  formInputClassType2,
  inputText,
  inputNumber,
  formBtnType,
  label1,
  label2,
  inputValue,
  inputValue2,
  setInputValue,
  setInputValue2,
  handleChange,
  handleChange2,
  handleClick,
  setMovements,
  currentUser,
  setMovementsDates,
  accountsDb,
  setAccountsDb,
  closeAccountUser,
  closeAccountPin,
  handleLogout,
  setInterest,
  setCurrentUser,
  setTotalCredit,
  setTotalDebit,
}) {
  const handleButtonClick = () => {
    if (operationType === "transfer") {
      handleClick(
        inputValue,
        inputValue2,
        setMovements,
        currentUser,
        setMovementsDates,
        setTotalCredit,
        setTotalDebit
      );
      setInputValue("");
      setInputValue2("");
    } else if (operationType === "loan") {
      handleClick(
        inputValue,
        setMovements,
        setMovementsDates,
        currentUser,
        setInterest,
        setCurrentUser
      );
      setInputValue("");
    } else if (operationType === "close") {
      handleClick(
        closeAccountUser,
        closeAccountPin,
        handleLogout,
        accountsDb,
        setAccountsDb
      );
      setInputValue("");
      setInputValue2("");
    }
  };
  return (
    <div className={`operation operation--${operationType}`}>
      <h2
        style={{
          marginBottom: "1.5rem",
          fontSize: "1.7rem",
          fontWeight: "600",
          color: "#333",
          textAlign: "left",
        }}
      >
        {headingOperationText}
      </h2>
      <form
        className={`form form--${formType}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type={inputText}
          className={`form__input form__input--${formInputClassType1}`}
          value={inputValue}
          onChange={handleChange}
        />
        {is2ndFormInput && (
          <input
            type={inputNumber}
            className={`form__input form__input--${formInputClassType2}`}
            value={inputValue2}
            onChange={handleChange2}
          />
        )}
        <button
          onSubmit={(e) => e.preventDefault}
          className={`form__btn form__btn--${formBtnType}`}
          onClick={handleButtonClick}
        >
          &rarr;
        </button>
        <label
          className={`form__label ${
            formType === "loan" ? "form__label--loan" : ""
          }`}
        >
          {label1}
        </label>
        {is2ndFormInput && <label className="form__label">{label2}</label>}
      </form>
    </div>
  );
}
