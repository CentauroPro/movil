
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
//iconos
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

//screen
import WelcomeScreen from '../screens/WelcomeScreen';
import GaleriaScreen from '../screens/GaleriaScreen';
import FormularioScreen from '../screens/FormularioScreen';
import CalculoScreen from '../screens/CalculoScreen';
import AnalisisScreen from '../screens/AnalisisScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen}  options={{
                    tabBarLabel:'Inicio',
                    tabBarIcon: ()=>(
                        <Feather name="home" size={24} color="black" />
                    )
                }}/>
      <Tab.Screen name="Settings" component={GaleriaScreen} options={{
                    tabBarLabel:'Imagenes',
                    tabBarIcon: ()=>(
                        <Feather name="image" size={24} color="black"/>
                    )
                }}/>
      <Tab.Screen name='Formulario' component={FormularioScreen}
                options={{
                    tabBarLabel:'Formulario',
                    tabBarIcon: ()=>(
                        <MaterialCommunityIcons name="form-select" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Calculo" component={CalculoScreen}  options={{
                    tabBarLabel:'calculo',
                    tabBarIcon: ()=>(
                      <FontAwesome name="calculator" size={24} color="black" />
                    )
                }}/>

<Tab.Screen name="Analisis" component={AnalisisScreen}  options={{
                    tabBarLabel:'Analisis',
                    tabBarIcon: ()=>(
                      <MaterialIcons name="analytics" size={24} color="black" />
                    )
                }}/>
    </Tab.Navigator>
  );
}

export default function BottomTabNavigator(){
    return(
<NavigationContainer>
<MyTabs/>

</NavigationContainer>

    )

}