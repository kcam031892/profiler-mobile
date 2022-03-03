import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Navbar.styles';

const navData = [
  {
    id: 'covid-19',
    title: 'COVID-19',
  },
  {
    id: 'politics',
    title: 'Politics',
  },
  {
    id: 'economy',
    title: 'Economy',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
  },
];

const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleNavPress = (index) => {
    setSelectedIndex(index);
  };
  return (
    <FlatList
      data={navData}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => handleNavPress(index)}
          style={[styles.navButton, selectedIndex === index ? styles.navButtonActive : '']}
        >
          <Text style={[styles.navText, selectedIndex === index ? styles.navTextActive : '']}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Navbar;
