import React, {useEffect, useState} from 'react';
import{ScrollView,
  View,
  Text, 
  Image , 
  TouchableOpacity, 
  StatusBar, 
  BackHandler, 
  Alert, 
  Linking,
  RefreshControl,
 
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LokasiTerdekat from '../Component/LokasiTerdekat/LokasiTerdekat';

const HomePage = ({navigation}) =>{
    {/*State Refresh*/}
    const [refreshing,setRefreshing] = useState(false)
    const onRefresh = () => {
      setRefreshing (true)
      setTimeout (()=> {
        setRefreshing(false)
        alert ('Refresh Done!!')
      },500)
    }
    {/*Back Handler*/}
    // useEffect(() => {
    //   const action = () => {
    //     Alert.alert(
    //       'Atenttion !!!', 'Are you sure want close this App ?',[
    //         {text:'Cancel', onPres:() => null, style: 'cancel' },
    //         {text: 'ya', onPress: () => BackHandler.exitApp()}
    //       ]
    //     )
    //     return true;
    //   }
    //   const backFunction = BackHandler.addEventListener('hardwareBackPress', action) 
    //   return () => backFunction.remove();
    // })
    return(
      <View style={{backgroundColor:'#FBF3F2', flex:1}}>
      {/*Loading*/}
      {/*<ActivityIndicator animating={false} size="large" color="#A1B8E3"/>*/}
      {/*Status Bar*/} 
      <StatusBar barStyle="light-content" backgroundColor='#6936B9'/>
      {/*Loading Refresh*/}
      <ScrollView vertical refreshControl={
        <RefreshControl 
          refreshing = {refreshing}
          onRefresh = {onRefresh}
        />
      }>
      {/*HEADER*/}
      <View style={{backgroundColor:'#6936B9', height:230, width:360, borderBottomLeftRadius:22, borderBottomRightRadius:22, width:'100%'}} >
      <View>
        <Image source={require('../Asset/Image/Untitled.2.jpg')} style={{height:180, width:'95%', marginTop:17, borderRadius:10, alignSelf:'center', alignItems:'center', position:'relative'}}/>
          <View style={{paddingVertical:10, paddingHorizontal:20, position:'absolute', top:15, left:5}}>
              <Text style={{fontFamily:'Poppins-Bold', color:'#2e2e2e',fontSize:16, marginBottom:-5}}>Hai Arkhab</Text>
              <Text style={{fontFamily:'Poppins-Bold', color:'#6936B9',fontSize:16,}}>AYO VAKSIN!</Text>
          </View>
          <TouchableOpacity style={{position:'absolute', top: 25, right: 22,}}>
            <FontAwesome name = 'bell' size = {25} color = '#5D5FC8'/>
            {/* <Image source={require('../Asset/Icon/bellV.png')} style={{width: 30, height: 30, position:'relative'}}/> */}
            <View style={{backgroundColor: '#FFFFFF', width:15, height:15, borderRadius: 20, position:'absolute', right:-2, top: -2,justifyContent:'center', alignItems:'center' }}>
              <Text style={{fontFamily:'Poppins-Regular' ,fontSize:9, color:'blue',marginTop: 1}}>14</Text>
            </View>
          </TouchableOpacity>
          <View>
          </View>
          <View style={{backgroundColor:'#5D5FC8',height:'43%', width:'87%', alignSelf:'center',borderRadius:10, marginTop:15, elevation:4, position:'absolute', top:'34%'}}> 
              <Text style={{fontFamily:'Poppins-Bold',textAlign:'center', color:'#FFFFFF', marginTop:5, fontSize:13}}>SUDAH VAKSIN DOSIS 1</Text>
              <View style={{backgroundColor:'#FFFFFF', width:'100%', height:1, marginTop:1}}></View>
              <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:12}}>
                <View style={{paddingTop:4}}>
                  <Text style={{fontFamily:'Poppins-Regular', color:'#FFFFFF', fontSize:13}}>Jenis Vaksin</Text>
                  <Text style={{fontFamily:'Poppins-Bold', color:'#FFFFFF', textAlign:'center', marginTop:-4}}>SINOVAC</Text>
                </View>
                <View style={{paddingTop:4}}>
                  <Text style={{fontFamily:'Poppins-Regular', color:'#FFFFFF', fontSize:13}}>Tanggal Vaksinasi</Text>
                  <Text style={{fontFamily:'Poppins-Bold', color:'#FFFFFF', textAlign:'center', marginTop:-4}}>16 Juli 2021</Text>
                </View>
              </View>
          </View>
          {/*Buttom sertive*/}
          <TouchableOpacity style={{backgroundColor:'#5D5FC8', alignSelf:'center', borderRadius: 40, elevation:5, position:'absolute', bottom:-19}}
            onPress={() => Linking.openURL('https://drive.google.com/drive/folders/1oyAS7RgQPQzoHV-8osvCrHB1KKWvNse0?usp=sharing6')}>
            <Text style={{fontFamily:'Poppins-SemiBold', color:'#FFFFFF', textAlign:'center', paddingHorizontal: 30, paddingVertical:5, fontSize:16}}>SERTIFIKAT SAYA</Text>
          </TouchableOpacity>
      </View>  
       {/*<LinearGradient colors={['#5D5FC8', '#C4C0D1']} start={{x: 0, y: 0.15}} end={{x: 1.15, y: 0.15}} locations={[0,5]} style={{backgroundColor:'#5E60CE', height:180, width:'89%', marginTop:17, borderRadius:10, alignSelf:'center', elevation:7}}>
  
        </LinearGradient>*/}
      </View>
       {/*Info Vaksin*/}
      <Text style={{fontFamily:'Poppins-SemiBold', color:'#2e2e2e',marginLeft:15, marginTop:10, fontSize:16}}>Informasi Vaksin</Text>
      <ScrollView horizontal style={{paddingHorizontal:15, marginTop: 2, flexDirection:'row',}}>
        <View style={{backgroundColor:'#FFFFFF',width:185, height:134, borderRadius:5, marginBottom:10, position:'relative', elevation: 3}}>
          <View style={{backgroundColor:'#6936B9', width:'100%', height:33, borderTopLeftRadius:5, borderTopRightRadius:5}}>
            <Text style={{color:'#FFFFFF', fontSize:16, textAlign:"center", marginTop:6}}>Sinovac</Text>
          </View>
          <Text style={{paddingHorizontal:5, paddingVertical:5, fontFamily:'Poppins-Medium', fontSize:12.5, color:'#2e2e2e'}}>Vaksin dari perusahaan Tiongkok ini merupakan yang paling pertama ....</Text>
          <TouchableOpacity style={{backgroundColor:'#FFFFFF', width:72, height:26, borderRadius:50, alignSelf:'center', elevation: 3, position:'absolute', bottom: 5,}} onPress={() => navigation.navigate('Sinovac')}>
            <Text style={{fontFamily:'Poppins-SemiBold', color:'#2F2F2F', textAlign:'center', paddingVertical: 2}}>Baca</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'#FFFFFF',width:185, height:134, borderRadius:5, marginLeft:10, marginBottom:10, elevation: 3, position:'relative'}}>
          <View style={{backgroundColor:'#6936B9', width:'100%', height:33, borderTopLeftRadius:5, borderTopRightRadius:5}}>
            <Text style={{color:'#FFFFFF', fontSize:16, textAlign:"center", marginTop:6}}>Sinopharm</Text>
          </View>
          <Text style={{paddingHorizontal:5, paddingVertical:5, fontFamily:'Poppins-Medium', fontSize:12.5, color:'#2e2e2e'}}>Sinopharm juga telah mendapatkan izin penggunaan darurat ....</Text>
          <TouchableOpacity style={{backgroundColor:'#FFFFFF', width:72, height:26, borderRadius:50, alignSelf:'center', elevation : 3, position:'absolute', bottom: 5}} onPress={() => navigation.navigate('Sinopharm')}>
            <Text style={{fontFamily:'Poppins-SemiBold', color:'#2F2F2F', textAlign:'center', paddingVertical: 2}}>Baca</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'#FFFFFF',width:185, height:134, borderRadius:5, marginLeft:10, marginRight:25, marginBottom:10, elevation: 3, position:'relative'}}>
          <View style={{backgroundColor:'#6936B9', width:'100%', height:33, borderTopLeftRadius:5, borderTopRightRadius:5,}}>
            <Text style={{color:'#FFFFFF', fontSize:16, textAlign:"center", marginTop:6}}>Moderna</Text>
          </View>
          <Text style={{paddingHorizontal:5, paddingVertical:5, fontFamily:'Poppins-Medium', fontSize:12.5, color:'#2e2e2e'}}>Vaksin COVID-19 yang banyak digunakan dan paling tidak 50% ....</Text>
          <TouchableOpacity style={{backgroundColor:'#FFFFFF', width:72, height:26, borderRadius:50, alignSelf:'center', elevation : 3, position:'absolute', bottom: 5}} onPress={() => navigation.navigate('Moderna')}>
            <Text style={{fontFamily:'Poppins-SemiBold', color:'#2F2F2F', textAlign:'center', paddingVertical: 2}}>Baca</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/*<View style={{flexDirection:'row', justifyContent:'center'}}>
        <View style={{backgroundColor:'#5E60CE', width: 10, height: 5, borderRadius:21, marginLeft: 1, marginTop: 10}}></View>
        <View style={{backgroundColor:'#5E60CE', width: 5, height: 5, borderRadius:21, marginLeft: 1, marginTop: 10}}></View>
        <View style={{backgroundColor:'#5E60CE', width: 5, height: 5, borderRadius:21, marginLeft: 1, marginTop: 10}}></View>
    </View>*/}
      {/*Loc terdekat*/}
      <Text style={{fontFamily:'Poppins-SemiBold', color:'#2e2e2e', marginLeft:15, marginTop: 5, fontSize: 16}}>Lokasi Terdekat</Text>
      {/*Loc terdekat 1*/}
      <LokasiTerdekat link = {() => Linking.openURL('https://goo.gl/maps/F2dLYZqvPxREPWwL6')} 
      linkImage = 'https://halopengadaan.id/storage/images/artikel/4ccmR8cJXCRndlNL6D5HCLQcD0GjYfis5FH1uKyR.png'
      loc = 'Puskesmas Rajeg'
      jarak =  '(5.6 km)'
      jam = '08:00 - 13:30'
      NavToDaftar = {()=>navigation.navigate('FormPendaftaran', {loc : 'Puskesmas Rajeg', mapsLat : -6.1273705 , mapsLong : 106.526173 })}/>

      {/*Loc terdekat 2*/}
      <LokasiTerdekat link = {() => Linking.openURL('https://goo.gl/maps/QZYDhH2TeUxn8cZh8')} 
      linkImage = 'http://kabar6.com/wp-content/uploads/Satu-Pegawai-Terpapar-Covid-19-Pelayanan-Di-Kantor-Kecamatan-Cikupa-Ditutup-3-Hari.han_.jpg'
      loc = 'Kantor Kemacatan Cikupa'
      jarak =  '(15 km)'
      jam = '08:00 - 13:30'
      NavToDaftar = {()=>navigation.navigate('FormPendaftaran', {loc : 'Kantor Kecamatan Cikupa', mapsLat : -6.2404874 , mapsLong : 106.4921048})}/>
      
      {/*Loc terdekat 3*/}
      <LokasiTerdekat link = {() => Linking.openURL('https://goo.gl/maps/FsLpy3j6JQCkxL2B6')} 
      linkImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicQ_9hmCy5mKss8o3D8hYEv2hu9pjvkUUWg&usqp=a'
      loc = 'Polsek Karawaci'
      jarak =  '(5.6 km)'
      jam = '08:00 - 13:30'
      NavToDaftar = {()=>navigation.navigate('FormPendaftaran', {loc : 'Polsek Karawaci', mapsLat : -6.1858484 , mapsLong : 106.6131478})}/>
      </ScrollView>
    </View>
    );
  };

  export default HomePage;