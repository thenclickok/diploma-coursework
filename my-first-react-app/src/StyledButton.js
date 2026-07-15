const StyledButton = () => {
  const isDisabled = true;

  const changeState = () => {};

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "orange",
          backgroundColor: "lightblue",
        }}
      >
        I am learning to style buttons in React
      </h1>
      <button
        disabled={isDisabled}
        className="button"
        style={{
          padding: "10px",
          backgroundColor: "pink",
          color: "darkgreen",
          border: "2px solid black",
          borderRadius: "10px",
        }}
        onClick={changeState}
      >
        My Button
      </button>
    </div>
  );
};

export default StyledButton;
