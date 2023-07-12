function Button(classN, onclick, key) {
  return (
    <button
      type="button"
      className={classN}
      onClick={onclick}
    >
      {key}
    </button>
  );
}

export default Button;
