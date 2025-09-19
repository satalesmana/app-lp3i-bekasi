import {useState} from "react";
import {Alert, Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";

export default function LoginScreen(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitLogin = ()=>{
        Alert.alert('Info','Login Gagal', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }

    return(
        <View style={{paddingTop:40}}>
            <View>
                <Image 
                source={require('@/assets/images/logo.png')} />
            </View>
            <View>
                <Text>Login Details</Text>
            </View>

            <View>
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email" />

                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"/>

                <Text>Forgot Password ?</Text>

                <Pressable 
                    onPress={onSubmitLogin}>
                    <Text style={{color:'white'}}>Login</Text>
                </Pressable>
            </View>

            
            <View style={style.imageLoginContainer}>
                 <Image source={require('@/assets/images/google.png')} />
                 <Image source={require('@/assets/images/facebook.png')} />
                 <Image source={require('@/assets/images/group.png')} />
            </View>

        </View>
    )
}

