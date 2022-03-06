import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    action: ( numeroTexto: string ) => void;
    
}

export const ButtonCalc = ({texto, color = '#2D2D2D', ancho = false, action}: Props) => {
    return (
        <TouchableOpacity onPress={() => action(texto)}>
            <View style={{
            ...styles.boton,  
            backgroundColor: color,
            width: (ancho)? 170 : 80}}>
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9B9B9B' ) ? '#000' : '#FFF'}}>{texto}</Text>
                </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: '#2D2D2D',
        marginHorizontal: 5
    },
    botonTexto: {
        textAlign: 'center',
        fontSize: 30,
        color: '#000',
        padding: 10,
        fontWeight: '300'
    }
});