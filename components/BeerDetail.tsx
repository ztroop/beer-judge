import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, Chip, Paragraph } from 'react-native-paper';
import { RootStackParamList } from '../types';
import { RouteProp } from '@react-navigation/native';
import SRMGradient from './SRMGradient';

type BeerDetailsProps = {
  route: RouteProp<RootStackParamList, 'BeerDetails'>;
};

// Array of fields that have minimum and maximum objects
const minimumMaximum = [
  'international_bitterness_units',
  'original_gravity',
  'final_gravity',
  'alcohol_by_volume',
  'colour',
];

/**
 * Capitalize each word in a given string and replace underscores with spaces.
 *
 * @param input - The input string containing words separated by underscores.
 * @returns The formatted string with capitalized words and spaces instead of underscores.
 */
const capitalizeWords = (input: string): string => {
  return input
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Takes a string containing comma-separated words and returns an array
 * of Chip components with each word as its content.
 *
 * @param input - A string containing comma-separated words.
 * @returns An array of Chip components with each word from the input string as its content.
 */
const chipSplit = (input: string) => {
  return input.split(',').map((word) => (
    <Chip compact style={styles.chip}>
      {word}
    </Chip>
  ));
};

/**
 * A component that displays the details of a selected beer.
 * @param {Beer} beer - The selected beer object.
 */
export const BeerDetails: React.FC<BeerDetailsProps> = ({ route }) => {
  const { beer } = route.params;

  return (
    <ScrollView>
      {Object.entries(beer).map(([key, value], index) => {
        if (minimumMaximum.includes(key)) {
          if (key === 'colour') {
            return (
              <View>
                <List.Item key={index} title={capitalizeWords(key)} />
                <SRMGradient
                  srmValue1={value.minimum}
                  srmValue2={value.maximum}
                />
              </View>
            );
          }
          return (
            <View>
              <List.Item title={capitalizeWords(`${key} Minimum`)} />
              <View style={styles.spacing}>
                <Paragraph>{value.minimum}</Paragraph>
              </View>
              <List.Item title={capitalizeWords(`${key} Maximum`)} />
              <View style={styles.spacing}>
                <Paragraph>{value.maximum}</Paragraph>
              </View>
            </View>
          );
        } else if (key == 'tags') {
          return (
            <View>
              <List.Item key={index} title={capitalizeWords(key)} />
              <View style={styles.tags}>{chipSplit(value)}</View>
            </View>
          );
        } else {
          return (
            <View>
              <List.Item key={index} title={capitalizeWords(key)} />
              <View style={styles.spacing}>
                <Paragraph>{value}</Paragraph>
              </View>
            </View>
          );
        }
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  spacing: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  tags: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  chip: {
    margin: 6,
    backgroundColor: 'gainsboro',
  },
});
