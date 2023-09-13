import { Text,View,StyleSheet } from "react-native"
import Colors from "../constants/Colors";

function FlatItem({value}) {
  return (
    <View style={styles.itemContainer}>
      <Text style={{color:"white"}}>Opponent's Guess{value}</Text>
    </View>
  )
}

export default FlatItem;

const styles=StyleSheet.create({
    itemContainer:{
      backgroundColor:Colors.btnbg,
      borderWidth:2,
      padding:10,
      textAlign:"center",
      color:"white",
      width:200,
      marginTop:20,

    }
})