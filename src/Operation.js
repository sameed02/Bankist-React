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
}) {
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
      <form className={`form form--${formType}`}>
        <input
          type={inputText}
          className={`form__input form__input--${formInputClassType1}`}
        />
        {is2ndFormInput && (
          <input
            type={inputNumber}
            className={`form__input form__input--${formInputClassType2}`}
          />
        )}
        <button className={`form__btn form__btn--${formBtnType}`}>
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
