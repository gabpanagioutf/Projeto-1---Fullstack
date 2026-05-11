import { createContext, useState, useEffect } from "react";

export const LigaContext = createContext();

export function LigaProvider({ children }) {
  const [liga, setLiga] = useState("");
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarTimes() {
      if (!liga) {
        setTimes([]);
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

    buscarTimes();
  }, [liga]);

  return (
    <LigaContext.Provider
      value={{
        liga,
        setLiga,
        times,
        loading,
        erro
      }}
    >
      {children}
    </LigaContext.Provider>
  );
}
