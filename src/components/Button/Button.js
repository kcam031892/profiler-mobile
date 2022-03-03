import { View, Text } from 'react-native';
import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

const Button = ({ children, onPress, ...props }) => {
  return (
    <PaperButton mode='contained' labelStyle={{ color: '#fff' }} onPress={onPress} {...props}>
      {children}
    </PaperButton>
  );
};

export default Button;
