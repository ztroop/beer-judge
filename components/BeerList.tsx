import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Beer, RootStackParamList } from '../types';
import { StyleSheet, Image, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Paragraph } from 'react-native-paper';

type BeerListProps = {
  beers: Beer[];
  navigation: StackNavigationProp<RootStackParamList, 'BeerList'>;
};

/**
 * A component that displays a list of beers.
 * @param {Beer[]} beers - The array of beer objects.
 * @param {StackNavigationProp<RootStackParamList, 'BeerList'>} navigation - The navigation prop used to navigate between screens.
 */
export const BeerList: React.FC<BeerListProps> = ({ beers, navigation }) => {
  const [value, setValue] = useState(null);

  const onBeerSelect = (beer: Beer) => {
    navigation.navigate('BeerDetails', { beer });
  };

  const dropdownBeers = beers.map((beer) => ({
    label: beer.name,
    value: beer.number,
  }));

  const onChangeDropdown = (item: { label: string; value: string }) => {
    const selectedBeer = beers.find((beer) => beer.number === item.value);
    if (selectedBeer) {
      onBeerSelect(selectedBeer);
    }
    setValue(null);
  };

  return (
    <View style={styles.viewContainer}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Dropdown
        data={dropdownBeers}
        labelField="label"
        valueField="value"
        search
        maxHeight={300}
        searchPlaceholder="Search..."
        placeholder="Select a beer..."
        value={value}
        onChange={onChangeDropdown}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
      />
      <Paragraph>
        The Simple Beer Judge is a user-friendly mobile application designed to
        provide detailed information on a wide variety of beers, as defined by
        the Beer Judge Certification Program (BJCP).
      </Paragraph>
      <Paragraph>
        Browse beer styles, flavor profiles, and brewing techniques. Assisting
        users in identifying, evaluating, and appreciating diverse beer types.
        Cheers!
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 16,
    gap: 20,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 8,
    marginLeft: 4,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  logo: {
    height: 204,
    width: 200,
    alignSelf: 'center',
    margin: 50,
  },
});