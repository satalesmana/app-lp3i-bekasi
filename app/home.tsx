import { router } from "expo-router";
import { Button, Text, View } from "react-native";


export default function homeScreen() {
  return (
    <View>
        <Text>ini halaman home</Text>
        <Button
          onPress={()=> router.push("/sata-lesmana")}
          title="Learn More"
          color="#841584"
        />
        <Button
          onPress={()=> router.push("/syuby-alwi-akbar-attala")}
          title="Tugas Syuby"
          color="#22a2d4ff"
        />
    </View>
  );
}