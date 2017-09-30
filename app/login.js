import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
// control 
import ButtonLogin from './component/button';
import {Link} from 'react-router-native';

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#6c5f5b',
        height: '100%',
        padding: 20,
        display: 'flex',
        alignItems: 'center',        
    },
    textContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'flex-start',
    },
    text : {
        
        color: '#dac3b3',
        fontSize: 40
    },
    loginMsgContainer : {
        height: '60%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginMsg : {    
        color: '#dac3b3',
        width: '100%',
        fontSize: 25,    
    },
 
    resultName : {
        fontSize: 30,
        textAlign: 'center',
        color: '#333',
        marginTop: 30
    },
    textInputStyle : {        
        borderBottomColor: '#dac3b3',
        borderBottomWidth: 2,
        marginBottom: 30,
        width: '100%'
        
    },
    input: {        
        fontSize: 25,
        color: '#dac3b3',
        textAlign: 'center',        
    },
    btnContainer: {
        width: 300,
        flex: 1,
        alignItems: 'center',             
    },
    parentBtnCont : {
        display: 'flex',
        alignItems: 'center'
    },
    button: {    
        fontSize: 25
    }
});


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enterName : null,
            defaultName : null
        };
    };


    enterUserName(event) {        
        this.setState ({
            defaultName : event.nativeEvent.text
        });        
    }




    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        RNative-Exercise
                    </Text>
                </View>
                <View style={styles.loginMsgContainer}>
                    <Text style={styles.loginMsg}>Welcome</Text>
                    <Text style={styles.loginMsg}>Please Login</Text>
                </View>
                <View style={styles.textInputStyle}>
                    <TextInput  
                        style={styles.input}
                        onSubmitEditing={this.enterUserName.bind(this)}
                        onChangeText={defaultName => this.setState({defaultName})}
                        underlineColorAndroid='transparent'
                    />
                </View>
                
                <View style={styles.btnContainer}>
                   
                    <ButtonLogin 
                        name={this.state.defaultName}                      
                    />  
                </View>
                    
            
            </View>
        );  
    }
}


export default Login;