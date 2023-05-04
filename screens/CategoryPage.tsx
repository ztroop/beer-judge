import React from 'react';
import { Beer, RootStackParamList } from '../types';
import { ScrollView, View } from 'react-native';
import { Chip } from 'react-native-paper';
import { tagsPageStyle } from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';

type CategoryPageProps = {
  beers: Beer[];
  navigation: StackNavigationProp<RootStackParamList, 'CategoryPage'>;
};

const filterByCategory = (beers: Beer[], category: string): Beer[] => {
  return beers.filter((b) => b.category === category);
};

const uniqueCategories = (beers: Beer[]): string[] => {
  return beers.reduce((acc: string[], curr: any) => {
    if (!acc.includes(curr.category)) {
      acc.push(curr.category);
    }

    return acc;
  }, []);
};

const CategoryPage: React.FC<CategoryPageProps> = ({ beers, navigation }) => {
  let beerCategories = uniqueCategories(beers);
  beerCategories.sort();

  return (
    <ScrollView style={tagsPageStyle.tags}>
      <View style={{ padding: 20 }}>
        {beerCategories.map((value, index) => {
          return (
            <Chip
              key={index}
              style={tagsPageStyle.chip}
              onPress={() =>
                navigation.navigate('FilteredPage', {
                  beers: filterByCategory(beers, value),
                })
              }
            >
              {value}
            </Chip>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CategoryPage;
