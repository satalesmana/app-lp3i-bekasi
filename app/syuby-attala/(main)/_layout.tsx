import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="(post)"
        options={{
          title: 'Post',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Message',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbubbles-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(account)" // <-- PERBAIKAN 1: Hapus "/index"
        options={{
          title: 'Account',
          headerShown: false, // <-- PERBAIKAN 2: Sembunyikan header dari Tabs
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
