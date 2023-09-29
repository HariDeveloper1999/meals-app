import "react-native-gesture-handler"
import { ImageBackground, StyleSheet,View,Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator  } from '@react-navigation/drawer';
import CatogoryScreen from "./screens/CatogoryScreen";
import MealsOverView from "./screens/MealsOverview";
import MealDetailScreen from "./screens/MealDetailScreen";
import Favorites from "./screens/FavoritesScreen";
import {CATEGORIES} from './data/dummy-data/' ;
// import {Ionicons} from "@expo/vector-icons"
import { Ionicons} from '@expo/vector-icons';
import FavoriteContextProvider from "./store/FavoritesContext";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  
 return (<Drawer.Navigator
  screenOptions={{
    headerStyle:{backgroundColor:"#f5ce0c",},
    headerTintColor:"#fff",
     sceneContainerStyle:{backgroundColor:"#424f4f"},
     drawerContentStyle:{backgroundColor:"#424f4f"},
     drawerInactiveTintColor:'white',
     drawerActiveTintColor:'orange',
     drawerActiveBackgroundColor:"black"
    
    
    }}
 
 >
    <Drawer.Screen name="Catogorys" 
     component={CatogoryScreen}
     options={
      {
        title:"All Catogorys",
        drawerIcon:({color,size})=>{
          return(
          <Ionicons name="list" color={color} size={size} />
          )
        }
      }
      
    }
    
    />
    <Drawer.Screen 
    name="Favourites"  
    component={Favorites}
    options={
      {
        drawerIcon:({color,size})=>{
          return(
          <Ionicons name="star" size={size} color={color}/>
          )
        }
      }
    }
    
    />
  </Drawer.Navigator>)
 
}





export default function App() {
  
  

  
 
  
  return (
    <>
    <StatusBar style='light'/>
    <FavoriteContextProvider>
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
          headerStyle:{backgroundColor:"#f5ce0c",},
          headerTintColor:"#fff",
           sceneContainerStyle:{backgroundColor:"#32a4a8"},

          
          }}
      >
       <Stack.Screen 
          name="CatogoryScreen" 
          component={DrawerNavigator}
          options={
            {
              headerShown:false
            }
          }
          
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
    </FavoriteContextProvider>
  
     </>
   
  );
}

const styles = StyleSheet.create({
  // main:{
  //   marginVertical:20
  // }
 
});

