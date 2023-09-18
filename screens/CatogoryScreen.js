import { FlatList,Text,StyleSheet,View } from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import FlatItem from "../components/FlatItem";


function CatogoryScreen({navigation}) {
  
  

  const pressHandler = (itemData) => {
    navigation.navigate('MealsOvervieeScreen',{
      catogoryId:itemData?.item?.id
    })
  }
  

  const renderItem = (itemData) => {
   
    return(
        <FlatItem
          title={itemData?.item?.title}
          color={itemData?.item?.color}
          onPress={(e)=>pressHandler(itemData)}
        
        />
    )
}
  


  
  return (
    <View style={styles.ViewList}>
     <FlatList  
     data={CATEGORIES}
     ketExtractor={(item)=>item?.id}
     renderItem={renderItem}
     numColumns={2}
    
     
     />
     </View>
  )
}

export default CatogoryScreen;

const styles = StyleSheet.create({
  // ViewList:{
  //   marginVertical:20
  // }
})