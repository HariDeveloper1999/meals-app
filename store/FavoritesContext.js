import { createContext, useState } from "react";

export const FavoriteContext=createContext({
    id:[],
    addToFavorites:()=>{},
    removeFavorites:()=>{}
})

function FavoriteContextProvider({children}){
    const [mealIds,setMealIds]=useState([]);

    function addToFavorites(id){
        setMealIds((prevIds)=>[...prevIds,id])
    }

    function removeFavorites(id){
        setMealIds((prevIds)=>
         prevIds.filter((mealId)=> mealId !== id)
        )

    }
    const value={
        id:mealIds,
        addToFavorites:addToFavorites,
        removeFavorites:removeFavorites
    }

    return(
     <FavoriteContext.Provider value={value}>
        {children}
    </FavoriteContext.Provider>
    )

}
export default FavoriteContextProvider;