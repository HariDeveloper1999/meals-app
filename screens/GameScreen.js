import {View,Text,SafeAreaView,StyleSheet,Alert, FlatList} from "react-native"
import Title from "../components/Title"
import NumberContainer from "../components/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryBtn from "../components/primaryBtn";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons"
import FlatItem from "../components/FlatItem";



const numberHandler=(min,max,excluded)=>{
    const randomNm= Math.floor(Math.random()*(max-min)) + min
    if(randomNm === excluded){
        return numberHandler(min,max,excluded)
    }
    else{
        return randomNm;
    }

}


function GameScreen({userNum,overHandler,clickCountHandler}) {
    const [minVal,setMinVal]=useState(1);
    const [maxVal,setMaxVal]=useState(100)
    const initialGuess = numberHandler(1,100,userNum);
    const [currentGuess,setCurrentGuess]=useState(initialGuess);
    const [guessData,setGuessData]=useState([])

useEffect(()=>{
 currentGuess === userNum && overHandler()
},[currentGuess,userNum,overHandler])


const guessBtnHandler=(direction)=>{
    

    if((direction=="lower" && currentGuess < userNum) || (direction=="higher" && currentGuess > userNum)){
        Alert.alert("Dont lie", "number is wrong",[{text:"Sorry!",style:'cancel'}])

    }
    else if(direction === "lower"){
        let difference=userNum-currentGuess
        setCurrentGuess(difference >=(-10)? currentGuess-1 : currentGuess-10)
        clickCountHandler()
        setGuessData((prev)=>[...prev,currentGuess])
       
    }else if(direction === "higher"){
        let difference=userNum-currentGuess
        setCurrentGuess(difference >= 10? currentGuess+10 : currentGuess+1)
       clickCountHandler()
       setGuessData((prev)=>[...prev,currentGuess])
    }
    else {
        Alert.alert(
            "Something went wrong",
            [{text:"Ok",}]
        )
    }

//    const newRndNum =  numberHandler(minVal,maxVal,userNum)
   
 
  

}

   
  return (
   
    <View style={styles.gameRoot}>
        <Title
         title="Opponent's Guess"
         />
        <View>
            <NumberContainer>{currentGuess}</NumberContainer>
             <View style={styles.btnContainer}>
                <PrimaryBtn btnStyle={styles.btnstyle} pressHandler={()=>guessBtnHandler('higher')}>
                {/* <Ionicons name="md-add" size={24} color="white" /> */}
                Increase
                </PrimaryBtn>
                <PrimaryBtn  btnStyle={styles.btnstyle} pressHandler={()=>guessBtnHandler('lower')}>
                    Decrease
                   
                    {/* <Ionicons name="md-remove" size={24} color="white" /> */}
                </PrimaryBtn>
             </View>

            {/* <Text>High or Lower !</Text> */}
            
         
        </View>
        {guessData?.length > 0 &&
        <View style={styles.logView}>
           <Title
           title="LOG ROUNDS"
           
           />
           
            
           <View >
           {/* {
            guessData?.map((item)=><Text>{item}</Text>)
           } */}
           <FlatList
           data={guessData}
           renderItem={(itemData)=>
            <FlatItem
              value={itemData?.item}
            />
        
           }
           keyExtractor={(item)=>item}
           

           />
           </View>
            </View>
        }
    </View>
  
  )
}

export default GameScreen

const styles=StyleSheet.create({
  gameRoot:{
    // flex:1,
    padding:24,
    color:'red'
  },
  btnContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20
  },
btnstyle:{
    width:100,
    color:Colors.yellowShade
},
logView:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:60,
}
})