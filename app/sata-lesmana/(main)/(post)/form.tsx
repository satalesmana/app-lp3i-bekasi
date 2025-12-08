import { ButtonPrimary } from "@/componets/myButton";
import { router } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

export default function PostFormPage() {
    const onSave=()=>{
        router.back()
    }

    return(
        <SafeAreaView style={style.container}>
            <Text>Post Message</Text>
            <TextInput 
                style={style.textInput}
                editable
                multiline
                numberOfLines={4}
                maxLength={40}/>
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