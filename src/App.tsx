import { useState } from "react";
import { flushSync } from "react-dom";

function App() {
  const [count, setCount] = useState(0);
  const [countFlush, setCountFlush] = useState(0);

  const handleClickNotFlush = () => {
    setCount(count + 1);
    alert(`Counter without is: ${count}`);
  };

  const handleClickFlush = () => {
    flushSync(() => {
      setCountFlush(countFlush + 1);
    });
    // La alerta ahora mostrará el valor actualizado
    alert(`Counter with flush is: ${countFlush + 1}`);
  };

  return (
    <>
      <div>
        <h1>Not Flush</h1>
        <p>Contador: {count}</p>
        <button onClick={handleClickNotFlush}>Incrementar</button>
      </div>
      <hr />
      <div>
        <h1>Flush</h1>
        <p>Contador: {countFlush}</p>
        <button onClick={handleClickFlush}>Incrementar</button>
      </div>
    </>
  );
}

export default App;
