import { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { router, useFocusEffect } from "expo-router";
import { supabase } from "@/lib/supabase";
import PostCard from "@/componets/module/post/Card";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Post {
  id: string;
  post: string;
  img: string | null;
  created_at: string;
  created_by: {
    email: string;
    name?: string;
  };
}

export default function PostPage() {
  const [data, setData] = useState<Post[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUserEmail(data.session?.user.email ?? "");
    });
  }, []);

  const fetchPost = async () => {
    setRefreshing(true);

    const { data, error } = await supabase
      .from("new_post")
      .select("id, post, img, created_at, created_by")
      .order("created_at", { ascending: false });

    if (error) {
      console.log("Gagal tarik data:", error);
    } else {
      setData(data as Post[]);
    }

    setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchPost();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {userEmail.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={styles.headerEmail}>{userEmail}</Text>
      </View>

      {/* LIST POST */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchPost} />
        }
        renderItem={({ item }) => <PostCard item={item} />}
        ListEmptyComponent={
          <Text style={styles.empty}>Belum ada postingan</Text>
        }
      />

      {/* FLOATING ADD BUTTON */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("./form")}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#5c4dfc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  headerEmail: {
    fontSize: 14,
    fontWeight: "600",
  },

  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "gray",
  },

  /* FAB STYLE */
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#5c4dfc",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
