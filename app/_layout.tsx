import { Stack } from "expo-router";
import { Provider } from 'react-redux';
import store from '../store/index';

export default function RootLayout() {
  return(
      <Provider store={store}>
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false }} />  
      <Stack.Screen name="home" />
      <Stack.Screen name="sata-lesmana" options={{headerShown: false}} />
      <Stack.Screen name="fatimah-azzahra" options={{headerShown: false}} />
    </Stack>
    </Provider>
  );
}
