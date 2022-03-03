import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SkeletonLoading } from 'components/SkeletonLoading';
import { styles } from './SkeletonCard.style';

const SkeletonCard = () => {
  const data = Array.from({ length: 3 }).fill('');
  return (
    <FlatList
      style={{ paddingVertical: 50, marginTop: 14 }}
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index}
      renderItem={({ item, index }) => (
        <View style={styles.container}>
          <View style={styles.thumbnail}>
            <SkeletonLoading height={100} width={100} borderRadius={100} borderColor={'#fff'} />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.countContainer}>
              <View style={styles.textNumberContainer}>
                <SkeletonLoading height={26} width={26} borderRadius={100} borderColor={'#fff'} />
              </View>
              <SkeletonLoading height={12} width={12} borderRadius={100} borderColor={'#fff'} />
            </View>
            <View style={styles.profileContainer}>
              <View>
                <SkeletonLoading height={16} width={100} viewWidth='100%' borderRadius={0} borderColor={'#fff'} />
              </View>
              <View style={{ marginTop: 4 }}>
                <SkeletonLoading height={16} width={100} viewWidth='100%' borderRadius={0} borderColor={'#fff'} />
              </View>
            </View>
            <View style={styles.statusContainer}>
              <View style={styles.status}>
                <SkeletonLoading height={16} width={50} borderRadius={0} borderColor={'#fff'} />
                <View style={styles.statusBottom}>
                  <SkeletonLoading height={16} width={50} borderRadius={0} borderColor={'#fff'} />
                </View>
              </View>
              <View style={styles.status}>
                <SkeletonLoading height={16} width={50} borderRadius={0} borderColor={'#fff'} />
                <View style={styles.statusBottom}>
                  <SkeletonLoading height={16} width={50} borderRadius={0} borderColor={'#fff'} />
                </View>
              </View>
              <View style={styles.status}>
                <SkeletonLoading height={16} width={50} borderRadius={0} borderColor={'#fff'} />
                <View style={styles.statusBottom}>
                  <SkeletonLoading height={16} width={50} borderRadius={0} borderColor={'#fff'} />
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default SkeletonCard;
