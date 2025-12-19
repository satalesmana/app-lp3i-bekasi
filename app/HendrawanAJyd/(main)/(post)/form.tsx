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
} from "../../../../store/reducer/newPostSlice";

export default function PostFormPage() {
  const [session, setSession] = useState<Session | null>(null);
  const dispatch = useDispatch();
  const formInput = useSelector((state: any) => state.post.formInput);

  useEffect(() => {
    getSession();
  }, []);

  const getSession = () => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  };
    const onSave = async () => {
    const name = session?.user.email?.split("@") || ["guest"];

    const payload = {
        post: formInput.post,
        img: formInput.img,
        created_by: {
        email: session?.user.email,
        name: name[0],
        },
    };

    await dispatch(addNewPost(payload as any) as any);

    dispatch(setPost(""));
    dispatch(setImage(""));

    router.back();
    };


  const onSuccesupload = (val: string) => {
    dispatch(setImage(val));
  };

  return (
    <SafeAreaView style={style.container}>
      <Text>Post Message</Text>

      <TextInput
        value={formInput.post}
        onChangeText={(val) => dispatch(setPost(val))}
        style={style.textInput}
        multiline
        maxLength={40}
        placeholder="Write your post..."
      />

      <ImmagePicker
        onSuccesUpload={onSuccesupload}
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