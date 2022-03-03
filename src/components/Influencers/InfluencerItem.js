import { TouchableOpacity, Text, Image, View, Dimensions } from 'react-native';
import React from 'react';
import { styles } from './InfluencerItem.style';
import { abbreviateNumber } from 'shared/utils/abbreviateNumber';
import { ProgressBar, Colors } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'shared/constants/SCREENS';

const InfluencerItem = ({ item, index }) => {
  const navigation = useNavigation();
  const { profile_data, last_7_days_scores } = item;

  const chartData = last_7_days_scores?.indegree?.map((item) => item.score);

  const handleButtonNavigate = () => {
    navigation.navigate(SCREENS.PROFILE_DETAIL, {
      profiler: item,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleButtonNavigate}>
      <Image style={styles.thumbnail} source={{ uri: profile_data?.profile_image_url_200x200 }} />
      <View style={styles.contentContainer}>
        <View style={styles.countContainer}>
          <View style={styles.textNumberContainer}>
            <Text style={styles.textNumber}>{index + 1}</Text>
          </View>

          <Text>(2)</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>{profile_data?.name}</Text>
          <Text style={styles.profileUsername}>{profile_data?.username}</Text>
        </View>
        <View style={styles.profileValueContainer}>
          <View style={styles.profileValue__top}>
            <Text style={styles.profileValue__header}> Social Capital</Text>
            <Text style={styles.profileValue__subHeader}>10/10</Text>
          </View>
          <View style={styles.profileValue__slider}>
            <ProgressBar progress={1} color={Colors.blue} />
          </View>
          <View>
            <LineChart
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                  {
                    data: chartData,
                  },
                ],
              }}
              width={180} // from react-native
              height={100}
              withVerticalLabels={false}
              withHorizontalLabels={false}
              withHorizontalLines={false}
              withOuterLines={false}
              withInnerLines={false}
              fromZero={1}
              yAxisInterval={1} // optional, defaults to 1
              withDots={false}
              propsForBackgroundLines={{
                fill: '#333',
              }}
              chartConfig={{
                backgroundGradientFrom: '#F4F9FD',
                backgroundGradientTo: '#F4F9FD',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `#3F8CFF`,

                style: {
                  borderRadius: 16,
                  paddingRight: 0,
                },
              }}
              bezier
              style={{
                marginVertical: 4,
                borderRadius: 4,
                paddingRight: 0,
                paddingLeft: 0,
              }}
            />
          </View>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.status}>
            <Text style={styles.statusHeading}>Followers</Text>
            <Text style={styles.statusValue}>
              {abbreviateNumber(profile_data?.public_metrics?.followers_count || 0)}
            </Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.statusHeading}>Interaction</Text>
            <Text style={styles.statusValue}>{abbreviateNumber(profile_data?.public_metrics?.tweet_count || 0)}</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.statusHeading}>Influence</Text>
            <Text style={styles.statusValue}>{abbreviateNumber(profile_data?.public_metrics?.listed_count || 0)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(InfluencerItem);
