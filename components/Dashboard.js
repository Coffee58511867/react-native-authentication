import { useState } from "react";
import { View} from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../shared/button";

export default function DashboardScreen({ navigation }) {
  const handleLogout = () => {
    navigation.push("Login");
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
