import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity ,Image } from 'react-native';


export default function Home( ) {
  let cant = prompt('Cantidad de jugadores? ');
    return (
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Text style={styles.text}>SIN PALABRAS</Text>
        <StatusBar style="auto" />
        
        <TouchableOpacity style={styles.TouchableHighlight} onPress={() => alert(cant)}>
          <Text style={styles.textBotton}>COMENZAR A JUGAR</Text>
        </TouchableOpacity > 
        <TouchableOpacity  style={styles.TouchableHighlight}>
          <Text style={styles.textBotton}>APRENDER LAS REGLAS</Text>
        
        </TouchableOpacity > 
    

           
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
  
  
  });
  
  
  
  