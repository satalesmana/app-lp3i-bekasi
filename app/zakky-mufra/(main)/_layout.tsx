import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Message',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbubbles-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(account)"
        options={{
          headerShown: false,
          title: 'Account',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}