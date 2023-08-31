import { View,Text } from "react-native"

function primaryBtn(props) {
    const{children}=props
  return (
    <View>
       <Text>{children}</Text>
    </View>
  )
}

export default primaryBtn