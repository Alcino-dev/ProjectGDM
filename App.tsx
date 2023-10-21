// App.js
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Principal from './Telas/Principal';
import Mercado from './Telas/Mercado';
import CadastrarMercado from './Telas/CadastrarMercado';
import GerarFixas from './Telas/GerarFixas';
import InfTotal from './Telas/InfTotal';

const Stack = createNativeStackNavigator();

// ... (código anterior)

const App = () => {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="Principal">
  <Stack.Screen name="Principal" component={Principal} />
  <Stack.Screen name="Mercado" component={Mercado} />
  <Stack.Screen name="CadastrarMercado" component={CadastrarMercado} />
  <Stack.Screen name="GerarFixas" component={GerarFixas} />
  <Stack.Screen name="InfTotal" component={InfTotal} />
</Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;

