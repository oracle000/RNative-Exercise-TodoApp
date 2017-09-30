
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
        height: '40%'
    },
    addText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#6C5F5B'
    },
    textFieldContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textField: {
        width: '90%',
        fontSize: 20
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'flex-end',        
        marginTop: 30,
        marginRight: 30
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


class AddTaskDialog extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            taskName : null
        };
    }

    enterTask(event) {      
        this.setState({
            taskName: event.nativeEvent.text
        })
    }


    addTask() {    
        if (this.state.taskName != null) {            
            const {addTask, close} = this.props;
            addTask(this.state.taskName);
            close();
        }
        
    }


    render() {

        const {open, close } = this.props;
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
                            <Text style={styles.addText}>Add Task</Text>
                            <TouchableHighlight onPress={close} underlayColor={'transparent'}>
                                <Text>                        
                                    <Icon name="times-circle" size={30} color="#6c5f5b" />
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.textFieldContainer}>
                            <TextInput 
                                style={styles.textField}
                                onSubmitEditing={this.enterTask.bind(this)}
                                onChangeText={taskName => this.setState({taskName})}
                                />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight onPress={this.addTask.bind(this)} style={{borderRadius: 10}}>                                
                                <View style={styles.button}>
                                    <Icon name="floppy-o" size={30} color="#6c5f5b" />
                                    <Text style={styles.text}>Save</Text>
                                </View>
                            </TouchableHighlight>

                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}


export default AddTaskDialog;