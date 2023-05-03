import React from 'react';
import { BeerDetails } from '../components/BeerDetails';
import { RootStackParamList } from '../types';
import { RouteProp } from '@react-navigation/native';

type DetailsPageProps = {
  route: RouteProp<RootStackParamList, 'DetailsPage'>;
};

const DetailsPage: React.FC<DetailsPageProps> = ({ route }) => {
  return <BeerDetails route={route} />;
};

export default DetailsPage;
