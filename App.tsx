import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import beersData from './assets/beers.json';
import { Beer, RootStackParamList } from './types';
import MainPage from './screens/MainPage';
import DetailsPage from './screens/DetailsPage';
import TagsPage from './screens/TagsPage';
import FilteredPage from './screens/FilteredPage';
import CategoryPage from './screens/CategoryPage';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    setBeers(beersData);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
          name="MainPage"
          options={{ title: 'Beers' }}
          children={(props) => <MainPage {...props} beers={beers} />}
        />
        <Stack.Screen
          name="DetailsPage"
          component={DetailsPage}
          options={({ route }) => ({ title: route.params.beer.name })}
        />
        <Stack.Screen
          name="TagsPage"
          children={(props) => <TagsPage {...props} beers={beers} />}
          options={{ title: 'Tags' }}
        />
        <Stack.Screen
          name="CategoryPage"
          children={(props) => <CategoryPage {...props} beers={beers} />}
          options={{ title: 'Categories' }}
        />
        <Stack.Screen
          name="FilteredPage"
          component={FilteredPage}
          options={{ title: 'Filtered' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
