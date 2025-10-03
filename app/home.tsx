import { ButtonPrimary, ButtonSecondary } from "@/componets/myButton";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import ButtonPurple from "./fatimah-azzahra/components/Mybutton";

export default function homeScreen() {
  return (
    <View style={{padding: 15}}>
        <Text>ini halaman home</Text>
        <Button
          onPress={()=> router.push("/sata-lesmana")}
          title="Learn More"
          color="#841584"
        />
        
        <ButtonPurple
          label="Fatimah Azzahra"
          onPress={()=> router.push("/fatimah-azzahra")}
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