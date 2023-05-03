import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Beer, RootStackParamList } from '../types';
import { Dropdown } from 'react-native-element-dropdown';
import { beerListStyle } from '../styles';

type BeerListProps = {
  beers: Beer[];
  navigation: StackNavigationProp<RootStackParamList, 'MainPage'>;
};

/**
 * A component that displays a list of beers.
 * @param {Beer[]} beers - The array of beer objects.
 * @param {StackNavigationProp<RootStackParamList, 'BeerList'>} navigation - The navigation prop used to navigate between screens.
 */
export const BeerList: React.FC<BeerListProps> = ({ beers, navigation }) => {
  const [value, setValue] = useState(null);

  const onBeerSelect = (beer: Beer) => {
    navigation.navigate('DetailsPage', { beer });
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
      style={beerListStyle.dropdown}
      placeholderStyle={beerListStyle.placeholderStyle}
      selectedTextStyle={beerListStyle.selectedTextStyle}
      inputSearchStyle={beerListStyle.inputSearchStyle}
    />
  );
};
