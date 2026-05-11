import { useContext } from "react";
import { LigaContext } from "../contexts/LigaContext";

function SelectLiga() {
  const { setLiga } = useContext(LigaContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <select onChange={(e) => setLiga(e.target.value)}>
        <option value="">Escolha uma liga</option>
        <option value="English Premier League">Premier League</option>
        <option value="Italian Serie A">Serie A</option>
        <option value="Spanish La Liga">La Liga</option>
      </select>
    </div>
  );
}

export default SelectLiga;