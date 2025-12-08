import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
    onPress: () => void,
    label?: string
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

export const FloatingButton =(props:Props)=>{
    return(
        <TouchableOpacity style={styles.floatingBtn} onPress={props.onPress}>
          <Ionicons size={28} name="add" />
        </TouchableOpacity>
    )
}

export const ButtonUTS =(props:Props)=>{
    return(
        <TouchableOpacity style={styles.btnUTS} onPress={props.onPress}>
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
    btnUTS:{
        marginTop:10,
        backgroundColor:'#098153ff',
        height: 50,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap: 15
    },
    btnLabel:{
        color:'#FCFCFC',
        fontSize:20
    },
    floatingBtn:{
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#007AFF",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    }
})