import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Routes } from "./src/routes/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccd7e0",
  },
});
