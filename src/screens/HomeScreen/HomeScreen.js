import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'shared/constants/SCREENS';
import { useTheme } from 'react-native-paper';
import { styles } from './HomeScreen.style';
import { Button } from 'components';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.wrapper, { backgroundColor: colors.greyColor }]}>
      <View style={styles.container}>
        <Text style={styles.title}>Profiler</Text>
        <Button onPress={() => navigation.navigate(SCREENS.PROFILER_LIST)}>Start</Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
