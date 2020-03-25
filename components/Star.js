import * as React from 'react';
import { Text, View } from 'react-native';
import Icons from '../constants/Icons';

export const Star = ({ type }) => {
    const { blackStar, whiteStar } = Icons;
    return (
        <View>
            {
                type === 'black' ? <Text>{blackStar}</Text> : <Text>{whiteStar}</Text>
            }
        </View>
    );
}
