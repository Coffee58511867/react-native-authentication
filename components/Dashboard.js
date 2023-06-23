import { useState } from "react";
import { View} from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../shared/button";
import { getAuth, signOut} from "firebase/auth";
const auth = getAuth();

export default function DashboardScreen({ navigation }) {
  const handleLogout = async () => {
  try {
    await signOut().then(() => {
      navigation.push("Login");
    })
  } catch (error) {
    console.log(error);
  }
   
  };
  const handleMenu = () => {
    navigation.push("Menu");
  }

  return (
    <View style={globalStyles.container}>
      <CustomButton text="Logout" onPress={handleLogout} />
      <CustomButton text="Go to Menu" onPress={handleMenu} />
    </View>
  );
}
