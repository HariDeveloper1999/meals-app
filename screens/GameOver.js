import { View,Text,StyleSheet,Image } from "react-native"
import PrimaryBtn from "../components/primaryBtn"


function GameOver(props) {
  const {loggedNumber,pickedNumber,clickHandler} = props
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.congratulationText}>Congratulations !!!</Text>  
      <Image
        source={require('../assets/successImg.png')}
        style={styles.sucImg}
      
      />
      <Text style={styles.sumText}>
      Your Phone needed<Text style={styles.subText}>{'  '}{loggedNumber} </Text> rounds to get The Number{'  '} 
      <Text style={styles.subText}> {pickedNumber} </Text>
      </Text>
      {/* <View style={styles.btn}>
      <PrimaryBtn pressHandler={clickHandler}>Start Game</PrimaryBtn>
      </View> */}
    </View>
  )
}

export default GameOver

const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  sucImg:{
    height:300,
    width:300,
    marginTop:10,
    borderRadius:200
  },
  congratulationText:{
    color:'green',
    fontSize:24,
    backgroundColor:'yellow',
    padding:10,
    borderRadius:10,
    borderWidth:2
 },
 sumText:{
  fontSize:24,
  color:'white',
  padding:10

 },
 subText:{
  fontSize:28,
  color:'yellow'
 },
 btn:{
  marginVertical:20
 }

})