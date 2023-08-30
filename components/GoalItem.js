import { View,Text,Button,StyleSheet, Pressable } from "react-native"

function GoalItem(props) {
    const{textValue,btnTitle,btnColor,onPressHandler}=props
  return (
    <Pressable
    onPress={()=>onPressHandler(textValue.item)}//Android
    android_ripple={{color:'red'}}
    style={({pressed})=>pressed && styles.pressedItem} //ios
 >
     <View style={styles.itemContainer}>
     
            <Text style = {styles.goalText} >{textValue.item.text}</Text>
            {/* <Button title={btnTitle} color={btnColor} style = {styles.goalText} onPress={()=>onPressHandler(textValue.item)}/> */}
        
    </View>
    </Pressable>
   
    
  )
}

export default GoalItem
const styles = StyleSheet.create({
    textInput:{
      borderWidth:1,
      borderColor:"#eef73b",
      width:"75%",
      padding:10,
      color:"#ffffff"
  
    },
    textContainer:{
      paddingTop:20,
      flex:4,
      
    },
    goalText:{
      color:"#ffffff",
      fontSize:22,
    },
    itemContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:"#5e0acc",
      margin:10,
      padding:8,
      borderRadius:8, 
    },
    pressedItem:{
        color:"red"
    }
   
  });