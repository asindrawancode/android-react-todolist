import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim().length === 0) return;

        onAddTask(task);
        setTask('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Write a task"
                value={task}
                onChangeText={setTask}
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
    },
});

export default TaskInput;