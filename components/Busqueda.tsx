import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Busqueda(props: any) {
    const [numero, setNumero] = useState('');

    function buscar(lista: any, numero: number) {
        let bandera = false;
        for (let item of lista) {
            if (item === numero) {
                bandera = true;
                break;
            }
        }

        if (bandera) {
            Alert.alert('Mensaje', 'Existe');
        } else {
            Alert.alert('Mensaje', 'NO existe');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Busqueda</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={(texto) => setNumero(texto)}
            />
            <Button
                style={styles.button}
                onPress={() => buscar(props.datos, +numero)}>
                BUSCAR
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#2196F3',
        paddingHorizontal: 20,
    },
});
