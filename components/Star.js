import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icons from '../constants/Icons';

export const Star = ({ type }) => {
    const { blackStar, whiteStar } = Icons;
    return (
        <View style={styles.star__box}>
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
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
    },

    star__box: {
        flex: 1,
        flexDirection: 'row',
        width: '100%'
    }
});
