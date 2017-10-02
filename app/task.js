
import React, { Component } from 'react';
import {
  StyleSheet,
  Text, View, TextInput,
  FlatList, ListView, 
  SectionList, TouchableHighlight
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



const styles = StyleSheet.create({
    taskContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',        
        justifyContent: 'space-around',
        
        marginBottom: 10,        
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',        
        width: '40%',
        marginRight: 10,
    
        
    },
    textContainer: {
        width: '50%',        
        display: 'flex',
        alignItems: 'center'
    },
    task: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,           
    },    
    button: {
        borderRadius: 10,
        backgroundColor: '#caab81',
        padding: 10
    },
    taskDone : {
        fontSize: 20,
        marginTop: 5
    }
})


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Task extends React.Component {
    constructor(props){
        super(props);

        const {taskList} =this.props;
    
        this.state = {
            result : ds.cloneWithRows(taskList),
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.taskList) {
            this.setState({
                result : ds.cloneWithRows(nextProps.taskList)
            })
        }
    }

    onClickEditTaskButton(data) {        
        const {openEditTaskDialog} = this.props;
        openEditTaskDialog(data);
    }

    onClickDeleteTaskButton(data) {
        const {openDeleteTaskDialog} = this.props;
        openDeleteTaskDialog(data);
    }

    onClickDoneTaskButton(data) {
        const {openDoneTaskDialog} = this.props;
        openDoneTaskDialog(data);
    }

    


    render() {
        
        
        return (
           <ListView
                dataSource={this.state.result}
                enableEmptySections={true}
                renderRow={(data) => 
                <View style={styles.taskContainer}>                                   
                    <View style={styles.textContainer}>
                        <Text style={styles.task}>
                            {data.key}
                        </Text>
                    </View>


                    {  
                        data.isDone ?
                        <View style={styles.buttonContainer}>
                            <Text style={styles.taskDone}>
                                Task is Done
                            </Text>
                        </View>
                        
                          :

                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={this.onClickDoneTaskButton.bind(this, data.key)}
                                style={{borderRadius: 10}}
                            >
                                <Text style={styles.button}>                        
                                    <Icon name="check-circle" size={30} color="#6c5f5b" />
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight 
                                onPress={this.onClickEditTaskButton.bind(this, data.key)}
                                style={{borderRadius: 10}}
                                >
                                <Text style={styles.button}>
                                    <Icon name="pencil" size={30} color="#6c5f5b" />
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={this.onClickDeleteTaskButton.bind(this, data.key)}
                                style={{borderRadius: 10}}
                            >
                                <Text style={styles.button}>
                                    <Icon name="trash" size={30} color="#6c5f5b" />
                                </Text>
                            </TouchableHighlight>
                        </View>

                    }
                  
                </View>
            }
           
           />           
        );
    }
}

export default Task;