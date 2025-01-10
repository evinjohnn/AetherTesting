import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainContent from "./RoutePage";
import IndustryProvider from "./context/IndustryContext";

function App() {
  return (
    <Router>
      <IndustryProvider>
        <MainContent />
      </IndustryProvider>
    </Router>
  );
}

export default App;
