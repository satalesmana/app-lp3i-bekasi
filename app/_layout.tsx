import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false }} />  
      <Stack.Screen name="home" />
      <Stack.Screen name="sata-lesmana" options={{headerShown: false}} />
      <Stack.Screen name="Hafiizh" options={{headerShown: false}} />
      <Stack.Screen name="Rheza" options={{headerShown: false}} />
      <Stack.Screen name="gema_satya_nugroho" options={{headerShown: false}} />
      <Stack.Screen name="fatimah-azzahra" options={{headerShown: false}} />
      <Stack.Screen name="salsabila-nurul" options={{headerShown: false}} />
      <Stack.Screen name="muhamad-tohir" options={{headerShown: false}} />
    </Stack>
  );
}