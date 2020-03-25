import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icons from '../constants/Icons';

export const Star = ({ type }) => {
    const { blackStar, whiteStar } = Icons;
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            {
                <Text style={styles.star}>
                    { type === 'black' ? blackStar : whiteStar}
                </Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    star: {
        fontSize: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    }
})
