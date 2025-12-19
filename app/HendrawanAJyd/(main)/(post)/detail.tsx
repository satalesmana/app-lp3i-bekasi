import PostCard from "@/componets/module/post/Card";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

export default function PostDetailPage() {
  const params: any = useLocalSearchParams();

  const createdAt = params.created_at
    ? new Date(params.created_at)
    : new Date();

  const item = {
    post: params.caption,
    img: params.image,
    created_at: createdAt,
    created_by: {
      name: params.name || "Guest",
      email: params.email || "-",
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* CARD POST */}
        <PostCard item={item} />

        {/* PEMBATAS ALA TWITTER */}
        <View style={styles.divider} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 12,
  },

  divider: {
    height: 8,
    backgroundColor: "#f2f2f2",
    marginTop: 20,
  },
});