import React from "react";
import "./Style/Style.scss";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import MessageArea from "./pages/MessageArea";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <h2 className="Logo">AN Chat Application</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/chatbox" element={<MessageArea/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
