import { useEffect} from "react";
import { StyleSheet, Text, View} from "react-native";

export default function Splashcreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.push("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0080ff",
    justifyContent: "center",

    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});
