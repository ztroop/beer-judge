import React from 'react';
import { BeerList } from '../components/BeerList';
import { Beer, RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Image } from 'react-native';
import { Chip, Paragraph } from 'react-native-paper';
import { mainPageStyle } from '../styles';

type MainPageProps = {
  beers: Beer[];
  navigation: StackNavigationProp<RootStackParamList, 'MainPage'>;
};

const MainPage: React.FC<MainPageProps> = ({ beers, navigation }) => {
  return (
    <View style={mainPageStyle.container}>
      <Image
        style={mainPageStyle.logo}
        source={require('../assets/logo.png')}
      />
      <BeerList beers={beers} navigation={navigation} />
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
      <View style={mainPageStyle.tags}>
        <Chip
          style={mainPageStyle.chip}
          onPress={() => navigation.navigate('TagsPage', { beers })}
        >
          Search By Tags
        </Chip>
        <Chip style={mainPageStyle.chip}>Search By Category</Chip>
      </View>
    </View>
  );
};

export default MainPage;
