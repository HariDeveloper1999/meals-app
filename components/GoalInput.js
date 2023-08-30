import { TextInput,Button,View,StyleSheet, Modal,Image, } from "react-native";
import { useEffect, useState } from "react";


function GoalInput(props) {
    const{placeHolder,title, onPressHandler,onChangeHandler,value,cancelHandler}=props
    const [btnActivater,setBtnActivater]=useState(false)

    useEffect(()=>{
     if(value?.lenght>0){
        setBtnActivater(true)
     }
    },[value])
    
    
  return (
    <>
    <Image  style={styles.image}source={require('../assets/goal.jpg')}/>

    <TextInput 
         style={styles.textInput} 
         placeholder={placeHolder}
         onChangeText={onChangeHandler}
         value={value}
         />

   
    <View style={styles.btnContainer}>
    <View style={styles.btn}>
    <Button color="#5ef507" title={title} onPress={onPressHandler}/>
    </View>
    <View style={styles.btn}>
      <Button color="#f72040" title="Cancel" onPress={cancelHandler}/>
    </View>
    </View>

    </>
  )
}

export default GoalInput
const styles = StyleSheet.create({
    image:{
        height:'50%',
        width:"100%",
        borderRadius:30
    },
    btnContainer:{
        flexDirection:'row',
       
    },
    btn:{
        marginTop:20,
        marginRight:10
        

    },
   
    textInput:{
      borderWidth:1,
      borderColor:"#eef73b",
      width:"100%",
      padding:10,
      color:"#ffffff",
      marginTop:20
  
    },

   
  });