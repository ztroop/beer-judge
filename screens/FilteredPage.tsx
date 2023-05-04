import React from 'react';
import { Beer, RootStackParamList } from '../types';
import { ScrollView } from 'react-native';
import { Chip } from 'react-native-paper';
import { filteredPageStyle } from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type FilteredPageProps = {
  beers: Beer[];
  navigation: StackNavigationProp<RootStackParamList, 'FilteredPage'>;
  route: RouteProp<RootStackParamList, 'FilteredPage'>;
};

const FilteredPage: React.FC<FilteredPageProps> = ({ navigation, route }) => {
  const { beers } = route.params;
  beers.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <ScrollView style={filteredPageStyle.tags}>
      {beers.map((value, index) => {
        return (
          <Chip
            key={index}
            style={filteredPageStyle.chip}
            onPress={() => navigation.navigate('DetailsPage', { beer: value })}
          >
            {value.name}
          </Chip>
        );
      })}
    </ScrollView>
  );
};

export default FilteredPage;
