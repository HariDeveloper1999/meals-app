
import { Pressable,StyleSheet,Text } from "react-native";
import { Ionicons} from '@expo/vector-icons';

function IconBtn({color,icon, size,pressHandler}) {
    
    

    return(
        <Pressable onPress={pressHandler} style={styles.root}>
           <Ionicons name={icon} size={size} color={color}/>
        </Pressable>
    )

}
export default IconBtn
const styles=StyleSheet.create({
    root:{
        marginLeft:-50
    }
})