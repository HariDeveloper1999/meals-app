import { useLayoutEffect,useEffect } from "react";
import { View,Text,StyleSheet, FlatList } from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverView({navigation,route,options}){

    const catId = route?.params?.catogoryId
    const displayedMeals = MEALS.filter((mealItems)=>{
        return mealItems.categoryIds.indexOf(catId) >= 0;
    })
    // useEffect(()=>{
    //     const catTitle = CATEGORIES.find((item)=>item?.id == catId).title
    //     navigation.setOptions=({
    //         title:catTitle
    //     })

    // },[catId,navigation])
  
       
   

    const renderDetails = (itemData) => {
         return <MealItem item={itemData.item} />
    }
  
    return(
        <View style={styles.container}>
           <FlatList
             data={displayedMeals}
             keyExtroctor={(item)=>item.id}
             renderItem={renderDetails}
           
           />
        </View>
    )

}
export default MealsOverView;
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})