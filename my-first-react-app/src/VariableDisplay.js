function VariableDisplay() {
  let stringVar = "The Variable Display Component";
  let numberVar = 42;
  let booleanVar = true;
  let arrayVar = ["React", "JSX", "Variables"];
  let objectVar = { name: "John", age: 30, role: "Developer" };

  if (Math.random() > 0.5) {
    stringVar = "Here's some practice content:";
  }

  function renderTitleAndMessage() {
    if (numberVar > 10) {
      return (
        <div>
          <h1 style={{ color: "red" }}>{stringVar}</h1>
          <p>
            The title above is red because the number below is greater than 10.
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h1 style={{ color: "green" }}>{stringVar}</h1>
          <p>
            The title above is green because the number below is ten or less.
          </p>
        </div>
      );
    }
  }

  function ArrayItem({ item }) {
    return <li>{item}</li>;
  }

  return (
    <div className="variable-display">
      <div className="variable-display-container">
        {renderTitleAndMessage()}
        <p>Number: {numberVar}</p>
        <p>Boolean: {booleanVar}</p>
        <p>
          The boolean value above is blank because a boolean value cannot be
          displayed as text.
        </p>
        <p>The list below is created from the array values.</p>
        <p>It uses the map method to create list items:</p>
        <ol>
          {arrayVar.map((item, index) => (
            <ArrayItem item={item} key={index} />
          ))}
        </ol>
        <p>Here's an object and it's values: </p>
        <p>
          name:{objectVar.name}, age:{objectVar.age}, role:
          {objectVar.role}
        </p>
      </div>
    </div>
  );
}

export default VariableDisplay;
