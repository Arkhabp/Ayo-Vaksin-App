import React from 'react';
import{
  View,
  Text, 
  Image , 
  TouchableOpacity, 
  StyleSheet
} from 'react-native';

const LokasiTerdekat = (props) => {
    return(
        <View style={styles.wrapperLokDekat}>
            <View style={styles.wrapperdua}>
                <TouchableOpacity onPress={props.link}>
                <Image style={styles.imageLok} source={{uri :props.linkImage}}/>
                </TouchableOpacity>
                <View style={styles.WrapperTiga}>
                    <View style={{flexDirection:'row',}}>
                        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:13}}>{props.loc}</Text>
                        <Text style={{fontFamily:'Poppins-Italic', marginLeft: 5, fontSize: 12, marginTop:2}}>{props.jarak}</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:-2}}>
                        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:13}}>Mulai Jam :</Text>
                        <Text style={{fontFamily:'Poppins-Italic', marginLeft: 3, fontSize: 13, marginTop: 1}}>{props.jam}</Text>
                    </View>
                </View>
                <View style={{flex:1, paddingRight:6, alignSelf:"flex-end", paddingBottom: 6}}> 
                    <TouchableOpacity style={{backgroundColor:'#FFFFFF', width:86, height:29, borderRadius:57, alignSelf:'flex-end', marginTop:15, elevation: 3}} onPress= {props.NavToDaftar}>
                        <Text style={{fontFamily:'Poppins-SemiBold', color:'#2F2F2F', textAlign:"center", marginTop:5}}>Daftar</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
    )
}

const styles = StyleSheet.create ({
    wrapperLokDekat : {
        backgroundColor:'#FFFFFF', 
        width:'93.5%', height: 89, 
        alignSelf:'center', 
        borderRadius: 10, 
        marginTop: 2, 
        position:'relative',
        marginVertical: 3, 
        elevation: 2
    },
    wrapperdua : {
        position:'absolute', 
        bottom: 0, 
        left:0, 
        width:'100%',
        flexDirection:'row', 
        alignItems:'center'
    },
    imageLok : {
        width: 85, 
        height:70, 
        marginLeft:5, 
        marginVertical:10, 
        borderRadius:5, 
        borderWidth:1
    },
    WrapperTiga : {
        paddingLeft:5, 
        alignSelf:'flex-start', 
        paddingTop: 7
    },
    

})
export default LokasiTerdekat;