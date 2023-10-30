import { View,Text,StyleSheet } from "react-native";
function MealItemDetails({duration,complexity,affordability,textStyle}){
    return(
        <View style={styles.detailsContainer}>
           <Text style={[styles.detailsItem,textStyle]}>{duration}m</Text>
           <Text style={[styles.detailsItem,textStyle]}>{complexity}</Text>
           <Text style={[styles.detailsItem,textStyle]}>{affordability}</Text>
           </View>

    )

}
export default MealItemDetails;

const styles=StyleSheet.create({
 
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