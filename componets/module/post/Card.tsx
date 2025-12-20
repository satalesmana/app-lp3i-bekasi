import { Pressable, Text, View, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PostCardProps {
  item: {
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
  };
  onPress?: () => void;
}

export default function PostCard({ item, onPress }: PostCardProps) {
  const hasImage = item.img && item.img.startsWith("http");

  const timeAgo = (dateString: string) => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffMs = now.getTime() - postDate.getTime();
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}h`;
    if (hours > 0) return `${hours}j`;
    if (minutes > 0) return `${minutes}m`;
    return `baru saja`;
  };

  // Nama pendek dari email
  const fullName = item.created_by?.email?.split('@')[0] ?? "Anonymous";
  const firstPart = fullName.split('.')[0]; // ambil kata pertama
  const displayName = firstPart.length > 5 ? firstPart.slice(0,5) : firstPart; // maksimal 6 huruf
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.row}>
        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Header: Nama | Email · Waktu */}
          <View style={styles.header}>
            <Text style={styles.name}>{displayName}</Text>
            {item.created_by?.email && (
              <Text style={styles.email}> | {item.created_by.email}</Text>
            )}
            <Text style={styles.date}> · {timeAgo(item.created_at)}</Text>
          </View>

          <Text style={styles.post}>{item.post}</Text>

          {hasImage && (
            <Image
              source={{ uri: item.img! }}
              style={styles.image}
              resizeMode="cover"
            />
          )}

          {/* Action Icons */}
          <View style={styles.actions}>
            <View style={styles.actionItem}>
              <Ionicons name="chatbubble-outline" size={18} color="#657786" />
              <Text style={styles.actionText}>{item.comments_count ?? 0}</Text>
            </View>

            <View style={styles.actionItem}>
              <Ionicons name="repeat-outline" size={18} color="#657786" />
              <Text style={styles.actionText}>{item.retweet_count ?? 0}</Text>
            </View>

            <View style={styles.actionItem}>
              <Ionicons name="heart-outline" size={18} color="#657786" />
              <Text style={styles.actionText}>{item.likes_count ?? 0}</Text>
            </View>

            <View style={styles.actionItem}>
              <Ionicons name="share-outline" size={18} color="#657786" />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E6ECF0",
  },
  row: {
    flexDirection: "row",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    fontSize: 12,
    color: "#657786",
    marginLeft: 4,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    flexWrap: "wrap"
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#14171A",
  },
  email: {
    fontSize: 12,
    color: "#657786",
  },
  date: {
    fontSize: 12,
    color: "#657786",
  },
  post: {
    fontSize: 15,
    color: "#14171A",
    lineHeight: 20,
    marginTop: 2,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginTop: 8,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingRight: 30,
  },
});
