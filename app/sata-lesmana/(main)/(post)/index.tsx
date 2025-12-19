import PostCard from '@/componets/module/post/Card';
import { FloatingButton } from "@/componets/myButton";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
export default function PostPage() {
    const [data, setData] = useState([])

    const onAddNewPost=()=>{
        router.push('/sata-lesmana/(main)/(post)/form')
    }
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                inverted
                renderItem={({item}) =><PostCard/> }
                contentContainerStyle={{ paddingVertical: 10 }} />
            <FloatingButton onPress={onAddNewPost}/>
        </SafeAreaView>
    )
}