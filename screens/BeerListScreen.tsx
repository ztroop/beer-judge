import React from 'react';
import { BeerList } from '../components/BeerList';
import { Beer, RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, Image } from 'react-native';
import { Paragraph } from 'react-native-paper';

type BeerListScreenProps = {
  beers: Beer[];
  navigation: StackNavigationProp<RootStackParamList, 'BeerList'>;
};

const BeerListScreen: React.FC<BeerListScreenProps> = ({
  beers,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <BeerList beers={beers} navigation={navigation} />
      <Paragraph>
        The Simple Beer Judge is a user-friendly mobile application designed to
        provide detailed information on a wide variety of beers, as defined by
        the Beer Judge Certification Program (BJCP).
      </Paragraph>
      <Paragraph>
        Browse beer styles, flavor profiles, and brewing techniques. Assisting
        users in identifying, evaluating, and appreciating diverse beer types.
        Cheers!
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 20,
  },
  logo: {
    height: 204,
    width: 200,
    alignSelf: 'center',
    margin: 50,
  },
});

export default BeerListScreen;
