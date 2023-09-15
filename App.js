
import { ImageBackground, StyleSheet,View,Text } from "react-native";
import { useFonts } from "expo-font";



export default function App() {
 

  const [appLoader]=useFonts({
    'Open-Sans':'./assets/fonts/OpenSans-Regular.ttf',
    'Opens-Sans-Bold':'./assets/fonts/OpenSans-Bold.ttf'
  })
  
  return (
     <Text>Hellow world</Text>
  );
}

// const styles = StyleSheet.create({
 
 
// });

