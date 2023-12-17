import { StyleSheet, Text, View, Image } from "react-native";
import { FetchGet } from "../../utils/fetch";
import { useEffect, useState } from "react";
export const CurrentImages = () => {
  const [data, setData] = useState("cargando..");

  useEffect(async () => {
    const dataFetch = await FetchGet();
    setData(dataFetch);
    console.log(data);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data[0].title}</Text>
      <Image style={styles.image} source={data[0].url} />
      <Text style={styles.text}>{data[0].explanation}</Text>
      <Text style={styles.text}>{data[0].date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    aligneContent: "center",
    paddingHorizontal: 50,
    justifyContent: "center",
  },

  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: "#141313",
    fontStyle: "italic",
    fontWeight: "500",
  },
});
