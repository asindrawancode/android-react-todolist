import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onDelete }) => {
    return (
        <View style={styles.listItem}>
            <Text>{task}</Text>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        marginVertical: 5,
        backgroundColor: '#f8f8f8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
    },
    deleteText: {
        color: 'red',
    },
});

export default TaskItem;