import { Text,View,Image,StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItemDetails from "../components/MealItemDetails";
import SubTitle from "../components/SubTitle";
import ItemMap from "../components/ItemMap";
import { useLayoutEffect } from "react";
import IconBtn from "../components/IconBtn";

function MealDetailScreen({route,navigation}){
    const mealId=route?.params?.mealId;
    const mealData=MEALS.find((mealItem)=>mealItem?.id === mealId)

    const pressHandler = () => {
        console.log("Pressed !!!!")
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return(
                   <IconBtn pressHandler={pressHandler}/>
                )
            }
        })

    },[navigation,pressHandler])
    
    
return(
    <ScrollView>
        <View style={{backgroundColor:'gray'}}>
        <Image style={styles.imageStyle} source={{uri:mealData?.imageUrl}} />
        <Text style={styles.title}>{mealData?.title}</Text>
        <View>
        <MealItemDetails textStyle={styles.detailsText} duration={mealData?.duration} affordability={mealData?.affordability} complexity={mealData?.complexity}/>
        </View>
    
        <SubTitle>Ingrediants</SubTitle>
        
        <ItemMap data={mealData?.ingredients}/>
         <SubTitle>Ingradiants</SubTitle>
       <ItemMap data={mealData?.steps}/>
    </View>

    </ScrollView>
    
)
}
export default MealDetailScreen;


const styles=StyleSheet.create({
    root:{
       backgroundColor:'gray',
       marginBottom:20
    },
    imageStyle:{
        width:'100%',
        height:350
    },
    title:{
        color:"#fff",
        fontSize:20,
        fontWeight:'bold',
        textAlign:"center",
        margin:8
    },
    detailsText:{
        color:'#fff'
    },
    subTitle:{
        color:"yellow",
        fontSize:18,
        fontWeight:'bold',
        textAlign:"center",
        margin:8,
        padding:4,
        borderColor:'white',
        borderWidth:2,
        backgroundColor:'black',
    }
   
})