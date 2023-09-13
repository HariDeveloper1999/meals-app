import { View,StyleSheet , Text} from "react-native";
import Colors from "../constants/Colors";


function NumberContainer({children}) {
  return (
    <View>
        <Text style={styles.heading}>{children}</Text>
    </View>
  )
}

export default NumberContainer;

const styles=StyleSheet.create({
    heading:{
     padding:20,
     borderWidth:2,
     color:'white',
     borderColor:'white',
     textAlign:'center',
     fontFamily:'Open-Sans-Bold',
     backgroundColor:'black',
     fontSize:25,
     borderRadius:20,
     marginTop:20,
     
     
 
    } 
 })