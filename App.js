import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

const App = () => {
  const animatedValue = new Animated.Value(0);

  const handlePress = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 2,
      tension: 160,
      useNativeDriver: true,
    }).start(() => animatedValue.setValue(0));
  };

  const animatedStyle = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.2],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={handlePress}>
        <Animated.Text style={[styles.text, animatedStyle]}>
          Tekan Me
        </Animated.Text>
      </TouchableOpacity>

      
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#1e90ff', 
    fontWeight: 'bold',
    marginBottom: 50,
    textShadowColor: 'rgba(0, 0, 0, 0.3)', 
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#800080', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#000000', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default App;
