import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router"; // 1. Tambahkan import router
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"; // 2. Tambahkan Image ke import

interface PostCardProps {
  id: string;
  content: string;
  image?: string;
  createdAt: string;
  user: {
    email?: string;
    name?: string;
    avatar_url?: string;
  };
}

export default function PostCard({
  id,
  content,
  image,
  createdAt,
  user,
}: PostCardProps) {
  const displayName =
    user?.name || (user?.email ? user.email.split("@")[0] : "Anonymous");

  const displayHandle = user?.email ? user.email.split("@")[0] : "user";

  const handlePress = () => {
    router.push({
      pathname: "/gemasn/(main)/(post)/detail",
      params: {
        id,
        content,
        email: user?.email,
        name: displayName,
        createdAt,
        image: image,
      },
    });
  };

  const getTime = (dateString: string) => {
    if (!dateString) return "now";
    const date = new Date(dateString);
    return `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={styles.leftColumn}>
        <View style={styles.initialAvatar}>
          <Text style={styles.initialText}>
            {user?.email ? user.email.charAt(0).toUpperCase() : "A"}
          </Text>
        </View>
      </View>

      <View style={styles.rightColumn}>
        <View style={styles.header}>
          <Text style={styles.fullName} numberOfLines={1}>
            {displayName}
          </Text>
          <Text style={styles.handle} numberOfLines={1}>
            @{displayHandle.toLowerCase()} • {getTime(createdAt)}
          </Text>
          <TouchableOpacity style={styles.moreIcon}>
            <Ionicons name="ellipsis-horizontal" size={16} color="#657786" />
          </TouchableOpacity>
        </View>

        <Text style={styles.postText}>{content}</Text>

        {image && <Image source={{ uri: image }} style={styles.postImage} />}

        <View style={styles.footer}>
          <TouchableOpacity style={styles.interactionButton}>
            <Ionicons name="chatbubble-outline" size={18} color="#657786" />
            <Text style={styles.interactionText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>
            <Ionicons name="repeat-outline" size={20} color="#657786" />
            <Text style={styles.interactionText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>
            <Ionicons name="heart-outline" size={18} color="#657786" />
            <Text style={styles.interactionText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>
            <Ionicons name="share-outline" size={18} color="#657786" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderBottomColor: "#EFF3F4",
  },
  leftColumn: {
    marginRight: 12,
  },
  initialAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
  },
  initialText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  rightColumn: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 4,
    color: "#000",
    maxWidth: "50%",
  },
  handle: {
    fontSize: 14,
    color: "#657786",
    flex: 1,
  },
  moreIcon: {
    paddingHorizontal: 4,
  },
  postText: {
    fontSize: 15,
    lineHeight: 20,
    color: "#0f1419",
    marginTop: 2,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginTop: 10,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#EFF3F4",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingRight: 40,
  },
  interactionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  interactionText: {
    fontSize: 13,
    color: "#657786",
    marginLeft: 4,
  },
});
