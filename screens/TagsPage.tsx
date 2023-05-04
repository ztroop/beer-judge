import React from 'react';
import { Beer, RootStackParamList } from '../types';
import { ScrollView } from 'react-native';
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
            {value}
          </Chip>
        );
      })}
    </ScrollView>
  );
};

export default TagsPage;
