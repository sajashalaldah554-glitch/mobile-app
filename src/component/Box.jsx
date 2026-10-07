import {View,StyleSheet,Text} from 'react-native'

export default function Box({style}) {
  return (
    <View style={[styles.box,style]}>
      <Text style={styles.txt}>Flex shrink -1</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    box:{
      backgroundColor:"#fff",
        padding:20,
        marginVertical:10,
    },
    txt:{
      fontSize:20,
      textAlign:"center",
      
    }
})
