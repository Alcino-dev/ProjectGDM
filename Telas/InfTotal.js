import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import * as Animatable from 'react-native-animatable';
import { Modal, Portal, Button, Provider } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  selectorContainer: {
    width: 200,
    marginBottom: 20,
  },
  selectorText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  chartContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalCloseButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  modal: {
    width: '40%',
    marginLeft: 300
  },
  button: {
    top: 20,
    padding: 15,
    backgroundColor: '#E6E6E6',
    alignSelf: 'center',
    marginBottom: 15,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  text: {
    fontSize: 20,
    fontWeight: '400'
  }
});

export default function InfTotal() {
  const chartRef = useRef(null);
  const [selectedInterval, setSelectedInterval] = useState('semanal');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Dados do gráfico de exemplo
  const data = {
    semanal: {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43, 60],
        },
      ],
    },
    mensal: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        },
      ],
    },
  };

  useEffect(() => {
    // Adiciona uma animação de entrada ao gráfico quando o componente é montado
    if (chartRef.current) {
      chartRef.current.fadeIn(1000);
    }
  }, []);

  const selectedData = data[selectedInterval];

   function btnAction1 () {
    setSelectedInterval('semanal')
    setIsModalVisible(false)
   }

   function btnAction2 () {
    setSelectedInterval('mensal')
    setIsModalVisible(false)
   }

  return (
    <Provider>
      <View style={styles.container}>
        <Text style={styles.title}>Gráfico de Colunas</Text>
        <View style={styles.selectorContainer}>
          <View>
            <Text style={styles.selectorText} onPress={() => setIsModalVisible(true)}>
              {selectedInterval}
            </Text>
          </View>
          <Portal>
            <Modal style={styles.modal} visible={isModalVisible} onDismiss={() => setIsModalVisible(false)}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>Selecione o Intervalo:</Text>
                <TouchableOpacity style={styles.button} onPress={() => btnAction1()}><Text style={styles.text}>Semanal</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => btnAction2()}><Text style={styles.text}>Mensal</Text></TouchableOpacity>
                <Button style={styles.modalCloseButton} onPress={() => setIsModalVisible(false)}>
                  Fechar
                </Button>
              </View>
            </Modal>
          </Portal>
        </View>
        <Animatable.View style={styles.chartContainer} ref={chartRef} animation="fadeIn" duration={1000} delay={500}>
          <BarChart
            data={selectedData}
            width={880}
            height={400}
            yAxisLabel={'Kzs'}
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              color: () => `rgba(255, 127, 39, 1)`, // Cor laranja totalmente sólida
              labelColor: () => `rgba(0, 0, 0, 1)`, // Cor azul totalmente sólida
              style: {
                borderRadius: 10,
              },
              propsForLabels: {
                fontSize: 16,
                fontWeight: '500',
              },
            }}
          />
        </Animatable.View>
      </View>
    </Provider>
  );
}
