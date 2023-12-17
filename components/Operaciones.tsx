import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function Operaciones(props: any) {

    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState('');

    const sumar = () => {
        const result = +numero1 + +numero2;
        setResultado(`Suma: ${result}`);
    }

    const restar = () => {
        const result = +numero1 - +numero2;
        setResultado(`Resta: ${result}`);
    }

    const multiplicar = () => {
        const result = +numero1 * +numero2;
        setResultado(`Multiplicación: ${result}`);
    }

    const dividir = () => {
        if (+numero2 !== 0) {
            const result = +numero1 / +numero2;
            setResultado(`División: ${result}`);
        } else {
            setResultado('No se puede dividir por cero');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Número 1:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={(text) => setNumero1(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Número 2:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={(text) => setNumero2(text)}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title='Sumar' onPress={sumar} color='#4CAF50' />
                <Button title='Restar' onPress={restar} color='#2196F3' />
                <Button title='Multiplicar' onPress={multiplicar} color='#FFC107' />
                <Button title='Dividir' onPress={dividir} color='#FF5722' />
            </View>

            <Text style={styles.result}>{resultado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    inputLabel: {
        fontSize: 18,
        marginRight: 10,
        color: 'white',
    },
    input: {
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: 'black', 
        backgroundColor: 'white', 
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    result: {
        color: 'white',
        fontSize: 18,
        marginBottom: 30,
    },
});
