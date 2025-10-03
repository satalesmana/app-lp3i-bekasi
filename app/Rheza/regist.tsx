import { View, Image, StyleSheet, Text, TextInput } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ButtonRheza } from '@/componets/buttonR';
import { Checkbox} from 'expo-checkbox';
import { router } from 'expo-router';

export default function Regist() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setStrongPassword] = useState('');
    const [isChecked, setChecked] = useState(false);


return (
    <View style={{ paddingTop: 70 }}>
          <View style={style.imageContainer}>
            <Image
              style={{ width: 400, height: 300 }}
              source={require('@/assets/images/logoLogin.png')}
            />
          </View>
    
          <View style={style.container}>
            <Text style={style.title}>Get Started</Text>
            <Text style={style.title2}>by creating a free account</Text>
          </View>


         <View style={style.container2}>
                <View style={style.inputWrap}>
                  <TextInput
                    style={style.input}
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Full Name"
                    placeholderTextColor="#9aa0a6"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  <Ionicons name="person-outline" size={25} color="#9aa0a6" style={style.iconRight} />
                </View>
        
                <View style={style.inputWrap}>
                  <TextInput
                    style={style.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Valid Email"
                    placeholderTextColor="#9aa0a6"
                    secureTextEntry
                    autoCapitalize="none"
                  />
                  <Ionicons name="mail-outline" size={25} color="#9aa0a6" style={style.iconRight} />
                </View>

                <View style={style.inputWrap}>
                  <TextInput
                    style={style.input}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder="Phone Number"
                    placeholderTextColor="#9aa0a6"
                    secureTextEntry
                    autoCapitalize="none"
                  />
                  <Ionicons name="call-outline" size={25} color="#9aa0a6" style={style.iconRight} />
                </View>

                <View style={style.inputWrap}>
                  <TextInput
                    style={style.input}
                    value={password}
                    onChangeText={setStrongPassword}
                    placeholder="Strong Password"
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
                  <Text style={style.paragraph}>By checking the box you agree to our <Text style={{ color: '#6C63FF' }}>Terms</Text> and <Text style={{ color: '#6C63FF' }}>Conditions</Text>.</Text>
                 </View>

              <View style={style.container4}>
                <ButtonRheza onPress={() => {}} label="Next" />
                 <Text style={style.titleLogin}>Already a member? <Text onPress={() => router.push('/Rheza/login')} style={style.titleLogin2}>Log In</Text></Text> 
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
    paddingLeft: 90,
    position: 'absolute',
    top: 215,
    zIndex: 1,
  },

  container2: {
    paddingLeft: 40,
    bottom: 30,
    gap: 30,
  }, 

  container3: {
    paddingLeft: 35,
    bottom: 20,
    gap: 20,
  },

  container4: {
    position: 'absolute',
    top: 690,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 45, 
    fontWeight: '400' 
  },

  title2: { 
    fontSize: 19, 
    fontWeight: '200',
    paddingLeft: 10
  },

  inputWrap: {
    position: 'relative',
    width: 330,
    height: 55,
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

  checkbox: {
    margin: 8,
  },

  paragraph: {
    fontSize: 10,
    fontWeight: '800',
    left: 35,
    bottom: 45,
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