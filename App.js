import React from "react";
import Navigation from './Navigation';
import { PlayerProvider } from '../juego-de-previa/PlayerContext';

export default function App( ) {
  return (
    <PlayerProvider>
         <Navigation />
    </PlayerProvider>
   
  );
}

