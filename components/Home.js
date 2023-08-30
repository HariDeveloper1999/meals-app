import { useState, useEffect } from "react";
import { Button, StyleSheet, View, FlatList, Modal } from "react-native";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";

function Home() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalsData, setGoalsData] = useState([]);
  const [modelActivator, setModelActivator] = useState(false);
  

  const modelHandler = () => {
    setModelActivator(!modelActivator);
  
  };

  const goalInputHandler = (enteredValue) => {
    setEnteredGoal(enteredValue);
  };
  const deleteHandler = (item) => {
    setGoalsData((prevState) =>
      prevState.filter((prevItem) => prevItem.id !== item?.id)
    );
  };
  const addToGoalHandler = () => {
    enteredGoal?.length > 0 && 
    setGoalsData((prev) => [
      ...prev,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setEnteredGoal("");
    modelHandler()
  };

  return (
    <>
      <Button
        onPress={modelHandler}
        title="Add New Goal"
      />

<View style={styles.textContainer}>
          {/* With react native FlatList component */}

          <FlatList
            alwaysBounceVertical={false}
            data={goalsData}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemValue) => {
              return (
                <GoalItem
                  textValue={itemValue}
                  btnTitle="Del"
                  btnColor="red"
                  onPressHandler={deleteHandler}
                />
              );
            }}
          ></FlatList>
        </View>

      <Modal visible={modelActivator} animationType="fade">
        <View style={styles.goalContainer}>
          <GoalInput
            title="Add Goal"
            placeHolder="Add your goals"
            onPressHandler={addToGoalHandler}
            onChangeHandler={goalInputHandler}
            value={enteredGoal}
            cancelHandler={modelHandler}

          />
        </View>
       
      </Modal>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
   
 
  goalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    padding:10,
    backgroundColor:"#686962"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#eef73b",
    width: "75%",
    padding: 10,
    color: "#ffffff",
  },
  textContainer: {
    paddingTop: 20,
    flex: 4,
  },
  goalText: {
    color: "#ffffff",
    fontSize: 22,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#5e0acc",
    margin: 10,
    padding: 8,
    borderRadius: 8,
  },
});
