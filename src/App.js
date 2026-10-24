import logo from './logo.svg';
import './App.css';



function App() {
  const today = new Date().toLocaleDateString("en-IN");

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#e0f2fe",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1>Kunal</h1>

      <h2>Today's Date: {today}</h2>

      <p>
        Work so hard you don't have time to think about what people say about you
      </p>

      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        width="150"
        height="150"
      />
    </div>
  );
}

export default App;





