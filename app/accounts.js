

import React, {Component} from 'react'
import {
    StyleSheet, Text, View, Modal, TouchableHighlight
} from 'react-native';
import {Link} from 'react-router-native';

// Component
import AddTaskDialog from './component/addTaskDialog';
import EditTaskDialog from './component/editTaskDialog';
import DeleteTaskDialog from './component/deleteTaskDialog';
import Task from './task';

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',        
        backgroundColor: '#6c5f5b',
        display: 'flex',
        height: '100%',
        padding: 20,
    },
    textContainer: {
        alignItems: 'flex-start',
        display: 'flex',
        width: '100%',
    },
    text : {        
        color: '#dac3b3',
        fontSize: 40
    },
    panel : {
        backgroundColor: '#c4c4c4',
        height: '80%',        
        marginTop: 40,
        paddingTop: 40,
        width: '100%',    
        display: 'flex',
        alignItems: 'center'    
    },
    buttonContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    logoutLink : {
        borderRadius:10    
    },
    button : {
        backgroundColor: '#caab81',
        borderRadius: 10,
        fontSize: 20,
        height: 50,
        
        padding: 10,
        textAlign: 'center',
        width: 150,
    },
    line: {
        backgroundColor: '#6C5F5B',
        width: '90%',
        height: 1,  
        marginTop: 20
    },
    currentTaskText : {
        color: '#6C5F5B',
        fontSize: 25,
        marginTop: 30,
        marginBottom: 20
    },
    taskContainer: {
        maxHeight: 300,
        overflow: 'scroll',                     
    }

});

class Accounts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginName : this.props.match.params.id,
            addTaskDialog : false,
            editTaskDialog : false,
            deleteTaskDialog : false,
            selectedTask : '',
            taskList : [{
                key : 'Play Piano',
                isDone : false
            }, {
                key : 'Play Guitar',
                isDone : false
            },{
                key : 'Play Drums',
                isDone : false
            }]
        }        
    }    

    // open Add Task Dialog
    onOpenAddTaskDialog() {
        this.setState({
            addTaskDialog: true
        });
    }
    // close Add Task Dialog
    onCloseAddTaskDialog() {
        this.setState({
            addTaskDialog: false
        });
    }

    // open Edit Task Dialog
    onOpenEditTaskDialog(value) {
        this.setState({
            editTaskDialog : true,
            selectedTask : value
        });
    }
    // close Edit Task Dialog
    onCloseEditTaskDialog() {
        this.setState({
            editTaskDialog: false,
            selectedTask : ''
        });
    }

    // open Delete Task Dialog
    onOpenDeleteTaskDialog(value) {
        this.setState({
            deleteTaskDialog: true,
            selectedTask : value
        });
    }
    // close Delete Task Dialog
    onCloseDeleteTaskDialog() {
        this.setState({
            deleteTaskDialog: false,
            selectedTask : ''
        });
    }


    // save Edit Task Name
    onSaveSelectedEditTask(task) {
        var myObj = this.state.taskList;
        myObj.map((x, y) => {
            if (x.key == this.state.selectedTask ) {
                x.key = task;
            }
        });

        this.setState({
            taskList : myObj
        });
    }


    // Add Task Function 
    addTodoTask(value) {
        var myObj = this.state.taskList;
        myObj.push({key: value, isDone: false});
        this.setState({
            taskList: myObj
        });      
    }

    removeTodoTask(task) {    
        var myObj = this.state.taskList;
        var index = myObj.findIndex(x => x.key == task);    
        myObj.splice(index, 1);     
        this.setState({
            taskList: myObj
        });         
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {this.state.loginName}
                    </Text>
                </View>
                <View style={styles.panel}>
                    <View style={styles.buttonContainer}>
                        <Link to='/' style={styles.logoutLink}>
                            <Text style={styles.button}>
                                Logout
                            </Text>
                        </Link>
                        <TouchableHighlight 
                            onPress={this.onOpenAddTaskDialog.bind(this)}
                            style={{borderRadius: 10}}
                            >
                            <Text style={styles.button}>
                                Add Task
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.line}></View>      
                    <View>
                        <Text style={styles.currentTaskText}>Current Task</Text>
                    </View>      
                    <View style={styles.taskContainer}>
                        <Task 
                            taskList={this.state.taskList}
                            openEditTaskDialog={this.onOpenEditTaskDialog.bind(this)}
                            openDeleteTaskDialog={this.onOpenDeleteTaskDialog.bind(this)}
                        />
                    </View>
                </View>


                <AddTaskDialog 
                    open={this.state.addTaskDialog}
                    close={this.onCloseAddTaskDialog.bind(this)}
                    addTask={this.addTodoTask.bind(this)}
                />

                <EditTaskDialog
                    open={this.state.editTaskDialog}
                    close={this.onCloseEditTaskDialog.bind(this)}
                    task={this.state.selectedTask}
                    editTask={this.onSaveSelectedEditTask.bind(this)}
                />

                <DeleteTaskDialog
                    open={this.state.deleteTaskDialog}
                    close={this.onCloseDeleteTaskDialog.bind(this)}
                    task={this.state.selectedTask}
                    removeTask={this.removeTodoTask.bind(this)}

                />

               
            </View>
        );
    }
}

export default Accounts;
