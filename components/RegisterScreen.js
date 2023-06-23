import React from "react";
import { Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../shared/button";
import { useForm, Controller } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default function RegisterScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try {
    
      await createUserWithEmailAndPassword(auth, data.email, data.password)
       .then(() => {
         // User registration successful
         navigation.push('Dashboard');
         Alert.alert("Success", "User registered successfully");
       })
     } catch (error) {
       Alert.alert("Error", "Failed to create user");
       console.log(error);
     }
  };

  return (
    <View style={globalStyles.container}>
      <Controller
        control={control}
        rules={{
          required: "Email address is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              placeholder="Email address"
              style={globalStyles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={globalStyles.errorText}>{errors.email.message}</Text>
            )}
          </View>
        )}
        name="email"
        defaultValue=""
      />

      <Controller
        control={control}
        rules={{
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{8}$/,
            message: "Invalid phone number",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              placeholder="Phone number"
              style={globalStyles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="phone-pad"
            />
            {errors.phone && (
              <Text style={globalStyles.errorText}>{errors.phone.message}</Text>
            )}
          </View>
        )}
        name="phone"
        defaultValue=""
      />

      <Controller
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              placeholder="Password"
              style={globalStyles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry
            />
            {errors.password && (
              <Text style={globalStyles.errorText}>
                {errors.password.message}
              </Text>
            )}
          </View>
        )}
        name="password"
        defaultValue=""
      />

      <CustomButton text="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
