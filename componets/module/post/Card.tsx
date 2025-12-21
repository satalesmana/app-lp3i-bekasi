import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function PostCard({ item, onPress, isDetail = false }: any) {

  // waktu relatif (1h, 5m)
  const timeAgo = (date: string | Date) => {
    const now = new Date();
    const past = new Date(date);
    const diff = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (diff < 60) return `${diff}s`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    return `${Math.floor(diff / 86400)}d`;
  };

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.row}>
        {/* AVATAR */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {item.created_by?.name?.charAt(0).toUpperCase()}
          </Text>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.name}>
              {item.created_by?.name || "Guest"}
            </Text>
            <Text style={styles.email}>
              @{item.created_by?.email?.split("@")[0]}
            </Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.time}>
              {timeAgo(item.created_at)}
            </Text>
          </View>

          {/* CAPTION */}
          <Text style={[styles.caption, isDetail && styles.detailCaption]}>
            {item.post}
          </Text>

          {/* IMAGE */}
          {item.img && (
            <Image source={{ uri: item.img }} style={styles.image} />
          )}

          {/* FOOTER ICON */}
          <View style={styles.footer}>
            <TouchableOpacity style={styles.iconBtn}>
              <MaterialIcons name="chat-bubble-outline" size={18} color="#536471" />
              <Text style={styles.iconText}>46</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn}>
              <MaterialIcons name="repeat" size={18} color="#536471" />
              <Text style={styles.iconText}>18</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn}>
              <MaterialIcons name="favorite-border" size={18} color="#536471" />
              <Text style={styles.iconText}>363</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <MaterialIcons name="share" size={18} color="#536471" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#e6ecf0",
  },

  row: {
    flexDirection: "row",
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#1D9BF0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  content: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  name: {
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 4,
  },

  email: {
    fontSize: 13,
    color: "#536471",
  },

  dot: {
    marginHorizontal: 4,
    color: "#536471",
  },

  time: {
    fontSize: 13,
    color: "#536471",
  },

  caption: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },

  detailCaption: {
    fontSize: 18,
    lineHeight: 26,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 14,
    marginTop: 10,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingRight: 30,
  },

  iconBtn: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconText: {
    fontSize: 12,
    color: "#536471",
    marginLeft: 4,
  },
});