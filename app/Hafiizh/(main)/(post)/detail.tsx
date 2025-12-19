import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function PostDetail() {
  const params = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Tweet</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {params.email?.toString().charAt(0).toUpperCase()}
            </Text>
          </View>
          <View>
            <Text style={styles.name}>{params.name}</Text>
            <Text style={styles.handle}>
              @{params.email?.toString().split("@")[0]}
            </Text>
          </View>
        </View>

        <Text style={styles.postBody}>{params.content}</Text>

        {params.image && (
          <Image
            source={{ uri: params.image as string }}
            style={styles.fullImage}
          />
        )}

        <Text style={styles.timestamp}>{params.createdAt}</Text>

        <View style={styles.stats}>
          <Text style={styles.statText}>
            <Text style={styles.bold}>0</Text> Retweets
          </Text>
          <Text style={styles.statText}>
            <Text style={styles.bold}>0</Text> Likes
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },
  navTitle: { fontSize: 18, fontWeight: "bold", marginLeft: 20 },
  content: { padding: 15 },
  userInfo: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: { color: "white", fontWeight: "bold", fontSize: 18 },
  name: { fontWeight: "bold", fontSize: 16 },
  handle: { color: "#657786" },
  postBody: { fontSize: 20, lineHeight: 28, marginVertical: 10, color: "#000" },

  fullImage: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginVertical: 15,
    resizeMode: "cover",
  },

  timestamp: {
    color: "#657786",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },
  stats: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },
  statText: { marginRight: 20, color: "#657786" },
  bold: { fontWeight: "bold", color: "black" },
});