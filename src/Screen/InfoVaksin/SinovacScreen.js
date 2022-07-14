import React from "react";
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Sinovac = ({navigation}) => {
    return(
        <View style={{backgroundColor:'#6936B9', flex:1}}>
            {/*Back*/}
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft: 12, paddingBottom: 12, paddingTop: 5}}>
                <FontAwesome name = 'arrow-left' size = {25} color = '#FFFFFF'/>
                {/* <Image source={require('../../Asset/Icon/back.png')} style={{width: 30, height: 30, marginTop: 10, marginBottom: 5, marginLeft : 12}}/> */}
            </TouchableOpacity>
            {/*Vaksin*/}
            <Image source={require('../../Asset/Image/Sinovac.jpeg')} style={{width: 332 , height: 200, marginBottom: 12, opacity: 0.8,marginLeft:12, marginRight: 12, borderRadius: 15}}/>
            {/*Detail*/}
            <View style={{alignItems:'flex-end', backgroundColor: '#FFFFFF', flex: 1, borderTopLeftRadius : 35, borderTopRightRadius: 35 , alignItems: 'center'}} >
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 27, paddingTop : 12, color: '#2E2E2E'}}>
                    SINOVAC
                </Text>
                <ScrollView alwaysBounceVertical>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15, textAlign: 'justify', paddingHorizontal: 12}}>
                        Vaksin Sinovac dan Sinopharm disebut dapat memberikan perlindungan dari penyakit parah, rawat inap, hingga kematian karena varian Omicron. Ini diungkapkan oleh Incident Manager World Health Organization (WHO) Abdi Mahamud.
                        Penilaian ini diungkapkan setelah beberapa hari sebelumnya dirilis penelitian awal yang menyebutkan tiga dosis vaksin Sinovac tidak cukup memproduksi antibodi untuk melawan varian Omicron.

                        Studi dari Yale University, Kementerian Kesehatan Republik Dominika, dan beberapa lembaga penelitian menyimpulkan dua dosis vaksin Sinovac dicampur satu dosis booster vaksin Pfizer tidak mampu menghentikan infeksi varian Omicron.
                        Abdi Mahamud mengatakan meskipun varian Omicron dapat menghindari antibodi dan menyebabkan infeksi, bukti muncul bahwa vaksin Covid-19 masih melindungi terhadap penyakit parah, rawat inap, dan kematian.

                        "Vaksin memiliki peringkat yang berbeda dalam hal pencegahan infeksi, tetapi yang kita ketahui sejauh ini adalah semuanya mencegah kematian. Prediksi kami, kemampuan mereka untuk mencegah [penyakit] parah, rawat inap dan kematian akan dipertahankan," katanya seperti dikutip dari South China Morning Post, Rabu (12/1/2022).

                        "Apa yang kita lihat sekarang adalah apa yang akan melindungi dari [penyakit] parah, rawat inap dan kematian, itu adalah respons sel-T Anda. Apa yang kita ketahui dari vaksin lain adalah mereka mencegahnya, apakah itu [vaksin] Sinovac atau Sinopharm."

                        Sistem tubuh manusia memiliki sistem pertahanan yang berlapis. Ketika antibodi gagal membendung infeksi, sel-T (sistem imun tubuh yang berfokus pada partikel asing tertentu dan mempunyai peranan penting dalam pertahanan terhadap zat asing ketika partikel-partikel asing masuk ke dalam tubuh) bisa menjadi sistem pertahanan lainnya.
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

export default Sinovac;