import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import InitButton from "./components/InitButton";
import NavBar from "./components/NavBar";
import Form from "./pages/Form";

function App() {
  return (
    <Fragment>
    <NavBar/>
      <Routes>
        <Route path="/" element={ <InitButton />} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
