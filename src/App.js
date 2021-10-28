import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import store from "./store/store";
import Table from "./component/Table";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Form />
      <Table/> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
