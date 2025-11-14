import dayjs from "dayjs";
import { Text, View } from "react-native";

export const MessageItem = ({ item, session}:any) => {
        const isMe = item.user_id === session;
        return (
            <View
                style={{
                    alignSelf: isMe ? "flex-end" : "flex-start",
                    backgroundColor: isMe ? "#DCF8C6" : "#ECECEC",
                    marginVertical: 4,
                    padding: 10,
                    margin: 10,
                    borderRadius: 12,
                    maxWidth: "75%",
                }}
            >
                <Text style={{fontSize:14}}>{item.email}</Text>
                <Text style={{fontSize:16}}>{item.message}</Text>
                <Text style={{
                    fontSize: 10,
                    color: '#737373', // neutral-500
                    marginTop: 4,     // mt-1 → 1 * 4 = 4
                    textAlign: 'right',
                    }}>
                    {dayjs(item.created_at).format("HH:mm")}
                </Text>
            </View>
        );
    };