import React, {Component} from "react";
import {View, Image} from "react-native";
import {StackActions} from "@react-navigation/native"
import HomePage from "../Page/homePage";
class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    componentDidMount () {
        setTimeout(()=> {
            this.props.navigation.dispatch(StackActions.replace('TabNav'));
        }, 3000);
    }

    render () {
        return(
            <View>
                <Image source={require('../Asset/Image/Logo.png')} style={{width: 100, height: 100}}/>
            </View>
        )
    }
}

export default SplashScreen;