import * as React from 'react';
import { Text, View } from 'react-native';
import { USER } from '../mocks/mock';
import Icons from '../constants/Icons';

export const Count = ({ currentRewards}) => {
    const { rewards } = USER;
    return (
        <View>
            <Text> {currentRewards} / {rewards.goal} </Text>
        </View>
    )
};