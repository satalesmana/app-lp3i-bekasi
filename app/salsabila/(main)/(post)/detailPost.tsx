import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, SafeAreaView, Pressable, TextInput, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Post {
  id: string;
  post: string;
  img: string | null;
  created_by: {
    name: string;
    email: string;
  } | null;
  created_at: string;
  comments_count?: number;
  retweet_count?: number;
  likes_count?: number;
}

interface Comment {
  id: string;
  name: string;
  email: string;
  text: string;
  replies?: Comment[];
}

export default function DetailPost() {
  const params = useLocalSearchParams();
  const post: Post | null = params.postData
    ? JSON.parse(params.postData as string)
    : null;

  if (!post) {
    return (
      <SafeAreaView style={styles.center}>
        <Text>Data tidak ditemukan</Text>
      </SafeAreaView>
    );
  }

  // Ambil nama pendek dari email
  const fullName = post.created_by?.email?.split('@')[0] ?? "Anonymous";
  const firstPart = fullName.split('.')[0];
  const displayName = firstPart.length > 5 ? firstPart.substring(0,5) : firstPart;
  const initial = displayName.charAt(0).toUpperCase();

  // contoh komentar
  const comments: Comment[] = [
    {
      id: '1',
      name: 'Rizki',
      email: 'rizkiaditia@gmail.com',
      text: 'Keren banget postingannya!',
      replies: [
        {
          id: '1-1',
          name: 'Maya',
          email: 'mayaaaaa021@gmail.com',
          text: 'Setuju sama Rizki!',
        }
      ]
    },
    {
      id: '2',
      name: 'Andi',
      email: 'andigibran_20@gmail.com',
      text: 'Wow, menarik!',
      replies: []
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <Pressable onPress={() => router.back()} style={styles.side}>
          <Ionicons name="chevron-back" size={24} color="#14171A" />
        </Pressable>
        <Text style={styles.headerTitle}>Tweet</Text>
        <View style={styles.side} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* USER */}
        <View style={styles.userRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initial}</Text>
          </View>
          <View>
            <Text style={styles.name}>{displayName}</Text>
            <Text style={styles.email}>{post.created_by?.email ?? ""}</Text>
          </View>
        </View>

        {/* POST CONTENT */}
        <Text style={styles.postText}>{post.post}</Text>
        {post.img && <Image source={{ uri: post.img }} style={styles.image} />}

        {/* METADATA */}
        <Text style={[styles.date, { marginTop: 4 }]}>
          {new Date(post.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ·{" "}
          {new Date(post.created_at).toLocaleDateString()} ·{" "}
          <Text style={{ color:"#1DA1F2" }}>Twitter Web App</Text>
        </Text>

        <View style={styles.divider} />

        {/* STATS */}
        <View style={{ flexDirection: "row", paddingHorizontal: 0, marginBottom: 4 }}>
          <Text style={{ fontWeight: "bold", marginRight: 20 }}>
            {post.retweet_count ?? 0} Retweets
          </Text>
          <Text style={{ fontWeight: "bold" }}>{post.likes_count ?? 0} Likes</Text>
        </View>

        <View style={styles.divider} />

        {/* ACTION ICONS */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16, marginTop: 1 }}>
          <Ionicons name="chatbubble-outline" size={22} color="#657786" />
          <Ionicons name="repeat-outline" size={22} color="#657786" />
          <Ionicons name="heart-outline" size={22} color="#657786" />
          <Ionicons name="download-outline" size={22} color="#657786" />
        </View>

        <View style={styles.divider} />

        {/* COMMENTS */}
        <Text style={{ fontWeight: "bold", paddingHorizontal: 16, marginBottom: 8, marginTop: 12 }}>
          Comments
        </Text>

        {comments.map(c => (
          <View key={c.id} style={{ flexDirection: "row", paddingHorizontal: 16, marginBottom: 12 }}>
            <View style={{ width: 40, alignItems: "center" }}>
              <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: "#657786", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>{c.name.charAt(0)}</Text>
              </View>
              {c.replies && c.replies.length > 0 && (
                <View style={{ width: 2, backgroundColor: "#E6ECF0", flex: 1, marginTop: 4 }} />
              )}
            </View>

            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>{c.name}</Text>
              <Text style={{ fontSize: 12, color: "#657786", marginBottom: 4 }}>{c.email}</Text>
              <Text style={{ fontSize: 14, marginBottom: 4 }}>{c.text}</Text>

              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingRight: 60, marginBottom: 8 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="chatbubble-outline" size={16} color="#657786" />
                  {c.replies && c.replies.length > 0 && <Text style={{ fontSize: 12, color: "#657786", marginLeft: 4 }}>{c.replies.length}</Text>}
                </View>
                <Ionicons name="repeat-outline" size={16} color="#657786" />
                <Ionicons name="heart-outline" size={16} color="#657786" />
                <Ionicons name="download-outline" size={16} color="#657786" />
              </View>

              {c.replies && c.replies.map(r => (
                <View key={r.id} style={{ flexDirection: "row", marginLeft: 20, marginBottom: 12 }}>
                  <View style={{ width: 40, alignItems: "center" }}>
                    <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: "#AAB8C2", justifyContent: "center", alignItems: "center" }}>
                      <Text style={{ color: "#fff", fontWeight: "bold" }}>{r.name.charAt(0)}</Text>
                    </View>
                  </View>
                  <View style={{ flex: 1, marginLeft: 8 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 14 }}>{r.name}</Text>
                    <Text style={{ fontSize: 12, color: "#657786", marginBottom: 2 }}>{r.email}</Text>
                    <Text style={{ fontSize: 14 }}>{r.text}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingRight: 60, marginTop: 2 }}>
                      <Ionicons name="chatbubble-outline" size={16} color="#657786" />
                      <Ionicons name="repeat-outline" size={16} color="#657786" />
                      <Ionicons name="heart-outline" size={16} color="#657786" />
                      <Ionicons name="download-outline" size={16} color="#657786" />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* COMMENT INPUT */}
      <View style={styles.commentInputContainer}>
        <View style={{ flex: 1, marginRight: 8 }}>
          <TextInput placeholder="Tweet your reply" style={styles.commentInput} />
        </View>
        <Pressable style={{ justifyContent: "center", alignItems: "center" }}>
          <Ionicons name="send" size={22} color="#1DA1F2" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 1,
    paddingTop: 60,
    paddingBottom: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 3,
    borderBottomColor: "#E6ECF0",
  },
  side: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#14171A",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#14171A",
  },
  email: {
    fontSize: 13,
    color: "#657786",
  },
  postText: {
    fontSize: 17,
    lineHeight: 24,
    color: "#14171A",
    marginTop: 16,
  },
  image: {
    width: "100%",
    height: 260,
    borderRadius: 14,
    marginTop: 16,
  },
  divider: {
    height: 0.5,
    backgroundColor: "#E6ECF0",
    marginVertical: 4,
  },
  date: {
    fontSize: 13,
    color: "#657786",
  },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderTopColor: "#E6ECF0",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  commentInput: {
    borderWidth: 0.5,
    borderColor: "#E6ECF0",
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 36,
    fontSize: 14,
  },
});
