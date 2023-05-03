import React from 'react';
import { RootStackParamList } from '../types';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Chip } from 'react-native-paper';
import { tagsPageStyle } from '../styles';

type TagsPageProps = {
  route: RouteProp<RootStackParamList, 'TagsPage'>;
};

const TagsPage: React.FC<TagsPageProps> = ({ route }) => {
  let { beers } = route.params;
  const beerTags = beers.reduce((acc, curr) => {
    const tags = curr.tags
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => !acc.includes(tag));
    return acc.concat(tags);
  }, []);

  return (
    <View style={tagsPageStyle.tags}>
      {beerTags.map((value, index) => {
        return (
          <Chip key={index} style={tagsPageStyle.chip}>
            {value}
          </Chip>
        );
      })}
    </View>
  );
};

export default TagsPage;
