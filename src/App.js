import React, {useEffect, useState} from 'react';
import{ScrollView,
  View,
  Text, 
  Image , 
  TouchableOpacity, 
  StatusBar, 
  StyleSheet, 
  BackHandler, 
  Alert, 
  ActivityIndicator,
  Linking,
  RefreshControl,
  ImageBackground,
} from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LinearGradient from 'react-native-linear-gradient';
import HomeSvg from './Asset/SVG/home.svg';
import Router from './router/router';
import Sinovac from './Screen/InfoVaksin/SinovacScreen';

const backgroundSertif = {source : './Asset/Icon/Untitled.jpg' }
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

{/*const routing = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App} options={{ headerShown: false }}/>
        <Stack.Screen  name ="data" component={halamanData} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}*/}

const App = () =>{
  return(
    <View style={{flex: 1}}>
      <Router/>
    </View>
  );
};


{/*Fungtioin Back
      
      componentDidMount(){
        this.BackHandler = BackHandler.addEventlistener(
          'hardwareBackPress',
          this.backFungtion,
        )
      }
      componentWillUnmount(){
        this.BackHandler.remove()
      }
backFungtion = () => {
  Alert.alert('Announcement!!','Yakin Keluar dari Aplikasi ?',
  [
    {text: 'Cancel',
    onPress: ()=> null,
    style: 'Cancel'
    },
    {
    text: 'yes',
    onPress: () => BackHandler.exitApp()
    }
  ])
  return true;
  }
*/}
export default App;