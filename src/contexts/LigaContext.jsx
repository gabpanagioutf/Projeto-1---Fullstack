import { createContext, useState } from "react";

export const LigaContext = createContext();

export function LigaProvider({ children }) {
  const [liga, setLiga] = useState("");

  return (
    <LigaContext.Provider value={{ liga, setLiga }}>
      {children}
    </LigaContext.Provider>
  );
}