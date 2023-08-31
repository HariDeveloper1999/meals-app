import { TextInput,View } from "react-native"
import PrimaryBtn from "../components/primaryBtn"

function StartGameScreen() {
  return (
    <View>
        <TextInput
        placeholder="Enter value"
       />
       <PrimaryBtn>Reset</PrimaryBtn>
       <PrimaryBtn>Confirm</PrimaryBtn>
    </View>
  )
}

export default StartGameScreen