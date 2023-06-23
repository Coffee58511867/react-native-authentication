import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../shared/button";
import { getAuth , signOut , onAuthStateChanged} from "firebase/auth";
const auth = getAuth();

export default function DashboardScreen({ navigation }) {

  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is not logged in, redirect to Login
        navigation.replace("Login");
      }else{
        setEmail(user.email);
      }
    });

    return () => unsubscribe();
  }, [navigation]);
  const handleLogout = async () => {
    try {
      await signOut(auth).then(() => {
        navigation.push("Login");
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleMenu = () => {
    navigation.push("Menu");
  };

  return (
    <View style={globalStyles.container}>
      <Text>Welcome {email}</Text>
      <CustomButton text="Logout" onPress={handleLogout} />
      <CustomButton text="Go to Menu" onPress={handleMenu} />
    </View>
  );
}
