import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

export default function DashboardScreen({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleLogin = async () => {
    if (name.length == 0 && age.length != 0) {
      Alert.alert("Warning", "Please enter your details ");
    } else {
      try {
      
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Enter your age"
        style={styles.input}
        value={age}
        onChangeText={(value) => setAge(value)}
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTex} onPress={handleLogin}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  btn: {
    height: 40,
    marginTop: 10,
    backgroundColor: "#0080ff",
    width: 250,
    borderRadius: 6,
  },
  btnTex: {
    color: "white",
    textAlign: "center",
    marginTop: 9,
    fontSize: 16,
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 50,
    marginBottom: 200,
  },

  input: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    height: 45,
    margin: 5,
    
  },
});
