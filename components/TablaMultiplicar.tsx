import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function TablaMultiplicar() {
    const [numero, setNumero] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        if (numero !== '') {
            multiplicacion(+numero);
        } else {
            setLista([]);
        }
    }, [numero]);

    let listaMultiplicacion: any = [];
    function multiplicacion(numero: number) {
        for (let i = 0; i <= 10; i++) {
            listaMultiplicacion.push(i * numero);
        }

        setLista(listaMultiplicacion);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TablaMultiplicar</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={(texto) => setNumero(texto)}
            />
            <Text style={styles.result}>{lista.join(', ')}</Text>
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
    result: {
        color: 'black', // ajusta el color según tus preferencias
        marginTop: 10,
        fontSize: 18,
    },
});
