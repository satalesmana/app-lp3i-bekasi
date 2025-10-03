import { ButtonPrimary, ButtonSecondary } from "@/componets/myButton";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function homeScreen() {
  return (
    <View style={{padding: 15}}>
        <Text>ini halaman home</Text>
        <Button
          onPress={()=> router.push("/sata-lesmana")}
          title="Learn More"
          color="#841584"
        />
         
        <Button
          onPress={()=> router.push("/salsabila-nurul")}
          title="Halaman Salsabila"
          color="#007bff"
          />

        <ButtonPrimary
          label="Next"
          onPress={()=>{}}
          />

        <ButtonSecondary
          label="Selanjutnya"
          onPress={()=>{}}
          />
    </View>
  );
}