import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function SataLesmanaIndex() {
  return (
    <View>
        <Text>ini halaman sata</Text>
        <Button 
          title="login page"
          onPress={()=>{router.push('/sata-lesmana/login')}}/>
          
    </View>
  );
}