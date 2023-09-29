import { Text,View,StyleSheet } from "react-native";
import MealsList from "../components/MealsList";
import { FavoriteContext } from "../store/FavoritesContext";
import { useContext, useEffect } from "react";
import { MEALS } from "../data/dummy-data";

function Favorites({route,navigation}){

    const favctx = useContext(FavoriteContext);
    const favData=MEALS?.filter((meal)=>favctx?.id?.includes(meal?.id))
    const homeHandler=()=>{
        navigation.navigate("Catogorys")
    }
    
  
 
    return(
        <>
        {
            favctx?.id?.length == 0?
            <View style={styles.root}>
            <Text style={{color:"white",fontSize:20}}>You Don't Have favorite Items</Text>
            <Text style={styles.link} onPress={homeHandler}>Go To Home</Text>
            </View>
            :
            <MealsList data={favData}/>


        }
        </>
   
      
       
    )
}
export default Favorites;

const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',

    },
    link:{
        color:'yellow',
        fontSize:16,
        textDecorationLine:"underline",
        marginTop:20
    }
   
})
