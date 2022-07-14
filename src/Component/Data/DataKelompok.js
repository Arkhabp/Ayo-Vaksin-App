import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DataKelompok = (props) => {
    return(
        <View>
            <Text style={styles.textKelompok}>{props.Kelompok}</Text>
            <View style={styles.WrapperData}>
              <Text style={styles.textJumData}>{props.jumData}</Text>
            </View>
        </View> 
    )
} 

const styles = StyleSheet.create({
    textKelompok : {fontFamily:'Poppins-SemiBold', color:'#5E60CE', fontSize: 19, textAlign:'center'},
    WrapperData : {backgroundColor:'#FFFFFF', width: 150, height: 100, marginBottom:20, borderRadius: 10, justifyContent:'center', alignItems:'center', elevation:5},
    textJumData : {fontFamily:'Poppins-SemiBold', color:'#5E60CE', fontSize: 35, marginVertical: 20, marginHorizontal: 20}
})
export default DataKelompok;