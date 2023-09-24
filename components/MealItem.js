import { View,Text, Pressable,StyleSheet,Image } from "react-native"
import { useNavigation } from "@react-navigation/native";
import MealItemDetails from "./MealItemDetails";

function MealItem({item}){
  const navigation = useNavigation()
  const itemPressHandler = () => {
    navigation.navigate("MealDetails",{
      mealId:item?.id
    })

}

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:"yellow"}} onPress={itemPressHandler}>
        <View>
        <Image source={{uri:item?.imageUrl}} style={styles.imgStyle}/>
        <Text style={styles.title}>{item?.title}</Text>
        </View>
          <MealItemDetails duration={item?.duration} affordability={item?.affordability} complexity={item?.complexity}/>
      </Pressable>
        
    </View>
  )
}
export default MealItem;


const styles=StyleSheet.create({
  imgStyle:{
    width:"100%",
    height:200
  },
  title:{
    fontSize:18,
    fontWeight:"bold",
    textAlign:"center"
  },
  mealItem:{
    backgroundColor:'white',
    borderRadius:8,
    margin:16,
    elevation:4

  },
  detailsContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:8,
  },
  detailsItem:{
    marginHorizontal:8,
  }
})