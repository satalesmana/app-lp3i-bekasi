import PostCard from "@/componets/module/post/Card";
import { useLocalSearchParams } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";

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

  // FORMAT TIMESTAMP ALA TWITTER
  const timeString = createdAt.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateString = createdAt.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* CARD POST */}
        <PostCard item={item} isDetail />

        {/* TIMESTAMP */}
        <Text style={styles.timestamp}>
          {timeString} · {dateString}
        </Text>

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

  timestamp: {
    marginTop: 10,
    fontSize: 13,
    color: "#536471",
  },

  divider: {
    height: 8,
    backgroundColor: "#f2f2f2",
    marginTop: 16,
  },
});