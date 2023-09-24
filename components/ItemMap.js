import { Text,View,StyleSheet } from "react-native"
function ItemMap({data}){

   return(
    <View style={styles.root}>
    {
        data?.map((item)=><Text style={styles.item} key={item}>{item}</Text>)
    }
    </View>
   ) 
}
export default ItemMap;

const styles = StyleSheet.create({
    root:{
      backgroundColor:"#f2c444",
      borderRadius:10,
      elevation:4,
      padding:10,
      margin:4

    },
    item:{
      textAlign:"center",
      color:"black",
      fontSize:18,
      marginTop:10,
      fontWeight:"bold"
    }
})

