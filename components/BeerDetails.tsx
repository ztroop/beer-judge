import React from 'react';
import { ScrollView, View } from 'react-native';
import { List, Chip, Paragraph } from 'react-native-paper';
import { RootStackParamList } from '../types';
import { RouteProp } from '@react-navigation/native';
import SRMGradient from './SRMGradient';
import { beerDetailStyle } from '../styles';
import ArrowSlider from './ArrowSlider';

type BeerDetailsProps = {
  route: RouteProp<RootStackParamList, 'DetailsPage'>;
};

const startEnding = {
  international_bitterness_units: [0, 100],
  original_gravity: [1.0, 1.15],
  final_gravity: [0.98, 1.05],
  alcohol_by_volume: [0.0, 10.0],
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
const chipSplit = (input: string, parentIndex: number) => {
  return input.split(',').map((word, index) => (
    <Chip compact style={beerDetailStyle.chip} key={`${parentIndex}-${index}`}>
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
              <View key={`${index}-colour`}>
                <List.Item title={capitalizeWords(key)} />
                <SRMGradient
                  srmValue1={value.minimum}
                  srmValue2={value.maximum}
                />
              </View>
            );
          }
          return (
            <View key={`${index}-minmax`}>
              <List.Item title={capitalizeWords(`${key} Minimum`)} />
              <View style={beerDetailStyle.spacing}>
                <ArrowSlider
                  start={startEnding[key][0]}
                  end={startEnding[key][1]}
                  arrowPosition={value.minimum}
                />
              </View>
              <List.Item title={capitalizeWords(`${key} Maximum`)} />
              <View style={beerDetailStyle.spacing}>
                <ArrowSlider
                  start={startEnding[key][0]}
                  end={startEnding[key][1]}
                  arrowPosition={value.maximum}
                />
              </View>
            </View>
          );
        } else if (key == 'tags') {
          return (
            <View key={`${index}-tags`}>
              <List.Item title={capitalizeWords(key)} />
              <View style={beerDetailStyle.tags}>
                {chipSplit(value, index)}
              </View>
            </View>
          );
        } else if (key == 'category') {
          return (
            <View key={`${index}-category`}>
              <List.Item title={capitalizeWords(key)} />
              <Chip
                compact
                style={{
                  backgroundColor: 'gainsboro',
                  marginHorizontal: 30,
                }}
              >
                {value}
              </Chip>
            </View>
          );
        } else {
          return (
            <View key={`${index}-other`}>
              <List.Item title={capitalizeWords(key)} />
              <View style={beerDetailStyle.spacing}>
                <Paragraph>{value}</Paragraph>
              </View>
            </View>
          );
        }
      })}
    </ScrollView>
  );
};
