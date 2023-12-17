import { StyleSheet, Text, View, Image } from "react-native";
export const LastImages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Text style={styles.text}>Explore</Text>
      </View>
      <View style={styles.containerRigth}>
        <Image style={styles.icon} source={require("../../../assets/icon.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
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
      alignItems:"flex-end"
    },
    icon:{
      width:80,
      height:80,

    },
    text:{
      color:"#141313",
      fontSize:30,
      fontWeight:"500"
    }
});