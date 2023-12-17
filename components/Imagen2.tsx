import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Imagen2(props: any) {
    const { titulo, descripcion, url } = props;
    console.log(props)

    return (
      <View style={styles.container}>
        <Text style={styles.modalTitle}>{titulo}</Text>
        <Text>{descripcion}</Text>

        
        <Image source={{ uri: url }} style={styles.modalImage} 
         onError={() => console.log('Error cargando la imagen')}/>
      </View>
    );
  }

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#65535300',
    },
    img1: {
        width: 190,
        height: 200,
        marginLeft: 10,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
     
      },
      modalImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
      
      },

})