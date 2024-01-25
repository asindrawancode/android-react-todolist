import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import useTasks from './hooks/useTasks';

const App = () => {
    const { tasks, addTask, deleteTask } = useTasks();

    return (
        <SafeAreaView style={styles.container}>
            <TaskInput onAddTask={addTask} />
            <TaskList tasks={tasks} onDeleteTask={deleteTask} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
    },
});

export default App;