import React from 'react';
import { Beer, RootStackParamList } from '../types';
import { ScrollView, View } from 'react-native';
import { Chip } from 'react-native-paper';
import { tagsPageStyle } from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';

type TagsPageProps = {
  beers: Beer[];
  navigation: StackNavigationProp<RootStackParamList, 'TagsPage'>;
};

const filterByTag = (beers: Beer[], tag: string): Beer[] => {
  return beers.filter((b) => b.tags.includes(tag));
};

/**
 * Capitalize each word in a given string and replace underscores with spaces.
 *
 * @param input - The input string containing words separated by underscores.
 * @returns The formatted string with capitalized words and spaces instead of underscores.
 */
const capitalizeWords = (input: string): string => {
  return input
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const TagsPage: React.FC<TagsPageProps> = ({ beers, navigation }) => {
  const beerTags = beers.reduce((acc, curr) => {
    const tags = curr.tags
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => !acc.includes(tag));
    return acc.concat(tags);
  }, []);
  beerTags.sort();

  return (
    <ScrollView style={tagsPageStyle.tags}>
      <View style={{ padding: 20 }}>
        {beerTags.map((value, index) => {
          return (
            <Chip
              key={index}
              style={tagsPageStyle.chip}
              onPress={() =>
                navigation.navigate('FilteredPage', {
                  beers: filterByTag(beers, value),
                })
              }
            >
              {capitalizeWords(value)}
            </Chip>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TagsPage;
