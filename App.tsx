import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

// "terminado"

export default function App() {
    return(
        <View style={styles.container}>
            <View style={styles.acima}>
                <Image source={
                    require("./src/imagens/facebook.png")}>
                </Image>
                <Text style={styles.facebook}>Facebook</Text>
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor ="#A19FA1"
                    style={styles.campo}>
                </TextInput>
                <TextInput
                    placeholder="Passoword"
                    placeholderTextColor="#A19FA1"
                    style={styles.campo}>                    
                </TextInput>
                <View style={styles.tanto}>
                    <Text style={{textAlign:"center",
                                  color:"white",
                                  fontSize: 25,
                                  fontFamily: "Roboto",
                                  //fontStyle: "bold" não exite a opção para colocar em negrito
                                }}>
                        Log In
                    </Text>
                </View>
            </View>
            
            <View style={styles.fds}>
                <Text style={styles.texto}>Sing Up for FaceBook</Text>        
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#465CB1",
        textAlign: "center",
        justifyContent: "space-between",
    },
    acima:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        marginTop: 90,
        marginRight: 60,
    },
    facebook:{
        fontSize: 42.11,
        color: "white",
        //fontStyle: "bold" não exite a opção para colocar em negrito
        marginLeft: 15,
    },
    input:{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 10,
    },
    campo:{
        backgroundColor: "#FFFFFF",
        height: 48,
        width: 320, //usei esse tamanho pois foi o melhor q ficou no celular para visulização
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    TextInput:{
        color: "#A19FA1",
        flex: 1,
        paddingRight: 20,
        fontSize: 16,
        fontFamily: "Roboto",
    },
    tanto:{
        width: 320, //usei esse tamanho pois foi o melhor q ficou no celular para visulização
        height: 48,
        textAlign: "center",
        backgroundColor: "#213873",
        justifyContent: "center",
    },
    texto:{
        color: "#FFFFFF",
        textAlign: "center",
    },
    fds:{
        justifyContent: "center", 
        marginBottom: 120,
        marginTop: 100,
    },
});