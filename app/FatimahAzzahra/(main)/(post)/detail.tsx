import { useLocalSearchParams } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const avatarColors = ["#6b5eff", "#ff7eb8", "#00b894", "#fdcb6e"];

export default function PostDetailPage() {
  const params = useLocalSearchParams();

  let item: any = null;
  try {
    if (params.post && typeof params.post === "string") {
      item = JSON.parse(params.post);
    }
  } catch {}

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Post tidak ditemukan</Text>
      </View>
    );
  }

  const createdAt = new Date(item.created_at);
  const timeText = `${createdAt
    .getHours()
    .toString()
    .padStart(2, "0")}:${createdAt
    .getMinutes()
    .toString()
    .padStart(2, "0")} · ${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;

  const email = item.created_by?.email ?? "user@mail.com";
  const name = email.split("@")[0];
  const initial = name.charAt(0).toUpperCase();
  const avatarBg = avatarColors[name.length % avatarColors.length];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* CONTENT */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 90 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={[styles.avatar, { backgroundColor: avatarBg }]}>
            <Text style={styles.avatarText}>{initial}</Text>
          </View>
          <Text style={styles.name}>{name}</Text>
        </View>

        {/* Post */}
        <Text style={styles.post}>{item.post}</Text>

        {item.img && <Image source={{ uri: item.img }} style={styles.image} />}

        {/* Time */}
        <Text style={styles.time}>{timeText}</Text>

        <View style={styles.divider} />

        {/* Stats */}
        <View style={styles.stats}>
          <Text style={styles.statText}>
            <Text style={styles.statBold}>5</Text> Retweets
          </Text>
          <Text style={styles.statText}>
            <Text style={styles.statBold}>34</Text> Likes
          </Text>
        </View>

        <View style={styles.divider} />

        {/* Actions */}
        <View style={styles.actions}>
          <Ionicons name="chatbubble-outline" size={22} color="#555" />
          <Ionicons name="repeat-outline" size={22} color="#555" />
          <Ionicons name="heart-outline" size={22} color="#555" />
          <Ionicons name="download-outline" size={22} color="#555" />
        </View>

        <View style={styles.divider} />

        {/* Comments */}
        <Comment name="andi" text="Postingannya menarik banget 👍" />
        <Comment name="salsa" text="Setuju, informatif dan jelas" />
        <Comment name="rizky" text="Keren, ditunggu update selanjutnya" />
      </ScrollView>

      <View style={styles.commentInputContainer}>
        <View style={[styles.avatarSmall, { backgroundColor: avatarBg }]}>
          <Text style={styles.avatarTextSmall}>{initial}</Text>
        </View>
        <TextInput
          placeholder="Tulis komentar..."
          style={styles.commentInput}
          placeholderTextColor="#999"
        />
        <Ionicons name="send" size={20} color="#1d9bf0" />
      </View>
    </KeyboardAvoidingView>
  );
}

function Comment({ name, text }: { name: string; text: string }) {
  const bg = avatarColors[name.length % avatarColors.length];
  const initial = name.charAt(0).toUpperCase();

  return (
    <View style={styles.commentRow}>
      <View style={[styles.avatarSmall, { backgroundColor: bg }]}>
        <Text style={styles.avatarTextSmall}>{initial}</Text>
      </View>
      <View style={styles.commentBody}>
        <Text style={styles.commentName}>{name}</Text>
        <Text style={styles.commentText}>{text}</Text>
      </View>
    </View>
  );
}

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },

  post: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
    color: "#222",
  },
  image: {
    width: "100%",
    height: 260,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: "#f2f2f2",
  },
  time: {
    fontSize: 12,
    color: "#777",
    marginBottom: 8,
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },

  stats: {
    flexDirection: "row",
    gap: 20,
  },
  statText: {
    fontSize: 13,
    color: "#555",
  },
  statBold: {
    fontWeight: "700",
    color: "#000",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 6,
  },

  commentRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  commentBody: {
    marginLeft: 8,
    flex: 1,
  },
  commentName: {
    fontWeight: "700",
    fontSize: 13,
  },
  commentText: {
    fontSize: 13,
    color: "#333",
  },

  avatarSmall: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarTextSmall: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  /* Sticky input */
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  commentInput: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    fontSize: 13,
  },
});
