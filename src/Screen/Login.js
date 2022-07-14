import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, StatusBar, Alert, ActivityIndicator, Image} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation})=> {
    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
    const [token, SetToken] = useState(null);
    const [loading, SetLoading] = useState({
        loadingLogin: false,
        loadingSign: false
    })
    // Fungsi Sign
    const authSign = async ()=> {
        try {
            SetLoading({loadingSign:true})
            const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASUHOvVPkxXfxjkHtC6b7sC6BFXI8u2bk",{
                method : "POST",
                headers : {
                    'content-type': 'application/json'
                },
                body:JSON.stringify({
                    email : email,
                    password : password,
                    returnSecureToken: true
                })
            })
            const resData = await response.json()
            if (response.ok){
                await navigation.replace('TabNav')
            }
            else {
                Alert.alert('An Error Occuered!', resData.error.message,[{
                    text: 'Okay'
                }])
            }
            SetLoading({loadingSign:false})
        } catch (error) {
            SetLoading({loadingSign:false})
        }
        
    }

    // const token = ;
    // Fungsi Login
    const authLogin = async ()=> {
        try {
            SetLoading({loadingLogin:true})
            const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASUHOvVPkxXfxjkHtC6b7sC6BFXI8u2bk",{
                method : "POST",
                headers : {
                    'content-type': 'application/json',
                },
                body:JSON.stringify({
                    email : email,
                    password : password,
                    returnSecureToken: true
                }),
            })
            const resData = await response.json()
            console.log(resData)

            // await AsyncStorage.setItem('@storage_Key', idToken )
            
            if (response.ok){
                await navigation.replace('TabNav')
            }
            else {
                Alert.alert('An Error Occuered!', resData.error.message,[{
                    text: 'Okay'
                }])
            }
            SetLoading({loadingLogin:false})
        } catch (error) {
            console.log(error)
            SetLoading({loadingLogin:false})
        }
        
    }
    return(
        <View style={styles.Container}>
            {/*Status Bar*/} 
            <StatusBar barStyle="light-content" backgroundColor='#6936B9'/>
            {/* Header */}
            <View style={styles.Header}>
                <Image source={require('../Asset/Image/logoAyoVaksin.png')} style={{width: 120, height: 120, marginRight: -35, marginBottom: 20,}}/>
                <Text style={styles.textHeader}>Ayo Vaksin</Text>
            </View>
            <Text style={styles.textUeserLogin}>User Login</Text>
            {/* Email Input */}
            <TextInput
                style={styles.textInput}
                color='black'
                keyboardType='email-address'
                placeholder='Email'
                placeholderTextColor='blue'
                onChangeText={(Text)=>{
                    SetEmail(Text)
                }}
            />
            {/* Password Input */}
            <TextInput
                secureTextEntry
                color='black'
                style={styles.textInput}
                placeholder='Password'
                placeholderTextColor='blue'
                onChangeText={(Text)=>{
                    SetPassword(Text)
                }}
            />
            {/* Button Forget Password */}
            <TouchableOpacity onPress={()=>{
                console.log('Forget Password')
            }}>
                <Text style={styles.textForget}>Forget Password</Text>
            </TouchableOpacity>
            <View style={styles.buttonWrap}>
                {/* Button Login */}
                <TouchableOpacity style={styles.Button} onPress={authLogin}>
                    {loading.loadingLogin ? <ActivityIndicator size='small' color='#FFFFFF'/>:<Text style={styles.textLogin}>Login</Text>}
                </TouchableOpacity>
                {/* Button Sign */}
                <TouchableOpacity style={styles.ButtonSign} onPress={authSign}>
                    {loading.loadingSign ? <ActivityIndicator size='small' color='#6936B9'/>:<Text style={styles.textSign}>Sign</Text>}
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor: '#FBF3F2',
        flex:1
    },
    Header:{
        backgroundColor: '#6936B9',
        height: 150,
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textHeader:{
        fontFamily:'Poppins-Regular',
        color: '#FFFFFF',
        fontSize: 17,
        marginRight: 45,
        marginTop: 15
        
    },
    textUeserLogin:{
        fontFamily: 'Poppins-Bold',
        color:'#5D5FC8',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 10
    },
    textInput:{
        backgroundColor: '#ffffff',
        height: 45,
        width: '95%',
        borderWidth:0.5,
        borderColor: 'blue',
        marginBottom: 12,
        paddingHorizontal:10,
        alignSelf: 'center',
        borderRadius: 12,
        
    },
    textForget:{
        fontFamily: 'poppins-regular',
        color: 'blue',
        fontSize: 12,
        alignSelf:'center'
    },
    Button:{
        backgroundColor:'#6936B9',
        height: 45,
        width: '45%',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 12,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    ButtonSign:{
        backgroundColor:'#FFFFFF',
        height: 45,
        width: '45%',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 5,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1
    },
    textLogin:{
        fontFamily: 'Poppins-Bold',
        color: '#FFFFFF',
        fontSize: 17,
    },
    textSign:{
        fontFamily: 'Poppins-Bold',
        color: '#6936B9',
        fontSize: 17,
    },
    buttonWrap:{
        flexDirection: 'row-reverse',
        alignItems:'center',
        justifyContent:'center',
    }
    
})
export default Login;
