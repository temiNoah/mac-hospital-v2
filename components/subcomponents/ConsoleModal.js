import React, { useState } from 'react';
import { Alert, StyleSheet, View, Text, Button, Modal } from 'react-native';
//import Modal from 'react-native-modal';

export default function ConsoleModal(props) {
    const [isModalVisible, setModalVisible] = useState(false);

    const showAlert = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.contain}>
            <Button title="Show content of AsyncStorage" onPress={() => showAlert()} />
            <Modal visible={isModalVisible}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>{props.message}</Text>
                    <Button title="Close" onPress={() => closeModal()} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'white',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        maxHeight: 300,
    },
    modalText: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});