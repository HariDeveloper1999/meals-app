import { View,Text,StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverView({route}){

    const catId = route?.params?.catogoryId
    const displayedMeals = MEALS.filter((mealItems)=>{
        return mealItems.categoryIds.indexOf(catId) >= 0;
    })

    const renderDetails = (itemData) => {
         return <MealItem title={itemData.item.title}/>
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