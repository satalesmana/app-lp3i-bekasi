import { useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from 'react-redux';

export default function HafiizhIndex() {
 const user = useSelector((state:any) => state.user.user)
  const [example] = useState("nama usestate");

  return (
    <View>
        <View style={{display:"flex", flexDirection:"row"}}>
            <Text>Nama : </Text>
            <Text>{user.name}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text>Email : </Text>
            <Text>{user.email}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text>Gender : </Text>
            <Text>{user.gender}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text>Date : </Text>
            <Text>{user.dateOfBirth}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text>Alamat : </Text>
            <Text>{user.address}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text>Use state : </Text>
            <Text>{example}</Text>
        </View>
</View>
  );
}