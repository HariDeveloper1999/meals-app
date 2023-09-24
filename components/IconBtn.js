
import { Pressable,StyleSheet,Text } from "react-native";

function IconBtn({color,icon,pressHandler}) {
    

    return(
        <Pressable onPress={pressHandler} style={styles.root}>
            <Text>Click me</Text>
        </Pressable>
    )

}
export default IconBtn
const styles=StyleSheet.create({
    root:{
        marginLeft:-50
    }
})