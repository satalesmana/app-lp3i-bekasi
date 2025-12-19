import { ImmagePicker } from "@/componets/ImgPicker";
import { ButtonPrimary } from "@/componets/myButton";
import { Session } from '@supabase/supabase-js';
import { router } from "expo-router";
import { useEffect, useState } from "react";
// Import Image buat preview dan ScrollView biar aman bray
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, ScrollView, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from '../../../../lib/supabase';
import { addNewPost, setImage, setPost } from "../../../../store/reducer/newPostSlice";

export default function PostFormPage() {
    const [session, setSession] = useState<Session | null>(null);
    const dispatch = useDispatch();
    
    const formInput = useSelector((state: any) => state.post.formInput);
    
    useEffect(() => {
        getSession();
    }, []);

    const onSave = async () => {
        // Validasi simpel bray
        if (!formInput.post || formInput.post.trim() === "") {
            Alert.alert("Eits!", "Isi dulu pesannya bray.");
            return;
        }
        const userEmail = session?.user?.email;
        const nameArray = userEmail?.split('@') || ['guest'];
        const userName = nameArray[0];
        const finalData = {
            post: formInput.post,
            img: formInput.img,
            created_by: {
                email: userEmail,
                name: userName
            },
            created_at: new Date().toISOString()
        };

        console.log('🚀 Gas simpan data =>', finalData);

        try {
            // 3. Kirim data yang udah rapi
            await dispatch(addNewPost(finalData as any) as any);
            
            // 4. Reset state biar form bersih pas balik lagi
            dispatch(setPost(""));
            dispatch(setImage(null));
            
            Alert.alert("Sukses", "Postingan lu udah naik bray!");
            router.back();
        } catch (error) {
            console.error("Gagal save bray:", error);
            Alert.alert("Error", "Gagal simpan data.");
        }
    };

    const onSuccesupload = (val: string) => {
        console.log('✅ Link gambar dari Supabase =>', val);
        dispatch(setImage(val)); // Simpan ke Redux buat preview
    };

    const getSession = () => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    };

    return (
        <SafeAreaView style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={style.headerText}>Post Message</Text>
                
                <TextInput 
                    value={formInput.post}
                    onChangeText={(val) => dispatch(setPost(val))}
                    placeholder="Apa yang lu pikirin bray?"
                    style={style.textInput}
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={200}
                />
                
                <View style={{ marginVertical: 15 }}>
                    <ImmagePicker
                        onSuccesUpload={(val) => onSuccesupload(val)}
                        label="Select Image" 
                    />
                </View>

                {/* PREVIEW GAMBAR (Solusi Gambar Gak Nampil) */}
                {formInput.img && formInput.img !== "" ? (
                    <View style={style.previewWrapper}>
                        <Image 
                            source={{ uri: formInput.img }} 
                            style={style.previewImage}
                            resizeMode="cover"
                        />
                        <Text style={style.previewText}>Preview Gambar Lo 🔥</Text>
                    </View>
                ) : null}

                <ButtonPrimary onPress={onSave} label="Save data" />
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    textInput: {
        padding: 15,
        marginTop: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        height: 150,
        textAlignVertical: 'top',
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16
    },
    previewWrapper: {
        width: '100%',
        marginBottom: 20,
        alignItems: 'center'
    },
    previewImage: {
        width: '100%',
        height: 200, // Wajib ada tinggi bray biar nampil
        borderRadius: 10,
        backgroundColor: '#f0f0f0'
    },
    previewText: {
        fontSize: 12,
        color: '#666',
        marginTop: 5,
        fontStyle: 'italic'
    }
});