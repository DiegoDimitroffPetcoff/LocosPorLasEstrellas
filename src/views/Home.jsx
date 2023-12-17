import { StyleSheet, Text, View } from "react-native";
import { Header } from "../components/common/Header";
import { CurrentImages } from "../components/curretImages/CurrentImages";
import { LastImages } from "../components/lastImages/LastImages";
import { FetchGet } from "../utils/fetch";
import { useEffect, useState } from "react";

export const Home = () => {
  const [todayImage, setTodayImage] = useState([]);
  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await FetchGet();
        setTodayImage(todayImageResponse);
      } catch (error) {
        console.log(error);
        setTodayImage(undefined);
      }
    };
    loadTodayImage().catch(null);
  
  }, []);




  return (
    <View style={styles.container}>
    <Header />
    {todayImage.length > 0 && (
      <CurrentImages todayImage={todayImage[0]} />
    )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
