import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1>React Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="love" />
        </main>
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://github.com/yvonnesarah"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Yvonne Adedeji
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/yvonnesarah/react-dictionary-homework"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://ya-react-dictionary-homework.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
