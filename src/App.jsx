import { useContext, useMemo } from "react";
import { LigaContext } from "./contexts/LigaContext";

import SelectLiga from "./components/SelectLiga";
import ListaTimes from "./components/ListaTimes";

function App() {
  const { times, loading, erro } = useContext(LigaContext);

  const timesOrdenados = useMemo(() => {
    return [...times].sort((a, b) =>
      a.strTeam.localeCompare(b.strTeam)
    );
  }, [times]);

  return (
    <div style={{ padding: "20px", backgroundColor: "green", minHeight: "100vh" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Times de Futebol
      </h1>

      <SelectLiga />

      {erro && <p style={{ color: "red", textAlign: "center" }}>{erro}</p>}

      {loading && <p style={{ color: "white", textAlign: "center" }}>Carregando...</p>}

      <ListaTimes times={timesOrdenados} />
    </div>
  );
}

export default App;
