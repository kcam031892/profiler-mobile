import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useMemo } from 'react';
import InfluencerItem from './InfluencerItem';
import { styles } from './Influencers.style';

const Influencers = ({ title, influencers = [] }) => {
  const renderItem = ({ item, index }) => <InfluencerItem item={item} key={index} index={index} />;
  const memoizedRender = useMemo(() => renderItem, [influencers]);
  return (
    <View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        style={{ paddingVertical: 50, marginTop: 14 }}
        data={influencers}
        horizontal
        initialNumToRender={4}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={memoizedRender}
      />
    </View>
  );
};

export default Influencers;
