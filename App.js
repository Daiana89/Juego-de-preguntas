import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableHighlight } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

        <image source={{uri:'./assets/logo.png'}}/>
        <Text style={styles.text}>Hola</Text>
        <StatusBar style="auto" />
        <TouchableHighlight style={styles.TouchableHighlight}>
          <Text style={styles.textBotton}>VERDAD O RETO</Text>
        </TouchableHighlight> 
        <TouchableHighlight style={styles.TouchableHighlight}>
          <Text style={styles.textBotton}>REGLAS</Text>
        </TouchableHighlight> 
        
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
    fontSize: 42,
    lineHeight: 84,
    textAlign: 'center',
   
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
    

  }

});
