import "./css/main.css";
import { hentAlleVarer } from "./sanity/service";
import { useState, useEffect } from "react";

function App() {
  const [handleListeVarer, setHandleListeVarer] = useState([]);

  const samleVarer = async () => {
    const alleVarer = await hentAlleVarer();
    setHandleListeVarer(alleVarer);
  };

  useEffect(() => {
    samleVarer();
  }, []);

  console.log(handleListeVarer);

  return (
    <section>
      <h1>Handleliste</h1>
      <ul>
        <li>
          <div className="vare heading">Vare</div>
          <div className="mengde heading">Mengde</div>
        </li>
        {handleListeVarer.map((vare) => (
          <li>
            <div className="vare">{vare.varenavn}</div>
            <div className="mengde">{vare.mengde}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
