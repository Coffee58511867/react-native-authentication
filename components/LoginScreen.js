import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../shared/button";

export default function LoginScreen({ navigation }) {
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
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Enter your name"
        style={globalStyles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Enter your age"
        style={globalStyles.input}
        value={age}
        onChangeText={(value) => setAge(value)}
      />
      <CustomButton text="Login" onPress={handleLogin}/>
      <CustomButton text="Register"   onPress={() => navigation.push("Register")}/>
   
    </View>
  );
}

