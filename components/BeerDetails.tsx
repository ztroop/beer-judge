import React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { RootStackParamList } from '../types';
import { RouteProp } from '@react-navigation/native';

type BeerDetailsProps = {
    route: RouteProp<RootStackParamList, 'BeerDetails'>;
};

/**
 * A component that displays the details of a selected beer.
 * @param {Beer} beer - The selected beer object.
 */
export const BeerDetails: React.FC<BeerDetailsProps> = ({ route }) => {
    const { beer } = route.params;

    return (
        <ScrollView>
            {Object.entries(beer).map(([key, value], index) => (
                <List.Item key={index} title={key} description={JSON.stringify(value)} />
            ))}
        </ScrollView>
    );
};
