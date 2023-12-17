import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
export default function Imagen(props: any) {


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                
                <Text style={{ fontSize: 25 }}>{props.data.nonbre}</Text>

                <Image
                    source={{ uri: props.data.url }}
                    style={styles.img2}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginRight: 10,
    },
    txt1: {
        color: 'white',
        fontSize: 20
    },
    container: {
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#7f787800',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    column: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img2: {
        width: 190,
        height: 200,
        marginLeft: 10,
        borderRadius: 10,
    }
})