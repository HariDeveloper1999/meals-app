import { Text,StyleSheet } from "react-native"
import Colors from "../constants/Colors"

function Title({title,styleClass}) {
  return (
    <Text style={[styles.heading,]}>{title}</Text>
  )
}

export default Title

const styles=StyleSheet.create({
   heading:{
    padding:20,
    borderWidth:2,
    color:Colors.yellowShade,
    borderColor:Colors.yellowShade,
    textAlign:'center',
    fontFamily:'Open-Sans-Bold',
    backgroundColor:'black',
    fontSize:20,
    borderRadius:20,
    marginTop:20,
    
    

   } 
})