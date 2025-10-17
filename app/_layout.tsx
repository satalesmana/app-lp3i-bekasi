import { Stack } from "expo-router";
import { Provider } from 'react-redux';
import store from '../store/index';

export default function RootLayout() {
  return(
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false }} />  
      <Stack.Screen name="home" />
      <Stack.Screen name="sata-lesmana" options={{headerShown: false}} />
      <Stack.Screen name="syuby-alwi-akbar-attala" options={{headerShown: false}} />
      <Stack.Screen name="syuby-alwi-akbar-attala/login" options={{headerShown: false}} />
    </Stack>
  );
}
