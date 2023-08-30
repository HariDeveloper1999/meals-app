
import { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, View,TextInput,ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal,setEnteredGoal] = useState("");
  const [goalsData,setGoalsData]=useState([])
 



  const goalInputHandler = (enteredValue) => {
    setEnteredGoal(enteredValue)
   }
   const deleteHandler = (item) => {
    setGoalsData((prevState) => prevState.filter((prevItem) => prevItem !== item))
  }
   const addToGoalHandler = () => {
    setGoalsData(prev=>[...prev,
      {text:enteredGoal,id:Math.random().toString()}
    ])
   }
   
  return (
    <View style={styles.appContainer}>
      <View style={styles.goalContainer}>
         <TextInput 
         style={styles.textInput} 
         placeholder='Add your goals'
         onChangeText={goalInputHandler}
         />
         <Button title="Add Goal" onPress={addToGoalHandler}></Button>
      </View>
      <View style={styles.textContainer}>
      {/* With pure js */}
        
{/*       
        {
          goalsData.map((item)=>
          <View style={styles.itemContainer} key={item}>
          <Text style = {styles.goalText} >{item}</Text>
          <Button title='Del' color="red" style = {styles.goalText} onPress={()=>deleteHandler(item)}/>
          </View>
          )
        } */} 

        {/* With react native FlatList component */}

        <FlatList
        alwaysBounceVertical={false}
        data={goalsData}
        keyExtractor={(item,index)=>{
           return item.id

        }}
        renderItem={
        (itemValue)=>{
          return(
            <View style={styles.itemContainer}>
            <Text style = {styles.goalText} >{itemValue.item.text}</Text>
            <Button title='Del' color="red" style = {styles.goalText} onPress={()=>deleteHandler(itemValue.item)}/>
            </View>
          )
        }
        }
        >
     </FlatList>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
    paddingHorizontal:16,
    flex:1,
    backgroundColor:"#686962"
   
  },
  goalContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:30,
    borderBottomWidth:1,
    borderBottomColor:"#eef73b",
    flex:1,
    alignItems:'center'
   
  },
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
  }
 
});
