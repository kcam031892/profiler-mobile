import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from 'shared/constants/SCREENS';
import { HomeScreen } from 'screens/HomeScreen';
import { ProfilerListScreen } from 'screens/ProfilerListScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from 'shared/theme/theme';
import { Provider } from 'react-redux';
import { store } from 'shared/redux/store';
import ProfilerDetailScreen from 'screens/ProfilerDetailScreen/ProfilerDetailScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen name={SCREENS.HOME} component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen
                name={SCREENS.PROFILER_LIST}
                component={ProfilerListScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={SCREENS.PROFILE_DETAIL}
                component={ProfilerDetailScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
