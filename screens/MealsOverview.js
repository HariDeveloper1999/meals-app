import { useLayoutEffect,useEffect } from "react";
import { View,Text,StyleSheet, FlatList } from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList";


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
  
       
   return(
     <MealsList data={displayedMeals}/>
   )

   

}
export default MealsOverView;
