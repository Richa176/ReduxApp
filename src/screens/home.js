import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Home() {
    const count = useSelector((store) => store.counter.count);
    return (
        <View style={styles.container}>
            <View>
                <Text>Count Value from previous screen</Text>
            </View>
            <View>
                <Text>Count= {count}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',

    },
})