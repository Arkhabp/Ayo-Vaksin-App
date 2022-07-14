import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl, TextInput } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const FormPendaftaran = ({navigation, route}) => {
    const {loc,mapsLat, mapsLong} = route.params;
    {/*State Refresh*/}
    const [refreshing,setRefreshing] = useState(false)
    const onRefresh = () => {
      setRefreshing (true)
      setTimeout (()=> {
        setRefreshing(false)
        alert ('Refresh Done!!')
      },500)
    }
    return(
        <View style={{flex: 1, backgroundColor: '#FBF3F2', }}>
            {/*Header*/}
            <View style={{backgroundColor: '#6936B9', position: 'relative'}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image source={require('../../Asset/Icon/back.png')} style={{width: 30, height: 30, marginTop: 10, marginBottom: 5, marginLeft : 12}}/>
                    </TouchableOpacity>      
            </View>
            <View style={{justifyContent:'center', position:'absolute', alignSelf:'center', marginTop: 7}}>
                    <Text style={{fontFamily:'Poppins-Medium', fontSize: 18, color : '#FFFFFF', paddingLeft: 12, marginTop: 5, alignSelf: 'center' }}>Pendaftaran Vaksin</Text>
            </View> 
            <ScrollView vertical refreshControl={
                <RefreshControl 
                    refreshing = {refreshing}
                    onRefresh = {onRefresh}
                />
            }>
                <View style={{backgroundColor: '#6936B9', width: '100%', height: 267, borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>
                    {/*Loc*/}
                    <View style={{flexDirection: 'row'}}>
                        <Image source={{uri : 'https://cdn-icons-png.flaticon.com/128/927/927693.png'}} style={{width: 20, height: 20, marginTop: 12, marginLeft: 12}}/>
                        <Text style={{fontFamily: 'Poppins-Medium', color:'#FFFFFF', fontSize: 14, alignSelf:'center', marginLeft: 5, marginTop:12}}>{loc}</Text>
                    </View>
                    {/*Map*/}
                    <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{width: '100%',  height: 170, marginTop: 10, alignSelf:'center', position: 'relative'}}
                    region={{
                        latitude: mapsLat,
                        longitude: mapsLong,
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.001,
                    }}
                    >
                    </MapView>
                    <TouchableOpacity style={{position: 'absolute', bottom: 120, left: 128}} onPress={()=>navigation.push('Peta',{Lat : mapsLat, Long: mapsLong})}>
                            <View style={{backgroundColor:'#FFFFFF', width:150, height: 35, borderRadius: 15, elevation: 2, alignItems:'center', justifyContent: 'center', opacity: 0.8, borderWidth:1, borderColor: "blue" }}>
                                <Text style={{fontFamily:'Poppins-Medium', color: '#2e2e2e', fontSize: 17}}>Lihat Peta</Text>
                            </View>
                    </TouchableOpacity>
                    {/* <View style={{backgroundColor: '#FBF3F2', width: '95%', height: 170, marginTop: 10, alignSelf:'center', borderRadius: 10, alignItems:'center', justifyContent:'center'}}>

                    </View> */}
                    {/*Icon*/}
                    <View style={{flexDirection: 'row', justifyContent:'space-between', paddingHorizontal: 50, paddingTop: 20}}>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor: '#FFFFFF', width: 60, height: 60, borderRadius: 7, elevation: 3, justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={{uri : 'https://cdn-icons-png.flaticon.com/512/2823/2823840.png'}} style={{width: 35, height: 35}}/>
                            </View>
                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12, marginTop: 5, color: '#2e2e2e'}}>08123456789</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor: '#FFFFFF', width: 60, height: 60, borderRadius: 7, elevation: 3, justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={{uri : 'https://cdn-icons-png.flaticon.com/128/1086/1086932.png'}} style={{width: 35, height: 35}}/>
                            </View>
                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12, marginTop: 5, color: '#2e2e2e'}}>Sinovac</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor: '#FFFFFF', width: 60, height: 60, borderRadius: 7, elevation: 3, justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={{uri : 'https://cdn-icons.flaticon.com/png/128/3240/premium/3240587.png?token=exp=1645426891~hmac=4df8b4843ea97a69be64fbe63bced3ae'}} style={{width: 35, height: 35,}}/>
                            </View>
                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12, marginTop: 5, color: '#2e2e2e'}}>08:00-13:30</Text>
                        </View>
                    </View> 
                </View>
                <Text style={{fontFamily: 'Poppins-Medium', fontSize: 20, color: '#2e2e2e', alignSelf: 'center', paddingTop: 60}}>Isi Biodata</Text>
                {/*Biodata*/}
                <ScrollView vertical style={{}}>
                    <View>
                        <Text style={{fontFamily: 'Poppins-Medium', color: '#2e2e2e', marginTop: 5, marginLeft: 12}}>Nama Lengkap</Text>
                        <View style={{backgroundColor: '#FBF3F2', width: '92%', height: 30, marginTop: 1, marginLeft: 12, borderRadius: 5, elevation: 3}}>
                            <TextInput placeholder="Masukkan Nama Lengkap" style={{paddingVertical: 2, }}  />
                        </View>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'Poppins-Medium', color: '#2e2e2e', marginTop: 10, marginLeft: 12}}>NIK</Text>
                        <View style={{backgroundColor: '#FBF3F2', width: '92%', height: 30, marginTop: 1, marginLeft: 12, borderRadius: 5, elevation: 3}}>
                            <TextInput placeholder="Masukkan NIK" style={{paddingVertical: 2, }}  />
                        </View>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'Poppins-Medium', color: '#2e2e2e', marginTop: 10, marginLeft: 12}}>Tanggal Lahir</Text>
                        <View style={{backgroundColor: '#FBF3F2', width: '92%', height: 30, marginTop: 1, marginLeft: 12, borderRadius: 5, elevation: 3}}>
                            <TextInput placeholder="Masukkan Tanggal Lahir" style={{paddingVertical: 2, }}  />
                        </View>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'Poppins-Medium', color: '#2e2e2e', marginTop: 10, marginLeft: 12}}>Jenis Kelamin</Text>
                        <View style={{backgroundColor: '#FBF3F2', width: '92%', height: 30, marginTop: 1, marginLeft: 12, borderRadius: 5, elevation: 3}}>
                            <TextInput placeholder="Laki - laki / Perempuan" style={{paddingVertical: 2, }}  />
                        </View>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <Text style={{fontFamily: 'Poppins-Medium', color: '#2e2e2e', marginTop: 10, marginLeft: 12}}>No Telepon</Text>
                        <View style={{backgroundColor: '#FBF3F2', width: '92%', height: 30, marginTop: 1, marginLeft: 12, borderRadius: 5, elevation: 3}}>
                            <TextInput placeholder="Masukkan Nomor Telepon" style={{paddingVertical: 2, }}  />
                        </View>
                    </View>
                    <Text style={{fontFamily:'Poppins-Regular', color:'#2e2e2e', fontSize: 10, paddingHorizontal: 15, marginBottom: 5}}>Pastikan anda sarapan atau makan terlebih dahulu sebelum melakukan vaksinasi</Text>
                    <TouchableOpacity>
                        <View style={{backgroundColor:'#5D5FC8', width: 150, height: 45, borderRadius: 12, alignSelf: 'center', alignItems:'center', justifyContent: 'center', marginBottom: 20}}>
                            <Text style={{fontFamily: 'Poppins-Medium', color: '#FFFFFF', fontSize: 14}}>Daftar</Text>
                        </View>
                    </TouchableOpacity>                    
                </ScrollView>
            </ScrollView>
        </View>
    )
}

export default FormPendaftaran;