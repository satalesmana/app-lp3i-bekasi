import { MessageItem } from "@/componets/module/message/CardMessage";
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from '../../../lib/supabase';
import { fetchMesage, postMesage } from "../../../store/reducer/messageSlice";


export default function MainScreen() {
  const dispatch = useDispatch();
  const messageStore = useSelector((state) => state.message);

  const [input,setInput] = useState("");
  const [session, setSession] = useState<Session | null>(null)
  const [userId, setUserId]= useState<any>(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    if(session && session.user){
      setUserId(session.user.id)
    }

    onLoadData()
  }, [])

  
  const onLoadData=async()=>{
    await dispatch(fetchMesage() as any)
  }

  const sendMessage=async()=>{
    try{
      if (!session || !session.user || !userId) return;
      const payload= {userId, message:input, email: session.user.email}
      await dispatch(postMesage(payload as any) as any)
      await onLoadData()
      setInput("")
    }catch(err){
      console.log(err)
    }
   
  }
  
  return (
     <KeyboardAvoidingView
        style={{flex:1}}
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}>
            <SafeAreaView style={{ flex: 1 }}>
              <FlatList
                  data={messageStore.message}
                  keyExtractor={(item) => item.id.toString()}
                  inverted
                  renderItem={({item}) => <MessageItem item={item} session={userId}/>}
                  contentContainerStyle={{ paddingVertical: 10 }}
              />

              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderTopWidth: 1,
                backgroundColor: '#fff',
                borderTopColor: '#e5e5e5',
                padding: 8
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