import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BeerList } from './components/BeerList';
import { BeerDetails } from './components/BeerDetails';
import beersData from './assets/beers.json';
import { Beer, RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    setBeers(beersData);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BeerList">
        <Stack.Screen
          name="BeerList"
          options={{ title: 'Beers' }}
          children={(props) => <BeerList {...props} beers={beers} />}
        />
        <Stack.Screen
          name="BeerDetails"
          component={BeerDetails}
          options={({ route }) => ({ title: route.params.beer.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
