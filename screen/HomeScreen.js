import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity ,Image } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';

import { UserContext } from '../UserContext';


import {Alert, Modal, Pressable} from 'react-native';

export default function Home( {navigation}) {
  //MODAL
  const [modalVisible, setModalVisible] = useState(false);
  //TEXT INPUT
  const [inputValue, setInputValue] = useState('');
  

  // Control de voton 'LISTO'
  const handlePress = () => {
    setModalVisible(false); // Cierra el modal
    navigation.navigate('Game'); // Redirige a la pantalla de detalles
  };

    return (
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Text style={styles.text}>SIN PALABRAS</Text>
        <StatusBar style="auto" />
        
        <TouchableOpacity style={styles.TouchableHighlight} title="Show" onPress={() => setModalVisible(true)} >
          <Text style={styles.textBotton}>COMENZAR A JUGAR</Text>
        </TouchableOpacity > 
        <TouchableOpacity  style={styles.TouchableHighlight}>
          <Text style={styles.textBotton}>APRENDER LAS REGLAS</Text>
        
        </TouchableOpacity > 

        {/* MODAL */}
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onShow={()=>console.log('show')} 
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
         
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>¡Parhaaa!</Text>
            <Text style={style.modalText}>¿Cuantos players son?</Text>

            <SafeAreaView>
                <TextInput
                  style={styles.input}
                  value={inputValue}
                  // onChangeText={number => setInputValue(number)}
                  onChangeText={setInputValue}
                  placeholder="ingrese el number"
                  keyboardType="numeric"
                />
                
            </SafeAreaView>
            <Text style={styles.text}>players: {inputValue}</Text>
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={handlePress}>
              <Text style={style.textStyle}>Listo</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     

      {/* THE END MODAL */}
    

           
    </View>
      
    );
  }
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
    
  
  });

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
  
  
  
  