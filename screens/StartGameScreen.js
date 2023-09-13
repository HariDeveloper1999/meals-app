import { TextInput,View,StyleSheet, Alert } from "react-native"
import PrimaryBtn from "../components/primaryBtn"
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/Title";



function StartGameScreen({pickedNumberHandler}) {
 const [enteredNumber,setEnteredNumber]=useState();
 
 const numberInputHandler = (enteredNumber)=>{
  setEnteredNumber(enteredNumber)
}
const resetHandler = () => {
  setEnteredNumber('')
}
const ConfirmBtnHandler=()=>{
  const choosenNumber = +enteredNumber
  if(isNaN(choosenNumber) || choosenNumber <=0 || choosenNumber > 99){
    Alert.alert(
      "Number is Not valid",
      "Entered number should be between 1 to 99",
      [{onPress:resetHandler,key:'Ok',style:'destructive',}]
    )
    return;
  }
    pickedNumberHandler(choosenNumber)


}

  return (
    <View style={styles.inputContainer}>
       <Title title="Enter a number" styleClass={styles.titleStyle}/>
        <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={numberInputHandler}
        value={enteredNumber}
       />
       <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
       <PrimaryBtn pressHandler={resetHandler}>Reset</PrimaryBtn>
       </View>
       <View style={styles.btnContainer}>
       <PrimaryBtn pressHandler = {ConfirmBtnHandler}>Confirm</PrimaryBtn>
       </View>
       </View>
    </View>
  )
}

export default StartGameScreen


const styles=StyleSheet.create({
  inputContainer:{
    marginTop:200,
    marginHorizontal:10,
    backgroundColor:'#3b021f',
    elevation:4,
    padding:10,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center'
 },
 numberInput:{
  height:50,
  width:50,
  fontSize:32,
  borderBottomColor:Colors.yellowShade,
  borderBottomWidth:2,
  marginVertical:8,
  textAlign:'center',
  fontFamily:'Open-Sans-Bold',
  color:Colors.yellowShade,
},
btnsContainer:{
  flexDirection:'row'
},
btnContainer:{
  flex:1
},
titleStyle:{
  color:"red"
}

})