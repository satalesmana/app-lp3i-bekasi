import { ButtonPrimary, ButtonSecondary } from "@/componets/myButton";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/reducer/counterSlice';


export default function homeScreen() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={{padding: 15}}>
        <Text>ini halaman home</Text>
        <Button
          onPress={()=> router.push("/sata-lesmana")}
          title="Learn More"
          color="#841584"
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