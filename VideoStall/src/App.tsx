import "./App.css";

function App() {
  return (
    <>
      <Text display="Hello world" />
      <Text display="Hello Russ" />
    </>
  );
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
