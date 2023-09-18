import { View,Text, Pressable,StyleSheet } from "react-native";

function FlatItem ({title,color,onPress}){
  return(
    <View style={styles.gridItem}>
      <Pressable style={styles.pressBtn} android_ripple={{color:'red'}} onPress={onPress}>
        <View style={[styles.viewItem,{backgroundColor:color}]}>
        <Text style={styles.title}>{title}</Text>
        </View>
        </Pressable>
    </View> 
  )


}
export default FlatItem;

const styles=StyleSheet.create({
  gridItem:{
    flex:1,
    margin:16,
    height:150,
    elevation:5,
  },
  pressBtn:{
    flex:1
  },
  viewItem:{
    flex:1,
    padding:16,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  }
})