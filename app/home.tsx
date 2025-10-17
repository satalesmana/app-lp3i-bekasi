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
          color="#841584"/>

        <Text>ini halaman home</Text>
        <Button
          onPress={()=> router.push("/muhamad-tohir")}
          title="halaman tohir"
          color="#841584"
        />
        
        <Button
          onPress={()=> router.push("/zakky-mufra")}
          title="Learn More"
          />

        <Button
          onPress={()=> router.push("/dayat")}
          title="halaman dayat"
        />
        
        <Button
          onPress={()=> router.push("/Hafiizh")}
          title="Hafiizh"
        />
        
        <Button
          onPress={()=> router.push("/Rheza")}
          title="Rheza"
        />
        
        <Button
          onPress={()=> router.push("/gema_satya_nugroho")}
          title="Halaman Gema"
          color="#841584"
        />
        <Button
          onPress={()=> router.push("/fatimah-azzahra")}
          title="Fatimah"
          color="#841584"
        />
        

        <Button
          onPress={()=> router.push("/ade")}
          title="Halaman Ade"
          color="#841584F"
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