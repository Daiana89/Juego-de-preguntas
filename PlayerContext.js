import React, { createContext, useState } from 'react';

// Creamos el contexto para la cantidad de jugadores
export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playerCount, setPlayerCount] = useState(0);

  return (
    <PlayerContext.Provider value={{ playerCount, setPlayerCount }}>
      {children}
    </PlayerContext.Provider>
  );
};
