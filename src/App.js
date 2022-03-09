import './App.css';
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav"
import Routes from "./Routes"

/** App for rendering Jobly
 * 
 * Props: none
 * 
 * State: none
 * 
 * App -> {Nav, Routes}
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
