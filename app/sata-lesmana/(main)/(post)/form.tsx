import { ImmagePicker } from "@/componets/ImgPicker";
import { ButtonPrimary } from "@/componets/myButton";
import { Session } from '@supabase/supabase-js';
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from '../../../../lib/supabase';
import { addNewPost, setCreatedBy, setImage, setPost } from "../../../../store/reducer/newPostSlice";

export default function PostFormPage() {
    const [session, setSession] = useState<Session | null>(null)
    const dispatch = useDispatch();
    const formInput = useSelector((state) => state.post.formInput);
    
    useEffect(() => {
        getSession()
    }, [session])

    const onSave=async ()=>{
        const name = session?.user.email?.split('@') || ['guest']

        dispatch(setCreatedBy({
            email: session?.user.email,
            name: name[0]
        }))
        console.log('submiting data=>', formInput)
        await dispatch(addNewPost(formInput as any) as any)
        dispatch(setPost(null))
        router.back()
    }
    const onSuccesupload=(val:string)=>{
        console.log('onSuccesupload=>',val)
        dispatch(setImage(val))
    }
    const getSession=()=>{
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })
        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        }) 
    }

    return(
        <SafeAreaView style={style.container}>
            <Text>Post Message</Text>
            <TextInput 
                value={formInput.post}
                onChangeText={(val)=> dispatch(setPost(val))}
                style={style.textInput}
                editable
                multiline
                numberOfLines={4}
                maxLength={40}/>
            <ImmagePicker
                onSuccesUpload={(val)=>onSuccesupload(val)}
                label="Select Image" />
            <ButtonPrimary onPress={onSave} label="Save data" />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        margin: 10
    },
    textInput: {
        padding: 10,
        marginTop:15,
        borderColor: '#000',
        borderWidth: 1,
        height: 200,
        textAlignVertical:'top',
        borderRadius: 5,

    }
})