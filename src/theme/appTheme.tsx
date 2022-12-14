
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#000',
        
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'

    },
    resultado: {
        color: '#FFF',
        fontSize: 50, 
        textAlign: 'right',
        marginBottom: 10
    },
    resultadoPequeno: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30, 
        textAlign: 'right'
    },
    fila:{
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 18,
        paddingHorizontal: 20  
    },

});