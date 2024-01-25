import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask }) => {
    return (
        <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <TaskItem task={item} onDelete={() => onDeleteTask(index)} />
            )}
        />
    );
};

export default TaskList;