import React from "react"
import {Text, View, Image, Touchable, TouchableOpacity} from "react-native"

const HalamanUser = () => {
    return(
      <View style={{backgroundColor: '#FBF3F2', flex: 1}}>
        <View style={{backgroundColor: '#6936B9', width: '100%', height: 210, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 3}}>
          <View style={{backgroundColor: '#5D5FC8', width: '90%', height: 75, borderTopRightRadius: 10, borderBottomRightRadius: 10, elevation: 3, marginTop: 20, justifyContent: 'center', position: 'relative'}}>
              <View style={{backgroundColor: '#FFFFFF', width : 55, height: 55, borderRadius: 40, marginLeft: 12, justifyContent:'center', alignItems: 'center'}}>
                <Image source={{uri :'https://cdn-icons-png.flaticon.com/128/1077/1077063.png'}} style={{width:'70%', height: '70%',}}/>
              </View>
              <Text style={{position: 'absolute', top: 5, left: 25, fontFamily : 'Poppins-Bold', fontSize: 15, color: '#FFFFFF', marginHorizontal: 50}}>Muhammad Arkhab Purnama Agdana</Text>
              <Text style={{position:'absolute', bottom: 5, left: 25, fontFamily : 'Poppins-Light', fontSize: 12, color: '#FFFFFF', marginHorizontal: 50}}>Sudah Vaksin</Text>
          </View>
          <Text style={{fontFamily: 'Poppins-Regular', color: '#FFFFFF', fontSize: 15, marginTop: 30, alignSelf: 'center'}}>Tidak Ada Jadwal Vaksin</Text>
          <TouchableOpacity>
            <View style={{backgroundColor: '#5D5FC8', width: 200, height: 40, borderRadius: 20, alignSelf: 'center', marginTop: 12, elevation: 3, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 15, color: '#FFFFFF'}}>Atur Jadwal Vaksin</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* opsi */}
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginLeft: 12, marginTop: 20}}>
            <Image source={{uri : 'https://cdn-icons-png.flaticon.com/128/684/684831.png',}} style={{width: 20, height: 20}}/>
            <Text style={{alignSelf: 'center', fontFamily: 'Poppins-Medium', fontSize: 15, color: '#2e2e2e', marginLeft: 5}}>Data Diri</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginLeft: 12, marginTop: 12}}>
            <Image source={{uri : 'https://cdn-icons-png.flaticon.com/128/1581/1581943.png',}} style={{width: 20, height: 20}}/>
            <Text style={{alignSelf: 'center', fontFamily: 'Poppins-Medium', fontSize: 15, color: '#2e2e2e', marginLeft: 5}}>Riwayat Vaksinasi</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginLeft: 12, marginTop: 12}}>
            <Image source={{uri : 'https://cdn-icons-png.flaticon.com/128/633/633611.png',}} style={{width: 20, height: 20}}/>
            <Text style={{alignSelf: 'center', fontFamily: 'Poppins-Medium', fontSize: 15, color: '#2e2e2e', marginLeft: 5}}>Sertifikat</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginLeft: 12, marginTop: 12}}>
            <Image source={{uri : 'https://cdn-icons-png.flaticon.com/128/561/561127.png',}} style={{width: 20, height: 20}}/>
            <Text style={{alignSelf: 'center', fontFamily: 'Poppins-Medium', fontSize: 15, color: '#2e2e2e', marginLeft: 5}}>Email dan Nomor Telepon</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginLeft: 12, marginTop: 12}}>
            <Image source={{uri : 'https://cdn-icons-png.flaticon.com/128/2099/2099058.png',}} style={{width: 20, height: 20}}/>
            <Text style={{alignSelf: 'center', fontFamily: 'Poppins-Medium', fontSize: 15, color: '#2e2e2e', marginLeft: 5}}>Pengaturan</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 20}}>
            <Image source={{uri : 'https://cdn-icons-png.flaticon.com/128/1828/1828479.png',}} style={{width: 20, height: 20}}/>
            <Text style={{alignSelf: 'center', fontFamily: 'Poppins-Medium', fontSize: 15, color: '#2e2e2e', marginLeft: 5}}>Keluar</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    )
  }

  export default HalamanUser;