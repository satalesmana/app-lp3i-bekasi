import { useLocalSearchParams } from 'expo-router';
import { useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from 'react-redux';

export default function RhezaIndex() {
 const user = useSelector((state:any) => state.user.user)
 const [example, setExample] = useState();
 const params = useLocalSearchParams();
 
  return (
    <View>
        <View style={{display:"flex", flexDirection:"row"}}>
            <Text style={{flex:1}}>Nama</Text>
            <Text>{user.name}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text style={{flex:1}}>Email</Text>
            <Text>{user.email}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text style={{flex:1}}>Gender</Text>
            <Text>{user.gender}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text style={{flex:1}}>Alamat</Text>
            <Text>{user.address}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text style={{flex:1}}>use state</Text>
            <Text>{example}</Text>
        </View>

        <View style={{display:"flex", flexDirection:"row"}}>
            <Text style={{flex:1}}>value from params</Text>
            <Text>{params.example}</Text>
        </View>

    </View>
  );
}