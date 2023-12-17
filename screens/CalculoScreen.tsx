

import { StyleSheet, Text, View, Button, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native-paper'
import Busqueda from '../components/Busqueda';
import TablaMultiplicar from '../components/TablaMultiplicar';

export default function Calculo() {
    //MÚLTIPLOS

    const [numero, setnumero] = useState('');
    const [lista, setlista] = useState([]);

    useEffect(() => {
        if (numero === '') {
            setlista([])
        }
    }, [numero])


    let multiplos: any = []

    function multiplo(numeroTemp: number) {
        for (let i = 1; i <= numeroTemp; i++) {
            if (numeroTemp % i === 0) {
                //console.log(i);
                multiplos.push(i)
            }
        }
        // console.log(multiplos)
        setlista(multiplos)
    }


    return (
        <View style={styles.container}>
            <Text>Calculo</Text>
            <TextInput
                keyboardType='numeric'
                onChangeText={(texto) => (setnumero(texto))}
            />
            <Text style={{ color: 'white' }}> {lista.join(', ')} </Text>

            <Button title='CALCULAR' onPress={() => multiplo(+numero)} />
            <View />

            <Busqueda datos={lista} />

            <View />

            <TablaMultiplicar />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(187, 145, 38, 0.5)'

    }
})


