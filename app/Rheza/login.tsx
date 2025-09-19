import { View, Image, StyleSheet } from 'react-native';

export default function Login() {
    return (
        <View style={style.imageLogin}>
            <Image
            source={require('@/assets/images/logoLogin.png')} />
        </View>
    )
}

const style = StyleSheet.create({
    imageLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    }
})