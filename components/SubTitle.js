import { Text,StyleSheet } from "react-native"
function SubTitle({children}) {
    return(
        <Text style={styles.subTitle}>{children}</Text>
    )

}
export default SubTitle;

const styles=StyleSheet.create({
   
    subTitle:{
        color:"yellow",
        fontSize:18,
        fontWeight:'bold',
        textAlign:"center",
        margin:8,
        padding:4,
        borderColor:'white',
        borderWidth:2,
        backgroundColor:'black'
    }
   
})