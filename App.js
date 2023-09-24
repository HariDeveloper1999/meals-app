
import { ImageBackground, StyleSheet,View,Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CatogoryScreen from "./screens/CatogoryScreen";
import MealsOverView from "./screens/MealsOverview";
import MealDetailScreen from "./screens/MealDetailScreen";
import {CATEGORIES} from './data/dummy-data/' 





export default function App() {
  const Stack = createStackNavigator()
 
  
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
          headerStyle:{backgroundColor:"#f5ce0c",},
          headerTintColor:"#fff",
           sceneContainerStyle:{backgroundColor:"#f5ce0c"},
           contentStyle: {backgroundColor:"red"}
          
          }}
      >
       <Stack.Screen 
          name="CatogoryScreen" 
          component={CatogoryScreen}
          options={{title : "All Catogorys"}}
          
        />
       <Stack.Screen 
       name="MealsOvervieeScreen" 
       component={MealsOverView}
       options={
        ({navigation,route})=>{
          const catId=route.params.catogoryId
          const catTitle=CATEGORIES.find((item)=>item?.id == catId).title
          return{
            title:catTitle
          }
        }
       }
       
       />
       <Stack.Screen
       name="MealDetails"
       component={MealDetailScreen}
       
       />
    

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

