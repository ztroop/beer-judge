import React from 'react';
import { BeerList } from '../components/BeerList';
import { Beer, RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type BeerListScreenProps = {
  beers: Beer[];
  navigation: StackNavigationProp<RootStackParamList, 'BeerList'>;
};

const BeerListScreen: React.FC<BeerListScreenProps> = ({
  beers,
  navigation,
}) => {
  return <BeerList beers={beers} navigation={navigation} />;
};

export default BeerListScreen;
