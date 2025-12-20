import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { getTimeAgo } from "@/utils/timeAgo";
import Ionicons from "@expo/vector-icons/Ionicons";

const colors = ["#6b5eff", "#ff7eb8", "#00b894", "#fdcb6e"];

export default function PostCard({ item }: any) {
  const router = useRouter();
  const email = item.created_by?.email ?? "user@mail.com";
  const name = email.split("@")[0];
  const initial = name.charAt(0).toUpperCase();
  const bgColor = colors[name.length % colors.length];

  // refresh setiap 1 menit agar waktu update
  const [, setTick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  const onPressCard = () => {
    router.push({
      pathname: "/FatimahAzzahra/(main)/(post)/detail",
      params: { post: JSON.stringify(item) },
    });
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPressCard}
      activeOpacity={0.8}
    >
      {/* Avatar */}
      <View style={[styles.avatar, { backgroundColor: bgColor }]}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>

      <View style={styles.content}>
        {/* Name + Time */}
        <View style={styles.row}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>· {getTimeAgo(item.created_at)}</Text>
        </View>

        {/* Post Text */}
        <Text style={styles.post} numberOfLines={3}>
          {item.post}
        </Text>

        {/* Post Image */}
        {item.img && (
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: item.img }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}

        <View style={styles.actions}>
  <Ionicons name="chatbubble-outline" size={20} color="#555" />
  <Ionicons name="repeat-outline" size={20} color="#555" />
  <Ionicons name="heart-outline" size={20} color="#ff4d6d" />
  <Ionicons name="download-outline" size={20} color="#555" />
</View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  name: {
    fontWeight: "700",
    fontSize: 14,
    marginRight: 6,
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
  post: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
    color: "#222",
  },
  imageWrapper: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
    marginTop: 6,
  },
  image: {
    width: "100%",
    height: 180,
  },
 actions: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: 10,
  paddingHorizontal: 4,
},
});
