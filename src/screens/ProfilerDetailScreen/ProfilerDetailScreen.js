import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './ProfilerDetailScreen.style';
import { colors } from 'shared/theme/colors';
import { Image } from 'react-native';
import { abbreviateNumber } from 'shared/utils/abbreviateNumber';
import { BestFriends } from 'components/index';

const ProfilerDetailScreen = ({ route }) => {
  const { profiler } = route.params;
  const { profile_data } = profiler;
  const { height, width } = useWindowDimensions();

  return (
    <ScrollView style={[styles.wrapper, { backgroundColor: colors.greyColor }]}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: profile_data?.profile_image_url }}
          style={{ height: 150, width: width, resizeMode: 'cover' }}
        />
        <View style={styles.headerContent}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: profile_data?.profile_image_url_200x200 }}
              style={{ height: 50, width: 50, resizeMode: 'contain', borderRadius: 50 }}
            />
          </View>
          <View style={styles.headerDetails}>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{profile_data?.name}</Text>
              <Text style={styles.profileUsername}>@{profile_data?.username}</Text>
            </View>
            <View style={styles.socialStatus}>
              <View style={[styles.socialTextContainer]}>
                <Text style={styles.socialValue}>
                  {abbreviateNumber(profile_data?.public_metrics?.following_count || 0)}
                </Text>
                <Text style={styles.socialLabel}>Following</Text>
              </View>
              <View style={[styles.socialTextContainer]}>
                <Text style={styles.socialValue}>
                  {abbreviateNumber(profile_data?.public_metrics?.tweet_count || 0)}
                </Text>
                <Text style={styles.socialLabel}>Tweets</Text>
              </View>
            </View>
            <View style={styles.socialStatus}>
              <View style={[styles.socialTextContainer]}>
                <Text style={styles.socialValue}>
                  {abbreviateNumber(profile_data?.public_metrics?.followers_count)}
                </Text>
                <Text style={styles.socialLabel}>Followers</Text>
              </View>
              <View style={[styles.socialTextContainer]}>
                <Text style={styles.socialValue}>{abbreviateNumber(profile_data?.public_metrics?.listed_count)}</Text>
                <Text style={styles.socialLabel}>Influence</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* MainContainer */}
      <View style={styles.mainContainer}>
        {/* BestFriends  */}
        <View style={styles.bestFriendsContainer}>
          <BestFriends handle={profiler.handle} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilerDetailScreen;
