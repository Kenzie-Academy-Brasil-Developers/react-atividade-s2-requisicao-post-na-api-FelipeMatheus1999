import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Display from "./components/Display";

function App() {
  const [response, setResponse] = useState(false);
  const [mensagem, setMensagem] = useState(false);

  return (
    <div className="App">
      <div className="App-header">
        <Login setResponse={setResponse} setMensagem={setMensagem} />
        {mensagem && <Display response={response} />}
      </div>
    </div>
  );
}

export default App;
