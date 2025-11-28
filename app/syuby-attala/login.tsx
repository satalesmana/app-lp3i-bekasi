import { router } from "expo-router";
import { useState } from "react";
import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from 'react-redux';
import { supabase } from '../../lib/supabase';
import { setUsers } from '../../store/reducer/userSlice';


export default function LoginScreen(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onSubmitLogin = async ()=>{
        const { error, data } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password: password,
        })

        if (error){
            Alert.alert(error.message)
            return;
        } 
        
        dispatch(setUsers({
            email: data.user?.email,
        }))

        router.replace("/syuby-attala/(main)")
    }

    return(
        <View style={{paddingTop:40}}>
            <View style={style.imageContainer}>
                <Image 
                source={require('@/assets/images/logo-app.png')} />
            </View>
            <View style={[style.container, style.containerHeroText]}>
                <Text style={style.welcomeText}>Welcome back!</Text>
                <Text style={style.subText}>Login to your account</Text>
            </View>

            <View style={style.container}>
                 <TextInput
                    style={style.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email" />

                <TextInput
                    style={style.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"/>

                <Pressable 
                    onPress={onSubmitLogin}
                    style={[style.btnLogin, {marginTop:20}]}>
                    <Text style={{color:'white'}}>Login</Text>
                </Pressable>
            </View>

            <Text style={style.forgotPassword}>Forgot Password ?</Text>

            <View style={style.imageLoginContainer}>
                 <Image style={style.imageLoagin} source={require('@/assets/images/logo-app.png')} />
                 <Image style={style.imageLoagin} source={require('@/assets/images/logo-app.png')} />
                 <Image style={style.imageLoagin} source={require('@/assets/images/logo-app.png')} />
            </View>

            <Text style={{marginTop:20, textAlign:'center'}}>Don’t have an account ?</Text>
            <Button title="Register" onPress={()=> router.push('./syuby-attala/register')} />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginLeft: 20, 
        marginRight: 20
    },
    containerHeroText:{
        marginTop: 40
    },
    imageContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    welcomeText:{
        fontSize: 24,
        fontWeight: '800'
    },
    subText:{
        fontSize: 13,
    },
    input:{
        height: 57,
        paddingLeft:12,
        borderWidth: 1,
        marginTop: 12,
        borderRadius:10,
    },
    btnLogin:{
        backgroundColor:'#0D2063',
        borderRadius:8,
        height: 37,
        display: 'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    forgotPassword:{
        textAlign:'center',
        marginTop: 40,
        marginBottom: 20
    },
    imageLoginContainer:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        justifyContent:'center'
    },
    imageLoagin:{
        width:35,
        height: 35
    }
})