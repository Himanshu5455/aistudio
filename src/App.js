import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js"; 
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.js"; 
import "bootstrap/dist/js/bootstrap";
import $ from "jquery";
import "./components/style.css";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import SignUp from "./components/signup/SignUp";
import MoreSteps from "./components/signup/MoreSteps";
import PaymentDetails from "./components/signup/PaymentDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hosting from "./components/hosting/Hosting";
import Main from "./components/main/Main";

function App() {
  return (
    <>
    <div class="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/moreSteps" element={<MoreSteps />} />
          <Route path="/paymentDetails" element={<PaymentDetails />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
