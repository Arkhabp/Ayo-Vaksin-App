import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const LokasiVaksin = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../Asset/Icon/back.png')} style={{width: 30, height: 30, marginTop: 10, marginBottom: 5, marginLeft : 12}}/>
            </TouchableOpacity>
            {/*Loc terdekat 1*/}
            <View style={{backgroundColor:'#FFFFFF', width:'93.5%', height: 89, alignSelf:'center', borderRadius: 10, marginTop: 2, position:'relative',marginVertical: 3, elevation: 2}}>
                <View style={{position:'absolute', bottom: 0, left:0, width:'100%',flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://goo.gl/maps/F2dLYZqvPxREPWwL6')}>
                    <Image style={{width: 85, height:70, marginLeft:5, marginVertical:10, borderRadius:5, borderWidth:1}} source={{uri :'https://halopengadaan.id/storage/images/artikel/4ccmR8cJXCRndlNL6D5HCLQcD0GjYfis5FH1uKyR.png'}}/>
                    </TouchableOpacity>
                    <View style={{paddingLeft:5, alignSelf:'flex-start', paddingTop: 7}}>
                    <View style={{flexDirection:'row',}}>
                        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:13}}>Puskesmas Rajeg</Text>
                        <Text style={{fontFamily:'Poppins-Italic', marginLeft: 5, fontSize: 12, marginTop:2}}>(5.6 km)</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:-2}}>
                        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:13}}>Mulai Jam :</Text>
                        <Text style={{fontFamily:'Poppins-Italic', marginLeft: 3, fontSize: 13, marginTop: 1}}>08:00 - 13:30</Text>
                    </View>
                    </View>
                    <View style={{flex:1, paddingRight:6, alignSelf:"flex-end", paddingBottom: 6}}> 
                    <TouchableOpacity style={{backgroundColor:'#FFFFFF', width:86, height:29, borderRadius:57, alignSelf:'flex-end', marginTop:15, elevation: 3}} onPress={()=>navigation.push('FormPendaftaran', {loc : 'Puskesmas Rajeg', mapsLat : -6.1273705 , mapsLong : 106.526173})}>
                        <Text style={{fontFamily:'Poppins-SemiBold', color:'#2F2F2F', textAlign:"center", marginTop:5}}>Daftar</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/*Loc terdekat 2*/}
            <View style={{backgroundColor:'#FFFFFF', width:'93.5%', height:89, alignSelf:'center', borderRadius: 10, marginTop: 5, position:'relative',marginBottom: 3,elevation: 2}}>
                <View style={{position:'absolute', bottom: 0, left:0, width:'100%',flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://goo.gl/maps/QZYDhH2TeUxn8cZh8')}>
                    <Image style={{width: 85, height:70, marginLeft:5, marginVertical:10, borderRadius:5, borderWidth:1}} source={{uri :'http://kabar6.com/wp-content/uploads/Satu-Pegawai-Terpapar-Covid-19-Pelayanan-Di-Kantor-Kecamatan-Cikupa-Ditutup-3-Hari.han_.jpg'}}/>
                    </TouchableOpacity>
                    <View style={{paddingLeft:5, alignSelf:'flex-start', paddingTop: 7}}>
                    <View style={{flexDirection:'row',}}>
                        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:13}}>Kantor Kemacatan Cikupa</Text>
                        <Text style={{fontFamily:'Poppins-Italic', marginLeft: 5, fontSize: 12, marginTop:2}}>(15 km)</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:-2}}>
                        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:13}}>Mulai Jam :</Text>
                        <Text style={{fontFamily:'Poppins-Italic', marginLeft: 3, fontSize: 13, marginTop: 1}}>08:00 - 13:30</Text>
                    </View>
                    </View>
                    <View style={{flex:1, paddingRight:6, alignSelf:"flex-end", paddingBottom: 6}}> 
                    <TouchableOpacity style={{backgroundColor:'#FFFFFF', width:86, height:29, borderRadius:57, alignSelf:'flex-end', marginTop:15, elevation: 3, }} onPress={()=>navigation.push('FormPendaftaran', {loc : 'Kantor Kecamatan Cikupa',  mapsLat : -6.2408754 , mapsLong : 106.4898787})}>
                        <Text style={{fontFamily:'Poppins-SemiBold', color:'#2F2F2F', textAlign:"center", marginTop:5}}>Daftar</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/*Loc terdekat 3*/}
            <View style={{backgroundColor:'#FFFFFF', width:'93.5%', height: 89, alignSelf:'center', borderRadius: 10, marginTop: 5, position:'relative',marginVertical: 10, elevation: 2}}>
                <View style={{position:'absolute', bottom: 0, left:0, width:'100%',flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://goo.gl/maps/FsLpy3j6JQCkxL2B6')}>
                    <Image style={{width: 85, height:70, marginLeft:5, marginVertical:10, borderRadius:5, borderWidth:1}} source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicQ_9hmCy5mKss8o3D8hYEv2hu9pjvkUUWg&usqp=a'}}/>
                    </TouchableOpacity>
                    <View style={{paddingLeft:5, alignSelf:'flex-start', paddingTop: 7}}>
                    <View style={{flexDirection:'row',}}>
                        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:13}}>Polsek Karawaci</Text>
                        <Text style={{fontFamily:'Poppins-Italic', marginLeft: 5, fontSize: 12, marginTop:2}}>(5.6 km)</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:-2}}>
                        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:13}}>Mulai Jam :</Text>
                        <Text style={{fontFamily:'Poppins-Italic', marginLeft: 3, fontSize: 13, marginTop: 1}}>08:00 - 13:30</Text>
                    </View>
                    </View>
                    <View style={{flex:1, paddingRight:6, alignSelf:"flex-end", paddingBottom: 6}}> 
                    <TouchableOpacity style={{backgroundColor:'#FFFFFF', width:86, height:29, borderRadius:57, alignSelf:'flex-end', marginTop:15, elevation: 3}} onPress={()=>navigation.push('FormPendaftaran', {loc : 'Polsek Karawaci', mapsLat : -6.1858484 , mapsLong : 106.6131478})}>
                        <Text style={{fontFamily:'Poppins-SemiBold', color:'#2F2F2F', textAlign:"center", marginTop:5}}>Daftar</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LokasiVaksin;