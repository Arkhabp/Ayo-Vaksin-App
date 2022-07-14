import React from "react";
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";


const Sinopharm = ({navigation}) => {
    return(
        <View style={{backgroundColor:'#6936B9', flex:1}}>
            {/*Back*/}
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../../Asset/Icon/back.png')} style={{width: 30, height: 30, marginTop: 10, marginBottom: 5, marginLeft : 12}}/>
            </TouchableOpacity>
            {/*Vaksin*/}
            <Image source={require('../../Asset/Image/Sinopharm.jpeg')} style={{width: 332 , height: 200, marginBottom: 12, opacity: 0.8,marginLeft:12, marginRight: 12, borderRadius: 15}}/>
            {/*Detail*/}
            <View style={{alignItems:'flex-end', backgroundColor: '#FFFFFF', flex: 1, borderTopLeftRadius : 35, borderTopRightRadius: 35 , alignItems: 'center'}} >
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 27, paddingTop : 12, color: '#2E2E2E'}}>
                    SINOPHARM
                </Text>
                <ScrollView alwaysBounceVertical>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'justify', paddingHorizontal: 12}}>
                         Pada 29 April 2021, BPOM mengeluarkan EUA untuk vaksin Covid-19 Sinopharm dengan nomor EUA 2159000143A2. Vaksin Sinopharm didistribusikan oleh PT.Kimia Farma dengan platform inactivated virus atau virus yang dimatikan.  
                         Berdasarkan hasil evaluasi, pemberian vaksin sinopharm dua dosis dengan selang pemberian 21 hari menujukkan profil keamanan yang dapat ditoleransi dengan baik. Hasil uji klinik fase III yang dilakukan oleh peneliti di Uni Emirates Arab (UAE) dengan subjek sekitar 42 ribu menunjukan efikasi vaksin Sinopharm sebesar 78 persen.   
                         Efek samping vaksin Sinopharm yang banyak dijumpai adalah efek samping lokal yang ringan.
                         Di antaranya seperti berikut: nyeri atau kemerahan di tempat suntikan, efek samping sistemik berupa sakit kepala, nyeri otot, kelelahan, diare, dan batuk.
                        Artikel ini telah tayang di Kontan.co.id dengan judul "Ada 9 Jenis vaksin Covid-19 yang digunakan di Indonesia.
                    </Text>
                </ScrollView>
                {/*Botton*/}
                <TouchableOpacity onPress={() => navigation.navigate('LokVaksin')}>
                    <View style={{backgroundColor: '#5D5FC8', width: 200, height: 40, marginVertical: 12, borderRadius: 17, alignItems: 'center', justifyContent:'center', elevation: 2}}>
                        <Text style={{fontFamily: 'Poppins-Medium',fontSize: 17,paddingHorizontal: 9, color:'#FFFFFF'}}> Lokasi Vaksinasi</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Sinopharm;