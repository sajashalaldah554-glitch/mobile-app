import {
  Button,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator
} from "react-native";

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
//console.log(-----------------------------------------------------------------------------------------)
// import { users } from "./data";
// export default function App() {
//   return (
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
    // <ScrollView style={styles.container}>
      {/* {users.map((user) => (
        <View key={user.id} style={styles.card}>
          <Text style={styles.text}>{user.name}</Text>
          <Text style={styles.text}>{user.Age}</Text>
        </View>
      ))} */}

//       <FlatList
//         data={users}
//         renderItem={({ item, index }) => {
//           return (
//             <View key={index} style={styles.card}>
//               <Text style={styles.text}>{item.name}</Text>
//               <Text style={styles.text}>{item.Age}</Text>
//             </View>
//           );
//         }}
//         ItemSeparatorComponent={() => (
//           <View style={{ height: 40 }}>
//             <Text style={styles.text}>***********************</Text>
//           </View>
//         )}
//         ListEmptyComponent={() => (
//           <View style={styles.card}>
//             <Text style={styles.text}>No Component</Text>
//             <Button title="Create Users" />
//           </View>
//         )}
//         ListHeaderComponent={() => (
//           <View style={styles.heafoo}>
//             <Text style={{ fontWeight: "bold", fontSize: 20 }}>Header</Text>
//           </View>
//         )}
//         ListFooterComponent={() => (
//           <View style={styles.heafoo}>
//             <Text style={{ fontWeight: "bold", fontSize: 20 }}>Footer</Text>
//           </View>
//         )}
//       />
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   heafoo: {
//     backgroundColor: "#9e9d9d",
//     borderRadius: 10,
//     padding: 20,
//     margin: 10,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "skyblue",
//   },
//   card: {
//     backgroundColor: "darkorange",
//     borderRadius: 10,
//     padding: 20,
//     margin: 10,
//   },
//   text: {
//     fontSize: 20,
//     // color:Platform.OS==="ios"?"red":"#ff",
//     ...Platform.select({
//       ios: {
//         color: "#fff",
//         textAlign: "center",
//         fontWeight: "bold",
//       },
//       android: {
//         color: "red",
//         textAlign: "left",
//       },
//     }),
//     fontWeight: "bold",
//   },
// });

import { useState } from "react";
import { Background } from "expo-router/build/react-navigation";
export default function App(){
  const [isClose,setIsClose]=useState(false)
  return(
   
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Pressable style={{alignItems:"center"}} onPress={()=>setIsClose(true)}>
      <ActivityIndicator color="skyblue" size="large" style={{marginTop:150}}/>
      <Text style={{color:"skyblue"}}>تحميل...</Text>
      </Pressable>
      <Modal visible={isClose} animationType="slide">
      <ImageBackground style={styles.Background} source={require("@/assets/images/imge.png")}>
      
        <Text style={{marginTop:60}}>React Native</Text>
        <Image style={{width:200,height:200}} source={require("@/assets/images/react-logo.png")}></Image>
        <ScrollView>
        <Text style={{padding:15}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci libero repudiandae minima. Perferendis rem doloribus cumque maiores architecto tempore corporis, praesentium aspernatur aliquam reprehenderit officiis repellendus voluptate tempora nulla deserunt vel ea iste harum incidunt facilis deleniti repellat. Doloremque corporis quam omnis nostrum impedit blanditiis repudiandae esse obcaecati libero beatae.</Text>
        <Text style={{padding:15}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci libero repudiandae minima. Perferendis rem doloribus cumque maiores architecto tempore corporis, praesentium aspernatur aliquam reprehenderit officiis repellendus voluptate tempora nulla deserunt vel ea iste harum incidunt facilis deleniti repellat. Doloremque corporis quam omnis nostrum impedit blanditiis repudiandae esse obcaecati libero beatae.</Text>
        <Text style={{padding:15}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci libero repudiandae minima. Perferendis rem doloribus cumque maiores architecto tempore corporis, praesentium aspernatur aliquam reprehenderit officiis repellendus voluptate tempora nulla deserunt vel ea iste harum incidunt facilis deleniti repellat. Doloremque corporis quam omnis nostrum impedit blanditiis repudiandae esse obcaecati libero beatae.</Text>
        <Text style={{padding:15}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci libero repudiandae minima. Perferendis rem doloribus cumque maiores architecto tempore corporis, praesentium aspernatur aliquam reprehenderit officiis repellendus voluptate tempora nulla deserunt vel ea iste harum incidunt facilis deleniti repellat. Doloremque corporis quam omnis nostrum impedit blanditiis repudiandae esse obcaecati libero beatae.</Text>
        <Text style={{padding:15}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci libero repudiandae minima. Perferendis rem doloribus cumque maiores architecto tempore corporis, praesentium aspernatur aliquam reprehenderit officiis repellendus voluptate tempora nulla deserunt vel ea iste harum incidunt facilis deleniti repellat. Doloremque corporis quam omnis nostrum impedit blanditiis repudiandae esse obcaecati libero beatae.</Text></ScrollView>
      <Text style={{marginBottom:40,fontWeight:"bold"}}><Button title="Close" onPress={()=>setIsClose(false)}/></Text>
      </ImageBackground> 
      </Modal>
      
    </View>
  );
}

let styles=StyleSheet.create({
    text:{
      fontSize:25,
      fontWeight:"bold"
      ,color:"#fff",
      padding:10
    },
    Background:{
      alignItems:"center",
      flex:1,
      width:'100%' ,
      height:'100%',
    },
})