import React from 'react';
import {Text, View} from 'react-native';
import StyleSheet from 'react-native-media-query';

const {ids, styles} = StyleSheet.create({
    example: {
        backgroundColor: 'green',
        borderRadius: 5,
        '@media (max-width: 1600px) and (min-width: 800px)': {
            backgroundColor: 'red',
            borderRadius: 10,
        },
        '@media (max-width: 800px)': {
            backgroundColor: 'blue',
            borderRadius: 15,
        },
    },
});

export default function IndexPage() {
    return (
        <View>
            <Text style={styles.example} dataSet={{media: ids.example}}>Hello, world!</Text>
        </View>
    );
}
