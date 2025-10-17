import { ButtonPrimary, ButtonSecondary } from '@/componets/myButton';
import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/reducer/counterSlice';

export default function homeScreen() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
