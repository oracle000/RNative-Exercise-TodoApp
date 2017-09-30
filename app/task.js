
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
    }
})


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Task extends React.Component {
    constructor(props){
        super(props);

        const {taskList} =this.props;
        console.log(taskList);
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

    render() {
        
        
        return (
           <ListView
                dataSource={this.state.result}
                renderRow={(data) => 
                <View style={styles.taskContainer}>                                   
                    <View style={styles.textContainer}>
                        <Text style={styles.task}>
                            {data.key}
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.button}>                        
                            <Icon name="check-circle" size={30} color="#6c5f5b" />
                        </Text>
                        <Text style={styles.button}>
                            <Icon name="pencil" size={30} color="#6c5f5b" />
                        </Text>
                        <Text style={styles.button}>
                            <Icon name="trash" size={30} color="#6c5f5b" />
                        </Text>
                    </View>
                </View>
            }
           
           />           
        );
    }
}

export default Task;