import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const LeftDiv = styled.div`
  text-align: left;
`;

function App() {
  return (
    <div className="App">
      <LeftDiv>
        <Button variant="contained">Contained</Button>
      </LeftDiv>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
