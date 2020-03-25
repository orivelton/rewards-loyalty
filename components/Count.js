import * as React from 'react';
import { Text, View } from 'react-native';
import Icons from '../constants/Icons';

export const Count = ({ rewardsAmount, rewardsGoal}) => {
    return (
        <View>
            <Text> {rewardsAmount} / {rewardsGoal} </Text>
        </View>
    )
};