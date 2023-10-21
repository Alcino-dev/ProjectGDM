
import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Entypo, MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';

import Mercado from './Mercado';


export default function GerarFixas({navigation}) {

  const [verify, setVerify] = useState(false);

  function verifyFunction () {
    setVerify(!verify);
  }
  return (
    <View style={styles.container}>


      <StatusBar
        backgroundColor="white" // Define a cor de fundo como branco
        barStyle="dark-content" // Define o estilo das letras como preto
      />

   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1E1EF",
  },
  text: {
    marginRight: 20,
    paddingLeft: 40,
    fontSize: 20,
    fontWeight: '500',
  },
  containerFixa: {
    alignSelf: 'center',
    backgroundColor: "#fff",
    borderColor: '#000',
    borderWidth: 1, 
    width: "75%",
    height: '80%',
    borderRadius: 30,
    marginTop: 50,
    marginBottom: 30,
    shadowColor: 'black',      
    shadowOffset: {
      width: 5,
      height: 8,               
    },
    shadowRadius: 6,           
    shadowOpacity: 0.8,        
    elevation: 8,              
  },
  containerText: {
    justifyContent: 'center',
    padding: 40,
  },
  btnValorFicha: {
    backgroundColor: '#27CC58',
    width: '40%',
    height: '55%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerMercado: {
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 40,
    width: '80%',
    height: '11%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  txt: {
    fontSize: 22,
    fontWeight: '400'
  }
});
