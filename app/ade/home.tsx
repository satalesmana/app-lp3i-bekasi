import { ButtonPrimary } from "@/componets/myButton";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from 'react-redux';

export default function AdeIndex() {
 const user = useSelector(state => state.user.user)
  const [example, setExample] = useState("nama usestate");

  return (
    <View>
        <View style={{display:"flex", flexDirection:"row"}}>
            <Text>Nama</Text>
            <Text>{user.name}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text>Email</Text>
            <Text>{user.email}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text>Gender</Text>
            <Text>{user.gender}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text>Alamat</Text>
            <Text>{user.address}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text>use state</Text>
            <Text>{example}</Text>
        </View>

        <ButtonPrimary
            label="User Profile"
            onPress={() => router.push("/ade/profile")}
            />
        
        <ButtonPrimary
            label="User Profile wit params"
            onPress={() =>router.push({
                pathname: "/ade/profile",
                params: {
                    example: example
                }
            })}
            />
    </View>
  );
}