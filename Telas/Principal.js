import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Entypo, MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";


import Mercado from "./Mercado";
import CadastrarMercado from "./CadastrarMercado";

import fichIcon from "../Imagens/ficha.png";
import dottedline from "../Imagens/dashed-line.png";
import qrCode from "../Imagens/qr-code.png";
import cazengaIMG from "../Imagens/cazengaIMG.png";

export default function Principal({ navigation }) {
  const [verify, setVerify] = useState(false);

  function verifyFunction() {
    setVerify(!verify);
  }
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="white" // Define a cor de fundo como branco
        barStyle="dark-content" // Define o estilo das letras como preto
      />

      <View
        style={{
          height: "30%",
          backgroundColor: "#FD230C",
          borderBottomRightRadius: 60,
          borderBottomLeftRadius: 60,
        }}
      >
        <View style={styles.containerFixa}>
          <View style={styles.containerText}>
            <View
              style={{
                flexDirection: "row",
                width: "99%",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "500", color: "#000" }}>
                Valor Estabelecido
              </Text>
              <TouchableOpacity onPress={() => verifyFunction()}>
                {verify ? (
                  <Ionicons name="eye-sharp" size={30} color="#000" />
                ) : (
                  <Entypo name="eye-with-line" size={30} color="#000" />
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "50%",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              <Image source={fichIcon} style={{ width: 120, height: 120 }} />
              {verify ? (
                <Text
                  style={{
                    fontSize: 35,
                    fontWeight: "600",
                    marginBottom: 30,
                    color: "#000",
                  }}
                >
                  400Kzs
                </Text>
              ) : (
                <Image
                  source={dottedline}
                  style={{ width: 120, height: 120 }}
                />
              )}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                bottom: 20,
              }}
            >
              <TouchableOpacity style={styles.btnValorFicha}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  Mudar o valor da ficha
                </Text>
              </TouchableOpacity>
              <Image source={qrCode} style={{ width: 50, height: 50 }} />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 30,
          top: 20,
        }}
      >
        <Text style={styles.text}>Mercados</Text>
        <Text
          style={{
            width: "80%",
            borderTopWidth: 1,
            borderTopColor: "#000",
            height: 1,
          }}
        ></Text>
      </View>

      <View
        style={{
          flexDirection: "row-reverse",
          paddingLeft: 25,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.txt}>03 </Text>
          <Text
            style={{ alignSelf: "center", fontSize: 16, fontWeight: "300" }}
          >
            mercados cadastrados
          </Text>
        </View>
        <Entypo
          name="select-arrows"
          size={35}
          color="blue"
          style={{ top: 20, padding: 20 }}
        />
      </View>

      <ScrollView contentContainerStyle={{ alignItems: "center",  flexGrow: 1}}>
        <View style={styles.containerMercado}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Ionicons
              name="information-circle"
              size={33}
              color="black"
              style={{ marginRight: 20 }}
            />
            <Text style={styles.txt}>Kikolo</Text>
          </View>
          <View>
            <Text style={styles.txt}>n° de postos de venda</Text>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "300",
                top: 5,
              }}
            >
              1.500
            </Text>
          </View>
          <MaterialIcons name="arrow-right-alt" size={30} color="black" />
        </View>

        <View style={styles.containerMercado}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Ionicons
              name="information-circle"
              size={33}
              color="black"
              style={{ marginRight: 20 }}
            />
            <Text style={styles.txt}>Kikolo</Text>
          </View>
          <View>
            <Text style={styles.txt}>n° de postos de venda</Text>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "300",
                top: 5,
              }}
            >
              1.500
            </Text>
          </View>
          <MaterialIcons name="arrow-right-alt" size={30} color="black" />
        </View>


        <View style={styles.containerMercado}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Ionicons
              name="information-circle"
              size={33}
              color="black"
              style={{ marginRight: 20 }}
            />
            <Text style={styles.txt}>Kikolo</Text>
          </View>
          <View>
            <Text style={styles.txt}>n° de postos de venda</Text>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "300",
                top: 5,
              }}
            >
              1.500
            </Text>
          </View>
          <MaterialIcons name="arrow-right-alt" size={30} color="black" />
        </View>

        <TouchableOpacity
          style={styles.containerMercado}
          onPress={() => navigation.navigate("Mercado")}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Ionicons
              name="information-circle"
              size={33}
              color="black"
              style={{ marginRight: 20 }}
            />
            <Text style={styles.txt}>ASA Branca</Text>
          </View>
          <View>
            <Text style={styles.txt}>n° de postos de venda</Text>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "300",
                top: 5,
              }}
            >
              1.500
            </Text>
          </View>
          <MaterialIcons name="arrow-right-alt" size={30} color="black" />
        </TouchableOpacity>

        <View style={styles.containerMercado}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Ionicons
              name="information-circle"
              size={33}
              color="black"
              style={{ marginRight: 20 }}
            />
            <Text style={styles.txt}>Skwanza</Text>
          </View>
          <View>
            <Text style={styles.txt}>n° de postos de venda</Text>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "300",
                top: 5,
              }}
            >
              1.500
            </Text>
          </View>
          <MaterialIcons name="arrow-right-alt" size={30} color="black" />
        </View>

        <View style={styles.containerMercado}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Ionicons
              name="information-circle"
              size={33}
              color="black"
              style={{ marginRight: 20 }}
            />
            <Text style={styles.txt}>Skwanza</Text>
          </View>
          <View>
            <Text style={styles.txt}>n° de postos de venda</Text>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "300",
                top: 5,
              }}
            >
              1.500
            </Text>
          </View>
          <MaterialIcons name="arrow-right-alt" size={30} color="black" />
        </View>
      </ScrollView>

        <View
          style={{
            padding: 20,
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            top: 100
          }}
        >
          <AntDesign name="infocirlceo" size={24} color="black" />
          <Text
            style={{
              padding: 10,
              alignSelf: "center",
              fontSize: 16,
              fontWeight: "300",
              top: 5,
            }}
          >
            O valor da ficha apresentado no card acima, é o valor emitido nas
            fichas e usado para o cálculo básico de valores.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row-reverse",
            padding: 20,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            top: 40
          }}
        >
          <TouchableOpacity
            onPress={()=> navigation.navigate("CadastrarMercado")}
            style={{
              borderRadius: 10,
              height: "35%",
              justifyContent: "center",
              alignItems: "center",
              width: "35%",
              backgroundColor: "#EE132B",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>
              Cadastrar um novo mercado
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Image source={cazengaIMG} style={{ width: 100, height: 100 }} />
          </View>
        </View>
        <Text style={{ bottom: 15, alignSelf: "center"}}>©Governo de Luanda, 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1E1EF",
  },
  text: {
    marginRight: 20,
    paddingLeft: 40,
    fontSize: 20,
    fontWeight: "500",
  },
  containerFixa: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    width: "75%",
    height: "80%",
    borderRadius: 30,
    marginTop: 50,
    marginBottom: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 8,
    },
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 8,
  },
  containerText: {
    justifyContent: "center",
    padding: 40,
  },
  btnValorFicha: {
    backgroundColor: "#27CC58",
    width: "40%",
    height: "55%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  containerMercado: {
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: 40,
    width: "85%",
    height: "11%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  txt: {
    fontSize: 22,
    fontWeight: "400",
  },
});
