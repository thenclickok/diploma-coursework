function VariableDisplay() {
  let stringVar = "Welcome to React";
  let numberVar = 42;
  let booleanVar = true;
  let arrayVar = ["React", "JSX", "Variables"];
  let objectVar = { name: "John", age: 30, role: "Developer" };

  if (Math.random() > 0.5) {
    stringVar = "Welcome to advanced React";
  }

  return (
    <div>
      <h1>{stringVar}</h1>
      <p>Number: {numberVar}</p>
      <p>Boolean: {booleanVar}</p>
      <p>Array: {arrayVar.join(", ")}</p>
      <p>Object: {JSON.stringify(objectVar)}</p>
    </div>
  );
}

export default VariableDisplay;
