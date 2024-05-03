
import React, { useState } from 'react';
import { View, Text, Button, Modal, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from './CustomButton';
import { fontFamily } from '../consts/Fonts';
import Constants from 'expo-constants';

const { height, width } = Dimensions.get("screen")
function CustomModal({ title, isModalVisible, handleRoute, setModalVisiblity, bodyComponent }) {
    // const [modalVisible, setModalVisible] = useState(isModalVisible);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',

            position: 'absolute',
            borderWidth: 0,
            top: -50,
            height: height + 100 * Constants.statusBarHeight,
            padding: 0,
            width: '100%'

        }}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    // setModalVisible(false);
                    setModalVisiblity(false)
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'transparent',//'rgba(0, 0, 0, 0.5)',
                    borderWidth: 0,

                    position: 'absolute',
                    width: "100%",
                    height: height,
                }}>

                    <View style={{
                        position: 'absolute',
                        backgroundColor: '#F7FFF0',
                        padding: 20,
                        borderRadius: 10,
                        borderWidth: 0,
                        // height: '60%',
                        gap: 40,
                        top: "25%",

                    }}>
                        {bodyComponent}
                    </View>
                </View>
            </Modal>
        </View>
    );


}

export default CustomModal