import { StyleSheet, Text, View } from "react-native";
import { Header } from "../components/common/Header";
import { CurrentImages } from "../components/curretImages/CurrentImages";
import { LastImages } from "../components/lastImages/LastImages";
export const Home = () => {
  return (
    <View style={styles.container}>

      <Header />
      <CurrentImages/>
  
   
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
  
    },
  });