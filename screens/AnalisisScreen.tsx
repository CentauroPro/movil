import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Busqueda from '../components/Busqueda'
import Operaciones from '../components/Operaciones'

export default function Analisis() {
  const [numero1, setnumero1] = useState('')
  const [numero2, setnumero2] = useState('')
  const [resultado1, setresultado1] = useState('')
  const [resultado2, setresultado2] = useState('')

  function calcular() {
    if (numero1.trim() !== '') {
      calculo(+numero1, setresultado1);
    } else {
      setresultado1('');
    }

    if (numero2.trim() !== '') {
      calculo(+numero2, setresultado2);
    } else {
      setresultado2('');
    }
  }

  function calculo(numeroTemp: number, setResult: React.Dispatch<React.SetStateAction<string>>) {
    if (numeroTemp % 2 === 0) {
      setResult('Par');
    } else {
      setResult('Impar');
    }

    if (numeroTemp < 2) {
      setResult((resultadoTemp) => resultadoTemp + '\nNo es primo');
      return;
    }

    for (let i = 2; i <= Math.sqrt(numeroTemp); i++) {
      if (numeroTemp % i === 0) {
        setResult((resultadoTemp) => resultadoTemp + '\nNo es primo');
        return;
      }
    }
    setResult((resultadoTemp) => resultadoTemp + '\nEs primo');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Primer Número</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={(texto) => setnumero1(texto)}
      />
      <Text style={styles.result}>{resultado1}</Text>

      <Text style={styles.label}>Segundo Número</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={(texto) => setnumero2(texto)}
      />
      <Text style={styles.result}>{resultado2}</Text>

      <Button
        title='Calcular'
        onPress={calcular}
      />

      <View>
        <Operaciones datos={[]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(187, 145, 38, 0.5)',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
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
    color: 'white',
    marginTop: 5,
  },
});
