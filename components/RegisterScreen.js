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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const register = () =>  {
    console.log(email);
  }
 
  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Email address"
        style={globalStyles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
        keyboardType='email-address'
      />
            <TextInput
        placeholder="Phone Number"
        style={globalStyles.input}
        value={phone}
        onChangeText={(value) => setPhone(value)}
        keyboardType='phone-pad'
      />
      <TextInput
        placeholder="Password"
        style={globalStyles.input}
        value={password}
        onChangeText={(value) => setPassword(value)}
        keyboardType='visible-password'
      />
      <CustomButton text="Register" onPress={register}/>
    </View>
    
  );
};
