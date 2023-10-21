
import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Entypo, MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { Table, Row, Rows } from 'react-native-table-component';

import market from '../Imagens/maket.png'
import counter from '../Imagens/counter.png'
import measure from '../Imagens/measure.png'
import calendar from '../Imagens/calendar.png'
import fichIcon from '../Imagens/ficha.png'
import location from '../Imagens/location.png'
import InfTotal from './InfTotal';
import GerarFixas from './GerarFixas';


export default function Mercado({navigation}) {

    const tableHead = ['Data', 'Valor da Fixa', 'Fixas Vendidas', 'Lucro Diário', 'Lucro Bruto'];

    const tableData = [
      ['01/09/2023', '400 kzs', '50', '5.000 Kzs', '600.000 Kzs'],
      ['02/09/2023', '400 kzs', '80', '110.000 Kzs', '800.000 Kzs'],
      ['03/09/2023', '400 kzs', '590', '200.000 Kzs', '1.000.000 Kzs'],
      // Adicione mais linhas de dados conforme necessário
    ];


  return (
    <View style={styles.container}>

    <StatusBar
        backgroundColor="white" // Define a cor de fundo como branco
        barStyle="dark-content" // Define o estilo das letras como preto
      />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', top: 10, padding: 20, borderBottomColor: '#000', borderBottomWidth: 1, width: '80%'}}>
            <Image source={market} style={{width: 180, height: 180}}/>    
            <Text style={{fontSize: 30, fontWeight: '700'}}>Mercado do ASA Branca</Text>
        </View>
        </View>

            <View style={{top: 20, flexDirection: 'row',padding: 10, alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={styles.square}>
                <Image source={counter} style={{width: 80, height: 80}}/>
                    <View style={{top: 10, alignItems: 'center'}}>
                        <Text style={{fontSize: 16, fontWeight: '500'}}>N° de postos de venda</Text>
                        <Text style={{fontSize: 18, fontWeight: '900'}}>600</Text>
                    </View>  
            </View>

            <View style={styles.square}>
                <Image source={measure} style={{width: 80, height: 80}}/>
                    <View style={{top: 10, alignItems: 'center'}}>
                        <Text style={{fontSize: 16, fontWeight: '500'}}>Dimensão do mercado</Text>
                        <Text style={{fontSize: 18, fontWeight: '900'}}>800 km²</Text>
                    </View>  
            </View>

            <View style={styles.square}>
                <Image source={calendar} style={{width: 80, height: 80}}/>
                    <View style={{top: 10, alignItems: 'center'}}>
                        <Text style={{fontSize: 16, fontWeight: '500'}}>Horário de Funcionamento</Text>
                        <Text style={{fontSize: 18, fontWeight: '900'}}>seg-sex (8h-18h)</Text>
                    </View>  
            </View>
            </View>

            <View style={{top: 60, alignItems: 'center'}}>
            <Image source={fichIcon} style={{width: 120, height: 120}}/>
                <TouchableOpacity onPress={() => navigation.navigate('GerarFixas')} style={{width: '40%', height: '20%', backgroundColor: '#FD4E05', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>Emitir fixas</Text>
                </TouchableOpacity>
            </View>

        <View style={{top: -40}}>
            <Table borderStyle={styles.border}>
                <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
                <Rows data={tableData} textStyle={styles.rowText} />
            </Table>
        </View>    

        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 40}}>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={location} style={{width: 30, height: 30, bottom: 5}}/>
                        <Text style={{color: 'blue', fontSize: 18, fontWeight: '400'}}>Ver Localizção do mercado</Text>
                </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("InfTotal")} style={{width: '40%', height: '34%', backgroundColor: '#EE132B', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>Informações de venda completa</Text>
                </TouchableOpacity>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1E1EF",
  },
  square: {
    width: 250, // Largura do quadrado
    height: 200, // Altura do quadrado
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Cor de fundo do quadrado (altere para a cor desejada)
    margin: 10, // Espaçamento entre os quadrados
    borderRadius: 25, // Valor da borda para criar o efeito arredondado
    shadowColor: 'black',      
    shadowOffset: {
      width: 5,
      height: 8,               
    },
    shadowRadius: 6,           
    shadowOpacity: 0.8,        
    elevation: 8,
  },
  // Estilo para o cabeçalho da tabela
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { margin: 6, textAlign: 'center', fontWeight: 'bold' }, // Adicione negrito ou outros estilos conforme necessário
  // Estilo para as linhas de dados
  rowText: { margin: 6, textAlign: 'center' },
  border: { borderWidth: 1, borderColor: '#c8e1ff' },
  // ... outros estilos ...
});
