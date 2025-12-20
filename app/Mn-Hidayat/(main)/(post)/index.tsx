import PostCard from "@/componets/module/post/Card";
import { FloatingButton } from "@/componets/myButton";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../../../../lib/supabase";

export default function PostPage() {
  const [data, setData] = useState<any[]>([]);
  const dispatch = useDispatch();
  const needRefresh = useSelector((state: any) => state.post.needRefresh);

  // 🔄 Panggil data saat halaman difokuskan pertama kali
  useFocusEffect(
    useCallback(() => {
      getPosts();
    }, [])
  );

  // 🔁 Kalau ada perubahan dari form (needRefresh = true)
  useEffect(() => {
    const subscription = supabase
      .channel("public:new_post")
      .on("postgres_changes", { event: "*", schema: "public", table: "new_post" }, () => {
        getPosts();
      })
      .subscribe();
  
    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);  

  const getPosts = async () => {
    const { data, error } = await supabase
      .from("new_post")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setData(data || []);
    }
  };

  const onAddNewPost = () => {
    router.push("/Mn-Hidayat/(main)/(post)/form");
  };

  const onOpenDetail = (item: any) => {
    router.push({
      pathname: `/Mn-Hidayat/(main)/(post)/${item.id}`,
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Post</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard item={item} onPress={() => onOpenDetail(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <FloatingButton onPress={onAddNewPost} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc",
  },
  headerTitle: { fontSize: 20, fontWeight: "700" },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#e5e5e5",
    marginLeft: 70,
  },
});
