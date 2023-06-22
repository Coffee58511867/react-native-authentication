import * as React from "react";
import {
  Text,
  View,
  FlatList,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

function HomeScreen() {
  const [Items, setItems] = React.useState([
    { key: "1", name: "Item1" },
    { key: "2", name: "Item2" },
    { key: "3", name: "Item3" },
    { key: "4", name: "Item4" },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={Items}
        renderItem={({ item }) => (
          <Card>
            <Text>{item.name}</Text>
          </Card>
        )}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></View>
  );
}

function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TopBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          title: "Home",
        }}
        component={HomeScreen}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
