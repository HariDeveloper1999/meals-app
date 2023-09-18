
import { ImageBackground, StyleSheet,View,Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CatogoryScreen from "./screens/CatogoryScreen";
import MealsOverView from "./screens/MealsOverview";





export default function App() {
  const Stack = createStackNavigator()
 
  
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="CatogoryScreen" component={CatogoryScreen}/>
       <Stack.Screen name="MealsOvervieeScreen" component={MealsOverView}/>
    

      </Stack.Navigator>
    </NavigationContainer>
  
     </>
   
  );
}

const styles = StyleSheet.create({
  // main:{
  //   marginVertical:20
  // }
 
});

