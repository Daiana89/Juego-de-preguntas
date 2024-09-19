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

const styles = StyleSheet.create({
    game:{
        backgroundColor:'black',
        
    },
    Text_game:{
        color:'white',
    }
})
