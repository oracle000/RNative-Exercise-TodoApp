
import React from 'react';
import {StyleSheet, View, Text,
    TouchableHighlight } from 'react-native';
import {browserHistory} from 'react-router';
import {Link} from 'react-router-native';

const styles = StyleSheet.create({
    container : {
        width: '100%',
       
    },
    touchable : {
        borderRadius: 10,
    
    },
    button : {
    
        borderRadius: 100,
        backgroundColor : 'red',         
        width: '100%',    
    },
    text : {
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        color: '#6c5f5b',
        backgroundColor: '#caab81',
        borderRadius: 10,
        height: 50
    }
});



class ButtonLogin extends React.Component {
    
    constructor(props) {
        super(props);        
        this.state = {            
            name : null
        }
    }

    componentWillReceiveProps(nextProps) {        
        this.setState({
            name : `${'/accounts/'}${nextProps.name}`
        })
    }
  

    render(){        
        const {nameInsert} = this.props;
        return (
            
            <View style={styles.container}>
                <Link to={this.state.name} style={{borderRadius: 10}}>
                    <Text style={styles.text}>
                        Login
                    </Text>                   
                </Link>
            </View>
        ) 
    }        
}

export default ButtonLogin;