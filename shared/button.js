import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function CustomButton({ text, onPress }) {
  return (
    <TouchableOpacity>
      <View style={globalStyles.btn}>
        <Text style={globalStyles.btnTex}  onPress={onPress}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
