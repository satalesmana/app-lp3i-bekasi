import { View, Image, StyleSheet, Text, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Checkbox } from 'expo-checkbox';
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../store/reducer/userSlice';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const dispatch = useDispatch();
    
const onSubmitLogin = ()=>{
        if(email==='rheza@mail.com' && password === 'tes123'){
              dispatch(setUsers({
                  name: "Rheza",
                  email: "rheza@mail.com",
                  gender: "Pria",
                  dateOfBirth: "20-05-2006",
                  address: "Jl. Kemuning III"
              }))
              router.replace("/Rheza/home")
              return;
          }
        Alert.alert('Info', 'Login Gagal', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }

  return (
    <View style={{ paddingTop: 70 }}>
      <View style={style.imageContainer}>
        <Image
          style={{ width: 400, height: 300 }}
          source={require('@/assets/images/logoLogin.png')}
        />
      </View>

      <View style={style.container}>
        <Text style={style.title}>Welcome back</Text>
        <Text style={style.title2}>sign in to access your account</Text>
      </View>

      <View style={style.container2}>
        <View style={style.inputWrap}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#9aa0a6"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Ionicons name="mail-outline" size={25} color="#9aa0a6" style={style.iconRight} />
        </View>

        <View style={style.inputWrap}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#9aa0a6"
            secureTextEntry
            autoCapitalize="none"
          />
          <Ionicons name="lock-closed-outline" size={25} color="#9aa0a6" style={style.iconRight} />
        </View>
      </View>

      <View style={style.container3}>
       <Checkbox
          style={style.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={style.paragraph}>REMEMBER ME</Text>
        <Text style={style.paragraph2}>FORGET PASSWORD ?</Text>
      </View>

      <View style={style.container4}>
        <Pressable onPress={onSubmitLogin} style={style.btnLogin}>
          <Text style={style.textBtn}>Next <Ionicons name="chevron-forward" size={20} /></Text>
        </Pressable>
        <Text style={style.titleLogin}>New member? <Text onPress={() => router.push('/Rheza/regist')} style={style.titleLogin2}>Register now</Text></Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginLeft: 85,
  },

  container: {
    paddingLeft: 85,
    position: 'absolute',
    top: 225,
    zIndex: 1,
  }, 

  container2: {
    paddingTop: 20,
    paddingLeft: 40,
    gap: 30,
  }, 

  container3: {
    paddingTop: 30,
    paddingLeft: 35,
    bottom: 20,
    gap: 20,
  },

  container4: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddingTop: 70
  },

  title: {
    fontSize: 35, 
    fontWeight: '400' 
  },

  title2: { 
    fontSize: 19, 
    fontWeight: '200' 
  },

  inputWrap: {
    position: 'relative',
    width: 330,
    height: 57,
    justifyContent: 'center',
  },
  
  input: {
    height: 57,
    width: 330,
    paddingLeft: 30,
    paddingRight: 40,
    fontSize: 18,
    fontWeight: '300',
    borderRadius: 10,
    backgroundColor: '#ebeae8',
  },

  iconRight: {
    position: 'absolute',
    right: 25,
    top: '50%',
    marginTop: -12,
  },

   paragraph: {
    fontSize: 10,
    fontWeight: '800',
    left: 35,
    bottom: 45,
  },

   paragraph2: {
    fontSize: 10,
    fontWeight: '800',
    left: 230,
    bottom: 78,
    color: 'blue',
  },

  checkbox: {
    margin: 8,
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

  textBtn: {
    color: 'white',
    fontSize: 25
  },

  titleLogin:{
    marginTop:20, 
    textAlign:'center',
    fontSize: 15
  },

  titleLogin2:{
    marginTop:20, 
    textAlign:'center',
    fontSize: 15,
    color: '#6C63FF'
  }
    
});
