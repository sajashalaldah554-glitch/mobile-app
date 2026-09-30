import { StyleSheet, Text, View } from "react-native";
function Welcome({ name, country, style }) {
  return (
    <View style={style}>
      <Text style={[styless.text, styless.textName]}>
        Welcome your is name {name}
      </Text>
      <Text style={[styless.text, styless.textCountry]}>
        And your country is {country}
      </Text>
    </View>
  );
}
const styless = StyleSheet.create({
  text: {
    fontFamily: "bold",
    fontSize: 20,
  },
  textName: { color: "#fff" },
  textCountry: { color: "purple" },
});
export default Welcome;
