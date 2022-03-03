import { StyleSheet } from 'react-native';
export const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    width: 150,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'grey',
    paddingRight: 40, // to ensure the text is never behind the icon
    position: 'relative',
  },
  iconContainer: {
    top: 8,
    right: 5,
  },
});
