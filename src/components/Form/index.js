import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
    // Inicializa o estado da altura, peso, mensagem do IMC, valor do IMC e texto do botão.
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura!")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")

    function imcCalculator() {
        return (Number(weight) / (Number(height) * Number(height))).toFixed(2)
    }

    function validationImc() {
        if (weight && height) {
            const resultImc = imcCalculator()
            // Altera o estado do IMC para o valor calculado.
            setImc(resultImc)
            // Altera o estado da altura e do peso para vazio depois de calcular o IMC.
            setHeight("")
            setWeight("")
            // Altera a mensagem do IMC para mostrar o valor calculado do IMC.
            setMessageImc(`Seu IMC é igual:`)
            // Altera o texto do botão para "Calcular novamente".
            setTextButton("Calcular novamente")
            return
        }
        // Se a altura ou o peso não estiverem preenchidos, reseta o valor do IMC para null.
        setImc(null)
        // Altera o texto do botão para "Calcular IMC".
        setTextButton("Calcular IMC")
        // Altera a mensagem do IMC para solicitar o preenchimento do peso e da altura.
        setMessageImc("preencha o peso e a altura!")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Digite sua altura"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Digite seu peso"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={validationImc}

                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                <ResultImc
                    messageResultImc={messageImc}
                    contextImc={imc}
                />
            </View>
        </View>
    );
}
