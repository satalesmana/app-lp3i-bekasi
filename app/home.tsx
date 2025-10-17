import { ButtonPrimary, ButtonSecondary } from "@/componets/myButton";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/reducer/counterSlice';
import ButtonPurple from "./fatimah-azzahra/components/Mybutton";



export default function homeScreen() {
  const count = useSelector((state:any) => state.counter.value)
  
  const dispatch = useDispatch()

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
          label="Increment"
          onPress={() => dispatch(increment())}
          />

        <ButtonSecondary
          label="Decrement"
          onPress={() => dispatch(decrement())}
          />

        <Text>{count}</Text>
    </View>
  );
}