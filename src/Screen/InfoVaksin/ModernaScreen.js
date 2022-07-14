import React from "react";
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";


const Moderna = ({navigation}) => {
    return(
        <View style={{backgroundColor:'#6936B9', flex:1}}>
            {/*Back*/}
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../../Asset/Icon/back.png')} style={{width: 30, height: 30, marginTop: 10, marginBottom: 5, marginLeft : 12}}/>
            </TouchableOpacity>
            {/*Vaksin*/}
            <Image source={require('../../Asset/Image/Moderna.jpeg')} style={{width: 332 , height: 200, marginBottom: 12, opacity: 0.8,marginLeft:12, marginRight: 12, borderRadius: 15}}/>
            {/*Detail*/}
            <View style={{alignItems:'flex-end', backgroundColor: '#FFFFFF', flex: 1, borderTopLeftRadius : 35, borderTopRightRadius: 35 , alignItems: 'center'}} >
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 27, paddingTop : 12, color: '#2E2E2E'}}>
                    MODERNA
                </Text>
                <ScrollView alwaysBounceVertical>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'justify', paddingHorizontal: 12}}>
                    Vaksin Covid-19 Moderna mendapat EUA dari BPOM pada Jumat, 2 Juli 2021. Berdasarkan data uji klinis fase ketiga menunjukkan efikasi vaksin Moderna sebesar 94,1 persen pada kelompok usia 18-65 tahun.  
                    Efikasi vaksin Moderna kemudian menurun menjadi 86,4 persen untuk usia di atas 65 tahun. Hasil uji klinis juga menyatakan vaksin Moderna aman untuk kelompok populasi masyarakat dengan komorbid atau penyakit penyerta.  
                    Komorbid yang dimaksud yakni penyakit paru kronis, jantung, obesitas berat, diabetes, penyakit lever hati, dan HIV. 
                    Beberapa efek samping yang paling sering dirasakan sebagai berikut: nyeri (di tempat suntikan), kelelahan, nyeri otot, nyeri sendi, dan pusing. Sementara itu, potensi gejala umum atau moderat yang muncul dapat berupa lemas, sakit kepala, menggigil, demam, dan mual.


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

export default Moderna;