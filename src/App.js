import logo from "./logo.svg";
import "./App.css";
import useToggleState from "./custom_hooks/useToggleState";
import useCyclicState from "./custom_hooks/useCyclicState";
let colors = ["ALFA", "BRAVO", "CHARLIE", "DELTA", "ECHO", "YOU GET THE IDEA"];
let circles = ["🔴", "🔵", "🟡", "🟣", "🟠", "🟤", "⚪", "⚫", "⭕"];

function App() {
  let [toggleState, togglerFunc] = useToggleState();
  let [cyclicState, cyclerFunc] = useCyclicState(circles);
  return (
    <div className="App">
      <header className="App-header">
        <p>Custom Hooks Demonstration</p>
        <div id="toggle-state">
          <h5>Toggle-State Value: {toggleState ? `TRUE` : `FALSE`}</h5>
          <button
            onClick={() => {
              togglerFunc();
            }}
          >
            TOGGLE THE BOOLEAN STATE
          </button>
        </div>
        <div id="cyclic-state">
          <h5>Cycling State Value: {cyclicState}</h5>
          <button
            onClick={() => {
              cyclerFunc();
            }}
          >
            CYCLE THE CYCLIC STATE
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
