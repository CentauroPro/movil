import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, Alert} from 'react-native';
import Imagen2 from '../components/Imagen2'


// icono de boton
import { Entypo } from '@expo/vector-icons';

export default function FormularioScreen() {
  const datos = [];
  function Imagen(){
    Alert.alert('Eskimo',
    'Hecho de Helado Y Leche')
}




  const [titulo, setTitulo] = useState('');
const [descripcion, setDescripcion] = useState('');
const [url, setUrl] = useState('');

const verInformacion = () => {
  setModalVisible(true);
};

  // funciones del modal 
  const [modalVisible, setModalVisible] = useState(false);


 

  const Close = () => {
    setModalVisible(false);
  };


  return (
    <View style={styles.container}>
      
      <Text style={styles.txt1}>Titulo</Text>
      <TextInput
        style={styles.input1}
        placeholder='Eskimo'
        keyboardType='default'
        onChangeText={(text) => setTitulo(text)}
      />
      <Text style={styles.txt1}>Descripción</Text>
      <TextInput
        style={[styles.input2, styles.multilineInput]}
        placeholder='Hecho de Helado y Leche'
        onChangeText={(text) => setDescripcion(text)}
        multiline

      />
      <Text style={styles.txt1}>URL</Text>
      <TextInput
        style={styles.input3}
        placeholder='https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/274702525_490732635783830_6036747766784623206_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xiRmtLEp8GQAX9fRia8&_nc_ht=scontent.fuio5-1.fna&oh=00_AfB7JqI8xJIfyJZFUz_hoEnvAf6c-o718kHj3JHIlGr5Wg&oe=6571F519'
        
        
        onChangeText={(text) => setUrl(text)}
     
      />



      <TouchableOpacity style={styles.button}

        onPress={verInformacion}>
        <Text style={styles.txt}>Informacion</Text>
        <Entypo name="drink" size={24} color="#88d4e4" />
       
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{titulo}</Text>
            <Text>{descripcion}</Text>
            <TouchableOpacity onPress={Imagen}  >
            {/*<Image  onPartialLoad={Imagen} source={{ uri: url }} style={styles.modalImage} />*/}
            <Imagen2 titulo={titulo} descripcion={descripcion} url={url} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseButton} onPress={Close}>
              <Text style={styles.modalCloseButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(187, 145, 38, 0.5)',
    
  },
  txt1: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#615e51',

  },
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  input1: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius:20

  },
  input2: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 15,


  },
  input3: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 15,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#56381e',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  modalImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 16,
  },
  modalCloseButton: {
    backgroundColor: '#56381e',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: 'white',
  },

  Image1:{
    width:200,
    height:100
  }
});
