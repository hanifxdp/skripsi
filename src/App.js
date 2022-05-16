import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { Login, MapView } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<MapView />} exact path="/" />
          <Route element={<Login />} exact path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
