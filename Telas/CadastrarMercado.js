import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const CadastrarMercado = () => {
  const [nomeMercado, setNomeMercado] = useState('');
  const [numPostosVenda, setNumPostosVenda] = useState('');
  const [dimensaoMercado, setDimensaoMercado] = useState('');
  const [horarioAtendimento, setHorarioAtendimento] = useState('');

  const handleSubmit = () => {
    console.log('Formulário enviado!');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nome do mercado"
        value={nomeMercado}
        onChangeText={(text) => setNomeMercado(text)}
        style={styles.input}
        underlineColor="#FD230C" // Cor da borda inferior quando focado
        theme={{ colors: { primary: '#FD230C' } }} // Cor do texto e do ícone
      />

      <TextInput
        label="Número de postos de venda"
        value={numPostosVenda}
        onChangeText={(text) => setNumPostosVenda(text)}
        style={styles.input}
        keyboardType="numeric"
        underlineColor="#FD230C" // Cor da borda inferior quando focado
        theme={{ colors: { primary: '#FD230C' } }} // Cor do texto e do ícone
      />

      <TextInput
        label="Dimensão do mercado"
        value={dimensaoMercado}
        onChangeText={(text) => setDimensaoMercado(text)}
        style={styles.input}
        underlineColor="#FD230C" // Cor da borda inferior quando focado
        theme={{ colors: { primary: '#FD230C' } }} // Cor do texto e do ícone
      />

      <TextInput
        label="Horário de atendimento(seg-sex/7h-18h)"
        value={horarioAtendimento}
        onChangeText={(text) => setHorarioAtendimento(text)}
        style={styles.input}
        underlineColor="#FD230C" // Cor da borda inferior quando focado
        theme={{ colors: { primary: '#FD230C' } }} // Cor do texto e do ícone
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.txtBtn}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E1E1EF"
  },
  input: {
    height: 80,
    marginBottom: 10,
    backgroundColor: '#FFF'
  },
  button: {
    marginTop: 16,
    height: '5%',
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "#EE132B",
    borderRadius: 10
  },
  txtBtn: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500'
  }
});

export default CadastrarMercado;
