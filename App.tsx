import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Imagen from './components/imagen';
import Botones from './components/Botones';
import BottomTabNavigator from './Navigators/TabNavigator';

export default function App() {
  return (
    <BottomTabNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262f30',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
