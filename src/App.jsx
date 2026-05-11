import { useContext, useEffect, useState, useMemo } from "react";
import { LigaContext } from "./contexts/LigaContext";

import SelectLiga from "./components/SelectLiga";
import ListaTimes from "./components/ListaTimes";

function App() {
  const { liga } = useContext(LigaContext);

  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscar() {
      if (!liga) {
        setErro("Selecione uma liga primeiro");
        return;
      }

      setErro("");
      setLoading(true);

      try {
        const res = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${liga}`
        );

        const json = await res.json();

        setTimes(json.teams || []);
      } catch (error) {
        setErro("Erro ao buscar dados da API");
      }

      setLoading(false);
    }

    buscar();
  }, [liga]);

  
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

      {erro && (
        <p style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>
          {erro}
        </p>
      )}

      {loading && (
        <p style={{ color: "white", textAlign: "center" }}>
          Carregando...
        </p>
      )}

      <ListaTimes times={timesOrdenados} />
    </div>
  );
}

export default App;