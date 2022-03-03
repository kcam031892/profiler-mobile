import { DefaultTheme } from 'react-native-paper';
import { colors } from './colors';

export const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};
