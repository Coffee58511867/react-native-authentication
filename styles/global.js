import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
    card: {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      width:300,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6,
    },
    cardContent: {
      marginHorizontal: 18,
      marginVertical: 20,
    },
    input: {
      width: 300,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      fontSize: 18,
      height: 45,
      margin: 5,
      
    },
    errorText: {
      color: "red",
      marginBottom: 10,
      marginLeft: 10,
    },

  });