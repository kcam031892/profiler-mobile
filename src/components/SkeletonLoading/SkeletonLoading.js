import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const Skeleton = ({ height, width, borderRadius, borderColor, viewWidth }) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      })
    ).start();
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={{
        backgroundColor: '#f2f2f2',
        // borderWidth:2,
        // borderColor,
        borderRadius,
        overflow: 'hidden',
        height,
        width: viewWidth ? viewWidth : width,
      }}
    >
      <AnimatedLG
        colors={['#f2f2f2', 'lightgray', 'lightgray', '#f2f2f2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{ translateX }],
        }}
      />
    </View>
  );
};

export default Skeleton;
