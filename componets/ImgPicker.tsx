import { uploadImage } from '@/lib/supabase';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface Props {
    label?: string
}

export const ImmagePicker =(props:Props)=>{
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library.
        // Manually request permissions for videos on iOS when `allowsEditing` is set to `false`
        // and `videoExportPreset` is `'Passthrough'` (the default), ideally before launching the picker
        // so the app users aren't surprised by a system dialog after picking a video.
        // See "Invoke permissions for videos" sub section for more details.
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert('Permission required', 'Permission to access the media library is required.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.canceled) {
            const res = await uploadImage(
                result.assets[0].base64 as string, 
                result.assets[0].fileName as string
            )
            
            if(res?.fullPath)
                setImageUrl(`https://isibdtuopxlgxxkldvhy.supabase.co/storage/v1/object/public/${res?.fullPath}`)
        }
    };

    return(
        <View>
            <TouchableOpacity style={styles.btnSecondary} onPress={pickImage}>
                <Text style={styles.btnLabel}>{props.label}</Text>
            </TouchableOpacity>
            {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLabel:{
        color:'#FCFCFC',
        fontSize:20
    },
    btnSecondary:{
        marginTop:10,
        backgroundColor:'#36079bff',
        height: 50,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap: 15
    },
  image: {
    width: 200,
    height: 200,
  },
});