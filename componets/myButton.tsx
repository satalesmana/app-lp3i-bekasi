import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"
interface Props {
    onPress: () => void,
    label: string
}

export const ButtonPrimary =(props:Props)=>{
    return(
        <TouchableOpacity style={styles.btnPrimary} onPress={props.onPress}>
          <Text style={styles.btnLabel}>{props.label}</Text>
          <Image source={require('../assets/images/chevron-right.png')} />
        </TouchableOpacity>
    )
}

export const ButtonSecondary =(props:Props)=>{
    return(
        <TouchableOpacity style={styles.btnSecondary} onPress={props.onPress}>
          <Text style={styles.btnLabel}>{props.label}</Text>
          <Image source={require('../assets/images/chevron-right.png')} />
        </TouchableOpacity>
    )
}

export const ButtonRegister = (props:Props)=>{
    return(
        <TouchableOpacity style={styles.btnRegister} onPress={props.onPress}>
            <Text style={styles.btnLabel}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnPrimary:{
        marginTop:10,
        backgroundColor:'#FF3951',
        height: 50,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap: 15
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
    btnRegister:{
        backgroundColor:'#2563eb',
        height: 50,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap: 15,
        marginBottom: 24,
    },
    btnLabel:{
        color:'#FCFCFC',
        fontSize:15
    }
})