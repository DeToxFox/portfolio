// Project by:  David Turner
// Date Written: 	August 13, 2022
// File Name: 		David_Turner_Final_Sprint_Portfolio.zip
// GitHub URL: 	https://github.com/DeToxFox/Software-Development-S-22-5-Final-Sprint.git

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Heading from "./components/Heading";
import PythonProjectsPage from "./components/PythonProjectsPage";
import JavaScriptPage from "./components/JavaScriptPage";
import ReactJSPage from "./components/ReactJSPage";
import Bio from "./components/Bio";

function App(props) {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Heading />
        </header>
        <br />
        <Routes>
          <Route path="/" element={<Bio />}></Route>
          <Route
            path="pythonProjectsPage"
            element={<PythonProjectsPage />}
          ></Route>
          <Route path="javaScriptPage" element={<JavaScriptPage />}></Route>
          <Route path="reactJSPage" element={<ReactJSPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
