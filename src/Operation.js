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
}) {
  const handleButtonClick = () => {
    if (operationType === "transfer" || operationType === "close") {
      handleClick(
        inputValue,
        inputValue2,
        setMovements,
        currentUser,
        setMovementsDates
      );
      setInputValue("");
      setInputValue2("");
    } else if (operationType === "loan") {
      handleClick(inputValue, setMovements, currentUser);
      setInputValue("");
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
