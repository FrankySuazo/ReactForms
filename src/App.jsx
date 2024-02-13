import { useState } from "react";
import "./App.css";
import Authenticate from "./Authenticate.jsx";
import SignUpForm from "./SignUpForm.jsx";

const [token, setToken] = useState(null);

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}
