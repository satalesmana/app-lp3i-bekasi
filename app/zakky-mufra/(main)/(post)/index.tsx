import PostCard from "@/componets/module/post/Card";
import { FloatingButton } from "@/componets/myButton";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { supabase } from "../../../../lib/supabase";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function PostPage() {
  const [data, setData] = useState<any[]>([]);

useFocusEffect(
  useCallback(() => {
    getPosts();
  }, [])
)

const getPosts = async () => {
  const { data, error } = await supabase
    .from("new_post")
    .select("*");

  console.log("POST DATA =>", data);
  console.log("POST ERROR =>", error);

  if (!error) {
    setData(data || []);
  }
};


  const onAddNewPost = () => {
    router.push("/zakky-mufra/(main)/(post)/form");
  };

const onOpenDetail = (item: any) => {
  router.push({
    pathname: `/zakky-mufra/(main)/(post)/${item.id}`,
    params: {
      caption: item.post,
      image: item.img,
      created_at: item.created_at,
      name: item.created_by?.name,
      email: item.created_by?.email,
    },
  });
};


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard item={item} onPress={() => onOpenDetail(item)} />
        )}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      <FloatingButton onPress={onAddNewPost} />
    </SafeAreaView>
  );
}