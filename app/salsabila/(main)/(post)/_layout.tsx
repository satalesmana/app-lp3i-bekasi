import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false  }} />  
      <Stack.Screen name="detailPost" options={{ headerShown: false  }} />  
      <Stack.Screen name="form" options={{ title: 'Add New Post'}} />
    </Stack>
  );
}
