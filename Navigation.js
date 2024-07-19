import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

//screen
import HomeScreen from './screen/HomeScreen';
import PlayerScreen from './screen/PlayerScreen';



const Tab = createBottomTabNavigator();

function Mytabs() {
  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="Player" component={PlayerScreen} />
    // </Tab.Navigator>

      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Tab.Screen name="Player" options={{headerShown:false}} component={PlayerScreen} />
      </Tab.Navigator>

  );
}

export default function Navigation() {
  return(
    <NavigationContainer>
      <Mytabs/>
    </NavigationContainer>

  );

}




  