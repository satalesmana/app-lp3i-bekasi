import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "#999",
        headerShown: false,
      }}
    >
      {/* POST / HOME */}
      <Tabs.Screen
        name="(post)"
        options={{
          title: "Post",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />

      {/* MESSAGE */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Message",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat" color={color} size={size} />
          ),
        }}
      />

      {/* ACCOUNT */}
      <Tabs.Screen
        name="(account)/index"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
