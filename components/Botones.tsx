import {StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'

export default function Botones() {
    function mensaje(){
        Alert.alert('Ingresar a la aplicación')
    }
    function mensaje2(){
        Alert.alert('Es un Opacity')
    }
    return (
        <View>
            <Text></Text>
            <Button
            color={' #89907c '}
                title='Ingresar'
                onPress={mensaje}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    btn1:{
        backgroundColor:' #94845c',
        height:30,
        borderRadius:10
    },
    input:{
        backgroundColor:'white',
        height:50,
        borderRadius:20
    },
    fila:{
        flexDirection:'row'
    }
})