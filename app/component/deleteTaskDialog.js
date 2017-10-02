import React, {Component} from 'react';
import {StyleSheet, View, Text, Modal, TextInput, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    modalParent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%'
    },
    modalContainer: {
        width: 300,
        height: 300,
        borderRadius: 10,
        backgroundColor: '#c4c4c4',
        display: 'flex',        

    },
    titleContainer: {
        display: 'flex',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: '25%'
    },
    addText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#6C5F5B'
    },  
    msgTextContainer : {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        height: '30%'
    },
    msgText : {
        fontSize: 20
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'flex-end', 
        flexDirection: 'row',    
        justifyContent: 'space-around',   
        marginTop: 30,
        
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#caab81',
        borderRadius: 10,
        width: 120
    },
    text : {
        fontSize : 20
    }
});



class deleteTaskDialog extends React.Component {

    constructor(props) {
        super(props);
    }

    deleteTask(value) {
        const {removeTask, close} = this.props;
        removeTask(value)
        close();
    }

    render() {

        const {open, close, task} = this.props;

        return (

            <Modal
                transparent={true}
                visible={open}
                onRequestClose={close}
                animationType='fade'
            >
                <View style={styles.modalParent}>
                    <View style={styles.modalContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.addText}>Delete Task</Text>
                            <TouchableHighlight onPress={close} underlayColor={'transparent'}>
                                <Text>                        
                                    <Icon name="times-circle" size={30} color="#6c5f5b" />
                                </Text>
                            </TouchableHighlight>
                        </View>     
                        <View style={styles.msgTextContainer}>
                            <Text style={styles.msgText}>
                                Are you sure you want to delete {task} ?
                            </Text>
                        </View>               
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight onPress={close} style={{borderRadius: 10}}>                                
                                <View style={styles.button}>
                                    <Icon name="times" size={30} color="#6c5f5b" />
                                    <Text style={styles.text}>Cancel</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this.deleteTask.bind(this, task)} style={{borderRadius: 10}}>                                
                                <View style={styles.button}>
                                    <Icon name="trash" size={30} color="#6c5f5b" />
                                    <Text style={styles.text}>Delete</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>


            </Modal>
        )
    }
}


export default deleteTaskDialog;