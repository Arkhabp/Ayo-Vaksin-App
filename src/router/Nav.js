import React from 'react';
import{
  View,
  Text, 
  Image ,
  StyleSheet 
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HalamanData from '../Page/dataPage';
import HalamanUser from '../Page/profilePage';
import HomePage from '../Page/homePage';
import Sinovac from '../Screen/InfoVaksin/SinovacScreen';
import Sinopharm from '../Screen/InfoVaksin/SinopharmScreen';
import Moderna from '../Screen/InfoVaksin/ModernaScreen';
import SplashScreen from '../Screen/SplashScreen';
import LokasiVaksin from '../Screen/LokasiVaksin';
import FormPendaftaran from '../Screen/VaksinTerdekat/Pendaftaran';
import Peta from '../Screen/Peta';
import Login from '../Screen/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackScreen = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen  name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen  name="TabNav" component={TabNav} options={{ headerShown: false }}/>
        <Stack.Screen  name ="Sinovac" component={Sinovac} options={{ headerShown: false }}/>
        <Stack.Screen  name ="Sinopharm" component={Sinopharm} options={{ headerShown: false }} />
        <Stack.Screen  name ="Moderna" component={Moderna} options={{ headerShown: false }} />
        <Stack.Screen  name ="FormPendaftaran" component={FormPendaftaran} options={{ headerShown: false }} />
        <Stack.Screen  name ="LokVaksin" component={LokasiVaksin} options={{ headerShown: false }} />
        <Stack.Screen  name ="Peta" component={Peta} options={{ headerShown: false }} />        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export function TabNav () {
    return(
        <Tab.Navigator>
          {/*Home*/}
          <Tab.Screen name="homePage" component={HomePage} options={{headerShown : false, tabBarShowLabel: false,tabBarIcon:({focused}) => (
              <View style = {styles.WraperIcon}>
                  <Image 
                  source={require('../Asset/Icon/home.png')} 
                  style={styles.Icon}/>
                  <Text style={{fontSize:12, color: focused ? 'blue' : '#2e2e2e', marginTop:1, fontWeight:'500'}}>Home</Text>
              </View>
          )}}/>
          {/*Data*/}
          <Tab.Screen name="HalamanData" component={HalamanData} options={{headerShown : false, tabBarShowLabel: false,tabBarIcon:({focused}) => (
              <View style = {styles.WraperIcon}>
                  <Image 
                  source={require('../Asset/Icon/security.png')} 
                  style={styles.Icon}/>
                  <Text style={{fontSize:12, color: focused ? 'blue' : '#2e2e2e', marginTop:1, fontWeight:'500'}}>Vaccinated</Text>
              </View>
          )}}/>
          {/*Profile*/}
          <Tab.Screen name="user" component={HalamanUser} options={{headerShown : false, tabBarShowLabel: false,tabBarIcon:({focused}) => (
              <View style = {styles.WraperIcon}>
                  <Image 
                  source={require('../Asset/Icon/user.png')} 
                  style={{width:25, height:25,borderRadius:5}}/>
                  <Text style={{fontSize:12, color: focused ? 'blue' : '#2e2e2e', marginTop:1, fontWeight:'500'}}>Profile</Text>
              </View>
          )}}/>
        </Tab.Navigator>
    )
} 

const styles = StyleSheet.create ({
  WraperIcon : {justifyContent:'center', alignItems:'center', paddingTop: 4},
  Icon : {width:25, height:25,borderRadius:5}
})

export default StackScreen;