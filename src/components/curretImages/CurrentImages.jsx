import { StyleSheet, Text, View, Image } from "react-native";
export const CurrentImages = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/icon.png")} />
      <Text style={styles.text}>DESCRIPTION</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  containerLeft: {
    flex: 1,
    borderWidth: 3,
    width: "50%",
  },
  containerRigth: {
    flex: 1,
    borderWidth: 3,
    width: "50%",
    alignItems: "flex-end",
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: "#141313",
    fontSize: 30,
    fontWeight: "500",
  },
});
