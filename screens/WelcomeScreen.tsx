import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import Botones from '../components/Botones';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://topadventure.com/__export/1692564206596/sites/laverdad/img/2023/08/20/whatsapp_image_2023-08-20_at_1_31_30_pm_1.jpeg_458425832.jpeg' }} // Replace 'URL_TO_YOUR_IMAGE' with the actual URL or local path of your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={{ fontSize: 40, color: '#ebef10' }}>
          Bienvenidos al Callegon Diagon
        </Text>
        <Botones />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' for a different effect
    justifyContent: 'center',
    backgroundColor: 'rgba(187, 145, 38, 0.5)', // Adjust the alpha (fourth value) to set the transparency
  },
});
