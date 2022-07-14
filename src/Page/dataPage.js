import React from 'react';
import{ScrollView,
  View,
  Text, 
  Image , 
  TouchableOpacity, 
  Linking,
  Dimensions,
} from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLabel } from 'victory-native';
import DataKelompok from '../Component/Data/DataKelompok';
import data1 from '../Data/Data';
import data2 from '../Data/DataDua';

const{width, height} = Dimensions.get("screen");

const HalamanData = ({navigation}) => {
    return(
      <View style={{backgroundColor:'#FBF3F2', flex:1, backgroundColor:'black'}}>
        <ScrollView Vertical style={{backgroundColor:'#FBF3F2', flex:1}}>
          {/*Header*/}
            <View style={{backgroundColor:'#5E60CE', height:340, width:360, borderBottomLeftRadius:22, borderBottomRightRadius:22, width:'100%', position: 'relative',}}>
              <Text style={{fontFamily:'Poppins-Bold', color:'#FFFFFF', fontSize: 20, paddingTop: 15, textAlign:'center'}}>DATA VAKSINASI COVID-19</Text>
               {/* Label */}
               <View style={{marginLeft: 12, marginTop: 5}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: 'blue', width: 10, height:10, borderRadius: 5}}></View>
                    <Text style={{fontFamily: 'Poppins-Regular', color: '#FFFFFF', fontSize: 12, marginLeft: 5, marginTop: -3}}>Dosis 1</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: 'white', width: 10, height:10, borderRadius: 5}}></View>
                    <Text style={{fontFamily: 'Poppins-Regular', color: '#FFFFFF', fontSize: 12, marginLeft: 5, marginTop: -3}}>Dosis 2</Text>
                  </View>
                </View>
              {/* Chart */}
              <View style={{marginTop: -30, alignSelf: 'center'}}> 
                <VictoryChart theme={VictoryTheme.grayscale} width={width / 1} height={220}>
                  <VictoryLine interpolation="natural" style={{data : {stroke: "blue", strokeWidth: 3}}} animate={{duration: 3000, onLoad:{duration: 5000}}} data={data1} x="Months" y="Presentase"/>
                  <VictoryLine interpolation="natural" data ={data2} style={{data : {stroke: "white", strokeWidth: 3}}} animate={{duration: 3000, onLoad:{duration: 5000}}} x ="Months" y="Presentase"/>
                </VictoryChart>
              </View>
              <View style={{position: 'absolute', bottom: 1, alignSelf: 'center' }}>
                <Text style={{fontFamily:'Poppins-Medium', color:'#FFFFFF', fontSize: 19, paddingTop: 8, textAlign:'center'}}>Saat Ini</Text>
                <Text style={{fontFamily:'Poppins-Bold', color:'#FFFFFF', fontSize: 20, textAlign:'center', marginTop:-6}}>76.933.946 Dosis</Text>
            </View>
            </View>
           
            {/*Data*/}
            <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%', flexWrap:'wrap', paddingHorizontal: 12, marginTop:15}}>
              {/*Data karyawan*/}
              <DataKelompok 
              Kelompok = 'Karywan'
              jumData = '75.5%'/> 
              
              {/*Data pelajar*/}
              <DataKelompok 
              Kelompok = 'Pelajar'
              jumData = '77%'/> 
              {/*Data mahasiswa*/}
              <DataKelompok 
              Kelompok = 'Mahasiswa'
              jumData = '87.23%'/> 

              {/*Data petugas publik*/}
              <DataKelompok 
              Kelompok = 'Petugas Publik'
              jumData = '92.20%'/> 
            </View>
            {/*Note*/}
            <Text style={{fontFamily:'Poppins-Regular', color:'#2e2e2e', fontSize: 10, paddingHorizontal: 15, marginBottom: 5}}>Data yang ada menyesuaikan jumlah penduduk Indonesia yang sudah divaksin per-2022</Text>
  
        </ScrollView >
        {/*<View>
          <View style={{borderBottomColor:'gray', borderBottomWidth:1, opacity:0.2}}></View>
            <View style={{backgroundColor:"#FFFFFF", width:'100%', height:43, flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity style={{alignSelf:'center'}} onPress={() => navigation.push('App')}>
                <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25694.png'}} style={{width:25, height:25,}}/>
              </TouchableOpacity>
              <TouchableOpacity style={{alignSelf:'center'}} onPress={() => navigation.navigate('data')}>
                <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/102/102649.png'}} style={{width:25, height:25,}}/> 
              </TouchableOpacity>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/747/747376.png'}} style={{width:22, height:22, alignSelf:'center'}}/>  
            </View>
        </View>*/}
      </View>
    )
  }

  export default HalamanData;
  