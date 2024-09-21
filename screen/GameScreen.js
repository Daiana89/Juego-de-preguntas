import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity ,Image } from 'react-native';
import { UserContext } from '../UserContext';

 export default function Player () {
    const { userData } = UserContext(UserContext);
    return (
        <View style={styles.game}>
            <Text style={styles.Text_game}>Jugador N°:{inputValue} </Text>
            <Text style={styles.Text_game}>ACA IRAN LAS PREGUINTAS</Text>
        </View>
    );
}


import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { PlayerContext } from '../PlayerContext';

export default function PlayerList() {
  const { playerCount } = useContext(PlayerContext);  // Obtenemos el número de jugadores del contexto
  const [currentPlayer, setCurrentPlayer] = useState(1);  // Estado para el jugador actual
  const [currentQuestion, setCurrentQuestion] = useState(null);  // Estado para la pregunta actual
  const [usedQuestions, setUsedQuestions] = useState([]);  // Estado para almacenar preguntas ya usadas

  // Lista de preguntas
  const questions = [
    "¿Cuál es tu comida favorita?",
    "¿Qué superpoder te gustaría tener?",
    "¿Qué harías si fueras invisible por un día?",
    "¿Cuál es tu película favorita?",
    "¿Dónde te gustaría viajar?",
    "¿Cuál es tu canción favorita?",
    "¿Qué te hace más feliz?",
    "¿Cuál es tu color favorito?",
    "Si pudieras cenar con cualquier persona, ¿quién sería?",
    "¿Qué harías si ganaras un millón de euros?"
  ];

  // Función para obtener una pregunta aleatoria sin repetirse
  const getRandomQuestion = () => {
    let availableQuestions = questions.filter(q => !usedQuestions.includes(q));  // Filtramos las preguntas que ya se usaron
    if (availableQuestions.length === 0) {
      setUsedQuestions([]);  // Si ya se usaron todas las preguntas, reiniciamos la lista
      availableQuestions = questions;
    }
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const newQuestion = availableQuestions[randomIndex];
    setUsedQuestions([...usedQuestions, newQuestion]);  // Agregamos la nueva pregunta a las ya usadas
    return newQuestion;
  };

  // Función para avanzar al siguiente jugador y pregunta
  const handleNext = () => {
    if (currentPlayer < playerCount) {
      setCurrentPlayer(currentPlayer + 1);  // Avanzamos al siguiente jugador
    } else {
      setCurrentPlayer(1);  // Si llegamos al último jugador, volvemos al jugador 1
    }
    setCurrentQuestion(getRandomQuestion());  // Cambiamos a una nueva pregunta
  };

  // Al montar el componente, obtenemos una pregunta inicial
  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jugador {currentPlayer}</Text>
      <Text style={styles.question}>{currentQuestion}</Text>

      <Button title="Next" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  question: {
    fontSize: 18,
    marginVertical: 20,
    color: 'white',
    textAlign: 'center',
  },
});
