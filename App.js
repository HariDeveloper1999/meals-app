import StartGameScreen from "./screens/StartGameScreen";
import { StyleSheet,View } from "react-native";
export default function App() {
  
  return (
    <View style={styles.appContainer}>
      <StartGameScreen/>
     </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
    paddingHorizontal:16,
    flex:1,
    // backgroundColor:"#686962"
   
  },
 
});

