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

        <View style={{marginTop: 10}}>
          <Button
            onPress={()=> router.push("/Rheza")}
            title="Rheza"
            color="#6C63FF"
          />
        </View>

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