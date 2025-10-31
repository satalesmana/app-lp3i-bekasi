import { MessageItem } from "@/componets/module/message/CardMessage";
import { useState } from "react";
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput,
  View
} from "react-native";

const messages=[
  {id:1, user_id:1, email:"tes@mail.com", message:"hello tes", created_at:new Date()},
  {id:2, user_id:3, email:"tesaja@mail.com", message:"hello tes", created_at:new Date()},
  {id:3, user_id:1, email:"bebas@mail.com", message:"hello tes",  created_at:new Date()},
]

export default function MainScreen() {
  const [input,setInput] = useState("");
  const sendMessage=()=>{}
  
  return (
     <KeyboardAvoidingView
        style={{display:"flex", flex:1}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 24}>
            <SafeAreaView style={{ flex: 1, padding: 16 }}>
                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id.toString()}
                    inverted
                    renderItem={({item}) => <MessageItem item={item} />}
                    contentContainerStyle={{ paddingVertical: 10 }}
                />

            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderTopWidth: 1,
              borderTopColor: '#e5e5e5',
              paddingVertical: 8
            }}>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    placeholder="Type a message..."
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      borderColor: '#d4d4d4', // neutral-300
                      borderRadius: 16,       // rounded-2xl
                      paddingHorizontal: 12,  // px-3 → 3 * 4 = 12
                      paddingVertical: 8,     // py-2 → 2 * 4 = 8
                      marginRight: 8,         // mr-2 → 2 * 4 = 8
                    }}
                />
                <Button title="Send" onPress={sendMessage} />
            </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
  );
}