import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'react-native-paper';
import { styles } from './ProfilerList.style';
import { CountryFilter, Navbar } from 'components/index';
import Influencers from 'components/Influencers/Influencers';
import { useSelector } from 'react-redux';
import { selectInfluencers, selectTopInfluencers } from 'shared/redux/slicers/influencers.slice';
import { CONFIG } from 'shared/config/config';
import { useDispatch } from 'react-redux';
import { influencersService } from 'shared/services/influencersService';
import SkeletonLoading from 'components/SkeletonLoading/SkeletonLoading';
import SkeletonCard from 'components/SkeletonCard/SkeletonCard';

const { getTopInfluencers } = influencersService();
const ProfilerListScreen = () => {
  const topInfluencers = useSelector(selectTopInfluencers);
  const { loading } = useSelector(selectInfluencers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopInfluencers());
  }, []);

  const { colors } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <SafeAreaView style={[styles.wrapper, { backgroundColor: colors.greyColor }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Profiler</Text>
            <Text style={styles.subHeader}>I want to know the best influencers for</Text>
          </View>
          <View>
            <Navbar />
          </View>

          <View style={styles.filterContainer}>
            <CountryFilter />
            <CountryFilter />
          </View>

          <View style={styles.influencersContainer}>
            {loading ? <SkeletonCard /> : <Influencers title='Top Influencers' influencers={topInfluencers} />}

            <Influencers title='Top Influencers' />
            <Influencers title='Top Influencers' />
            <Influencers title='Top Influencers' />
            <Influencers title='Top Influencers' />
            <Influencers title='Top Influencers' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilerListScreen;
