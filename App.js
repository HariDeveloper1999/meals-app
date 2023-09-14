import StartGameScreen from "./screens/StartGameScreen";
import { ImageBackground, StyleSheet,View } from "react-native";
// import {LinearGradient} from "expo-linear-gradient"
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen"
import GameOver from "./screens/GameOver";
import {useFonts} from "expo-font"
import { StatusBar } from "expo-status-bar";



export default function App() {
  const [pickedNumber,setPickedNumber]=useState();
  const [overState,setOverState]=useState(true)
  const [screenactivator,setScreenActivator]=useState(false);
  const [clickCount,setClickCount]=useState(0)

  const pickedNumberHandler = (number) => {
    setPickedNumber(number)
    setOverState(false)
    setScreenActivator(false)
  }

  const overHandler=()=>{
    setOverState(true)
  }

  const clickCountHandler = () =>{
    setClickCount(clickCount+1)
  }
  



  let screen=<StartGameScreen pickedNumberHandler={pickedNumberHandler} />

 
  
      const gameOverHandler = () => {
         setScreenActivator(true)
      }

  
   

  if(pickedNumber){
     screen = <GameScreen  userNum={pickedNumber} overHandler={overHandler} clickCountHandler={clickCountHandler}/>
  }

  if(overState && pickedNumber){
   screen =<GameOver pickedNumber={pickedNumber} loggedNumber={clickCount} clickHandler={gameOverHandler}/>
   
  }

  const [appLoader]=useFonts({
    'Open-Sans':'./assets/fonts/OpenSans-Regular.ttf',
    'Opens-Sans-Bold':'./assets/fonts/OpenSans-Bold.ttf'
  })
  // if(!appLoader){
  //   return (
  //   // Keep the splash screen visible while we fetch resources
  //   SplashScreen.preventAutoHideAsync()
  //   )
  // }
  return (
    <StatusBar style="light">
    <LinearGradient style={styles.rootScreen}  colors={["#ddb52f","green"]} >
    {/* <View style={styles.appContainer}> */}
    <ImageBackground 
    source={require('./assets/bgimg.jpg')} 
    resizeMode="cover"
    style={styles.rootScreen} 
    imageStyle={styles.bgImg}
    
    >
     {screen}
      </ImageBackground>
      {/* </View> */}
     </LinearGradient >
     </StatusBar>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
    paddingHorizontal:16,
    flex:1,
    // backgroundColor:"#686962"
   
  },
  rootScreen:{
    flex:1
  },
  bgImg:{
    opacity:0.3

  }
 
});

