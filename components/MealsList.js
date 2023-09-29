import { FlatList,StyleSheet,View } from "react-native"
import MealItem from "./MealItem"

export default function  MealsList({data}){
    const renderDetails = (itemData) => {
        return <MealItem item={itemData.item} />
   }
 
   return(
       <View style={styles.container}>
          <FlatList
            data={data}
            keyExtroctor={(item)=>item.id}
            renderItem={renderDetails}
          
          />
       </View>
   )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})