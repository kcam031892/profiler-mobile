import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './BestFriends.style';
import { Card, Headline, Caption } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { bestFriendsService } from 'shared/services/bestFriendsService';
import { selectBestfriendsSlice } from 'shared/redux/slicers/bestfriends.slice';

const data = [
  {
    name: 'Devon Lane',
    username: 'amandasilva',
    interaction: 6.15,
    agreement: 8.5,
  },
  {
    name: 'Devon Lane',
    username: 'amandasilva',
    interaction: 6.15,
    agreement: 8.5,
  },
];
const { getBestFriends } = bestFriendsService();
const BestFriends = ({ handle }) => {
  const dispatch = useDispatch();
  const { bestFriends } = useSelector(selectBestfriendsSlice);
  console.log(bestFriends);
  useEffect(() => {
    dispatch(getBestFriends(handle));
  }, [handle]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.heading}>Best Internet Friends</Text>
        <Text style={styles.subHeading}>
          The number is relative frequency of the query result divided by relative size of the particular text type.
        </Text>
      </View>
      <FlatList
        data={bestFriends}
        horizontal
        style={{ paddingVertical: 20, marginTop: 0 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.imageContainer}>
                <View style={styles.profileWrapper}>
                  <Image source={{ uri: item?.target_detail?.profile_image_url_200x200 }} style={styles.profileImage} />
                </View>
              </View>
              <View style={styles.profileContainer}>
                <Headline>{item?.target_detail?.name}</Headline>
                <Text>@{item.username}</Text>
              </View>
              <View style={styles.statusContainer}>
                <View style={styles.statusWrapper}>
                  <Caption>Interaction</Caption>
                  <Text style={styles.statusValue}>{item?.agreement_score}</Text>
                </View>
                <View style={styles.statusWrapper}>
                  <Caption>Interaction</Caption>
                  <Text style={styles.statusValue}>{item?.interaction_energy}</Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default BestFriends;
