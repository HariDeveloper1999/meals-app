import { View,Text,StyleSheet, Pressable } from "react-native"
import Colors from "../constants/Colors"

function PrimaryBtn(props) {
    const{children,pressHandler,btnStyle}=props
    
  return (
    <View style={styles.btnOuter}>
      <Pressable style={styles.btncontainer} android_ripple={{color:"#6203fc"}} onPress={pressHandler}>
       <Text style={[styles.btnText,btnStyle]}>{children}</Text>
       </Pressable>
    </View>
  )
}

export default PrimaryBtn

const styles=StyleSheet.create({

  btnOuter:{
    borderRadius:28,
    margin:4,
    overflow:'hidden'
  },
  btncontainer:{
    backgroundColor:Colors.btnbg,
    borderradius:21,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,  
   
    
    
  },
  btnText:{
    color:'white',
    textAlign:'center'
  }
})