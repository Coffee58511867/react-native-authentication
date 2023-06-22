import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../shared/button";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
 
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
    </View>
  );
};
