import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import ResultImc from "../ResultImc";

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
            setMessageImc(`Seu IMC é igual: ${resultImc}`)
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
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Digite sua altura"
                    keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Digite seu peso"
                    keyboardType="numeric"
                />
                <Button
                    title={textButton}
                    onPress={validationImc}
                />
            </View>
            <ResultImc
                messageResultImc={messageImc}
                resultImc={imc}
            />
        </View>
    );
}
