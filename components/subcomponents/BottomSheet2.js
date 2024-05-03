import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Pressable, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { height, width } = Dimensions.get('screen')
const BottomSheet = ({ setStatus, status, children, height }) => {
  const slide = React.useRef(new Animated.Value(500)).current;


  const slideUp = () => {
    // Will change slide up the bottom sheet
    Animated.timing(slide, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    // Will slide down the bottom sheet
    Animated.timing(slide, {
      toValue: 500,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };


  React.useEffect(() => {
    // if (status) {
    // console.log(true)
    slideUp()
    // }
  })


  const closeModal = () => {
    slideDown();

    setTimeout(() => {
      setStatus(false);
    }, 800)

  }


  return (
    <Pressable onPress={() => closeModal()} style={styles.backdrop}>
      <Pressable style={{ width: '100%', height: height, borderWidth: 0 }}>
        <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slide }] }]}>
          {children}
        </Animated.View>
      </Pressable>

    </Pressable>
  )
}


export default BottomSheet;


const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    flex: 1,
    top: -Constants.statusBarHeight,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: height + Constants.statusBarHeight,
    justifyContent: 'flex-end',
    borderWidth: 0
  },
  bottomSheet: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 0,
    paddingVertical: 0
  }
})