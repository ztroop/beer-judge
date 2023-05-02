import React from 'react';
import { BeerDetails } from '../components/BeerDetail';
import { RootStackParamList } from '../types';
import { RouteProp } from '@react-navigation/native';

type BeerDetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'BeerDetails'>;
};

const BeerDetailsScreen: React.FC<BeerDetailsScreenProps> = ({ route }) => {
  return <BeerDetails route={route} />;
};

export default BeerDetailsScreen;
