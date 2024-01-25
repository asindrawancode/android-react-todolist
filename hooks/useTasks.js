import { useState } from 'react';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((currentTasks) => [...currentTasks, task]);
    };

    const deleteTask = (index) => {
        setTasks((currentTasks) => currentTasks.filter((_, i) => i !== index));
    };

    return { tasks, addTask, deleteTask };
};

export default useTasks;