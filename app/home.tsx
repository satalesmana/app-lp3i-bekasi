import { ButtonPrimary, ButtonSecondary } from "@/componets/myButton";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/reducer/counterSlice';
import React from 'react';

export default function HomeScreen() {
  const count = useSelector(state => (state as any).counter.value)
  const dispatch = useDispatch()

  return (
    <View style={{padding: 15}}>
        <Text>ini halaman home</Text>
        <Button
          onPress={()=> router.push("/sata-lesmana")}
          title="Learn More"
          color="#841584"
        />

        <Button
          onPress={()=> router.push("/syuby-attala")}
          title="UAS Syuby"
          color="#841584"
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