import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';

interface Props {
    onPress: () => void,
    label: string
}

export const ButtonRheza =(props:Props)=>{
        return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress} style={styles.btnLogin}>
                <Text style={styles.btnLabel}>{props.label}
                <Ionicons name="chevron-forward" size={20} /></Text>
            </TouchableOpacity>
        </View>
        )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddingTop: 70
  },

 btnLogin:{
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 350,
    alignItems: 'center',
    fontSize: 35,
  },

  btnLabel: {
    color:'#FCFCFC',
    fontSize:20
  },

  iconRight: {
    position: 'absolute',
    right: 25,
    top: '50%',
  },
});