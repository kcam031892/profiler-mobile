import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { pickerStyles } from './CountryFilter.style';

const items = [
  { label: 'Philippines', value: 'philippines' },
  { label: 'Singapore', value: 'singapore' },
];
const CountryFilter = () => {
  return (
    <RNPickerSelect
      placeholder={{ label: 'Select Country', value: null }}
      onValueChange={(value) => console.log(value)}
      Icon={() => <Ionicons name='chevron-down' size={20} color='grey' />}
      style={pickerStyles}
      items={items}
    />
  );
};

export default CountryFilter;
