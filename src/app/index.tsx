import { Alert, Button, View,Text ,StyleSheet} from "react-native";

// export default function App() {

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <View style={{ backgroundColor: '#fdfbfb', flex: 1 }}>

//       {/* إشارة التحميل */}
//       <Pressable
//         onPress={() => setIsOpen(true)}
//         style={{
//           marginTop: 100,
//           alignItems: 'center'
//         }}
//       >
//         <ActivityIndicator size="large" color="#0881b9" />

//         <Text
//           style={{
//             color: '#0881b9',
//             marginTop: 10,
//             fontWeight: 'bold',
//             fontSize: 18
//           }}
//         >
//           تحميل
//         </Text>
//       </Pressable>

//       {/* المحتوى يظهر عند الضغط على التحميل */}
//       <Modal
//         visible={isOpen}
//         animationType="slide"
//       >

//         <ImageBackground
//           source={require("@/assets/images/imge.png")}
//           style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
//         >

//           <Image
//             style={{ width: 300, height: 300 }}
//             source={require("@/assets/images/react-logo.png")}
//           />

//           <Text style={{ marginBottom: 10, padding: 20 }}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Ad vero saepe in? Nam totam dicta, deleniti magni cum sint
//             quas nulla esse facere molestiae amet numquam quo omnis ut minus.
//           </Text>

//           <Button
//             title="Click"
//             color="black"
//             onPress={() => setIsOpen(false)}
//           />

//           <Pressable
//             onPress={() => console.log('Welcome')}
//           >
//             <Text
//               style={{
//                 color: "#0881b9",
//                 marginTop: 15,
//                 fontWeight: 'bold',
//                 fontSize: 20
//               }}
//             >
//               Welcome to ReactNative
//             </Text>
//           </Pressable>

//         </ImageBackground>

//       </Modal>

//       <StatusBar
//         backgroundColor="red"
//         barStyle="dark-content"
//       />

//     </View>
//   );
// }

import Welcome from "../component/Welcome";
import Box from"../component/Box";
export default function App() {
  return (
    // <View style={{ flex: 1, backgroundColor: "#c5c5f9", alignItems: "center" }}>
    //   <Button
    //     title="Delet My Account"
    //     onPress={() =>
    //       Alert.alert("Are youe sure?", "Your account will be deleted", [
    //         { text: "Yes", onPress: () => Alert.alert("Account deleted") },
    //         { text: "NO" },
    //       ])
    //     }
    //   />
    //   <Welcome name="Saja" country="Palestine" style={{ padding: 20 }} />
    // </View>

    <View style={styles.contenar}>
      <Box style={{backgroundColor:'red'}}/>
      <Box style={{backgroundColor:'orange'}}/>
      <Box style={{backgroundColor:'green',alignSelf:"flex-start"}}/>
      <Box style={{backgroundColor:'purple'}}/>
    </View>
  );
}
 const styles=StyleSheet.create({
  contenar:{
    flex:1,
    backgroundColor:"skyblue",
    

    
  }
 })

