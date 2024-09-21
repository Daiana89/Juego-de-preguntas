import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity ,Image } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';
import { Modal } from 'react-native';

import { UserContext } from '../UserContext';

export default function Home({ Navigation }) {
  // MODAL
  const [modalVisible, setModalVisible] = useState(false);
  // INPUT VALUE
  const [inputValue, setInputValue] = useState('');
  
  // CONTEXTO
  const { setPlayerCount } = useContext(PlayerContext); // Obtenemos el método para actualizar el número de jugadores
  const navigation = useNavigation(); // Hook para la navegación

  // Manejador del input y la navegación
  const handleSubmit = () => {
    const count = parseInt(inputValue);
    if (!isNaN(count) && count > 0) {
      setPlayerCount(count);  // Actualizamos el número de jugadores en el contexto
      setModalVisible(false); // Cerramos el modal
      navigation.navigate('Game');  // Navegamos a la pantalla de la lista de jugadores
    } else {
      Alert.alert('Error', 'Por favor, ingresa un número válido de jugadores.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>SIN PALABRAS</Text>
      <StatusBar style="auto" />

      <TouchableOpacity
        style={styles.TouchableHighlight}
        title="Show"
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textBotton}>COMENZAR A JUGAR</Text>
      </TouchableOpacity>

      {/* MODAL */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('El modal ha sido cerrado.');
          setModalVisible(!modalVisible);
        }}>
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalText}>¡Prepárate!</Text>
            <Text style={modalStyles.modalText}>¿Cuántos jugadores son?</Text>

            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={setInputValue} // Usamos setInputValue directamente
                value={inputValue}
                placeholder="Ingrese el número"
                keyboardType="numeric"
              />
            </SafeAreaView>

            <Pressable
              style={[modalStyles.button, modalStyles.buttonClose]}
              onPress={handleSubmit}>
              <Text style={modalStyles.textStyle}>Listo</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 32,
    lineHeight: 84,
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 30,
  },
  TouchableHighlight: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 40,
    width: 250,
    height: 50,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  textBotton: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 150,
  },
  input: {
    height: 40,
    width: 140,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
});

// Estilos del Modal
const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 95,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    text: {
      color: 'black',
      fontSize: 32,
      lineHeight: 84,
      textAlign: 'center',
      marginTop:-10,
      marginBottom:30,
     
    },
    TouchableHighlight:{
      // underlayColor:'black',
      borderWidth: 3,
      borderColor: "black",
      borderRadius: 40,
      width:250, 
      height:50,
      backgroundColor:'white',
      marginBottom:20,
  
    },
    textBotton:{
      fontSize: 18,
      textAlign: 'center',
      paddingVertical: 10,
      fontWeight: 'bold',
    },
    logo:{
      width:200,
      height:150,
      
    },
    input: {
      height: 40,
      width:140,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:20,
    },
    
  
  }});

  //MODAL

  const style = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 95,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
   
    buttonClose: {
      backgroundColor: 'black',
      width:100,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  //THE END MODAL
  
  
  
  
