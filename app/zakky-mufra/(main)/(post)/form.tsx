import { ImmagePicker } from "@/componets/ImgPicker";
import { ButtonPrimary } from "@/componets/myButton";
import { Session } from "@supabase/supabase-js";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../../../../lib/supabase";
import {
  addNewPost,
  setCreatedBy,
  setImage,
  setPost,
  setNeedRefresh,
} from "../../../../store/reducer/newPostSlice";

export default function PostCreatePage() {
  const [session, setSession] = useState<Session | null>(null);
  const dispatch = useDispatch();
  const formInput = useSelector((state: any) => state.post.formInput);

  // ✅ FIX LOOP
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const onSave = async () => {
    const name = session?.user.email?.split("@") || ["guest"];

    dispatch(
      setCreatedBy({
        email: session?.user.email,
        name: name[0],
      })
    );

    await dispatch(addNewPost(formInput) as any);

    dispatch(setPost(""));
    dispatch(setImage(""));
    dispatch(setNeedRefresh()); // 🔥 trigger list refresh

    router.back(); // balik ke /post
  };

  return (
    <SafeAreaView style={style.container}>
      <Text>Post Message</Text>

      <TextInput
        value={formInput.post}
        onChangeText={(val) => dispatch(setPost(val))}
        style={style.textInput}
        multiline
        numberOfLines={4}
        maxLength={200}
      />

      <ImmagePicker
        onSuccesUpload={(val) => dispatch(setImage(val))}
        label="Select Image"
      />

      <ButtonPrimary onPress={onSave} label="Save data" />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    margin: 10,
  },
  textInput: {
    padding: 10,
    marginTop: 15,
    borderColor: "#000",
    borderWidth: 1,
    height: 200,
    textAlignVertical: "top",
    borderRadius: 5,
  },
});
