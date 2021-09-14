import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

// Preciso de ajuda em como fazer o submit;
// Como se faz link
// talvez mande mensagem novamente perguntando como se coloca mais ao centro ou não


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
                <TextInput
                    >
                </TextInput>
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
        justifyContent: "center",
    },
    acima:{
        // flex:
        flexDirection: "row",
        justifyContent: "center",
        //alignItems: "center",
        marginBottom: 70,
        marginRight: 60,
    },
    facebook:{
        fontFamily: "", 
        fontSize: 42.11,
        color: "white",
        // fontStyle: "black", não sei como deixar em negrito
        marginLeft: 15,
    },
    input:{
        // flex: 0.5,
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
    },
    campo:{
        backgroundColor: "#FFFFFF",
        height: 48,
        width: 320,
        // alignItems: "center",
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
    texto:{
        color: "#FFFFFF",
        textAlign: "center",
    },
    fds:{
        //justifyContent: "flex-end", como infernos eu mando essa poha para baixo vai pro caralho
    },
});
