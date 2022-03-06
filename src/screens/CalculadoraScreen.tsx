import React  from 'react'
import { View, Text } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';



export const CalculadoraScreen = () => {

    const { Limpiar,
        ArmarNumero,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        numero,
        numeroAnterior } = useCalculadora()

    /*const btnDelete = () => {
        
        // Si hay un cero con simbolo menos 
        if(numero.includes('-') && numero.includes('0') && numero.length === 2){

            setNumero('0');
        }
        // Si no es un cero y hay un simbolo menos
        else if(!numero.includes('0') && numero.includes('-') && numero.length === 2){

            setNumero('0');
        }
        // Si no es un cero y es el unico numero
        else if(!numero.includes('0') && numero.length === 1){

            setNumero('0');
        }     
         else {
            // Borra los numeros uno por uno
            setNumero(numero.slice(0, numero.length-1))
        }
            
    }*/

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }
            
            <Text style={styles.resultado}  numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>

            <View style={styles.fila}>
                <ButtonCalc texto="C" color="#9B9B9B" action={Limpiar}/>
                <ButtonCalc texto="+/-" color="#9B9B9B" action={positivoNegativo}/>
                <ButtonCalc texto="del" color="#9B9B9B" action={btnDelete}/>
                <ButtonCalc texto="/" color="#FF9427" action={btnDividir}/>              
            </View>
            <View style={styles.fila}>
                <ButtonCalc texto="7" action={ArmarNumero}/>
                <ButtonCalc texto="8" action={ArmarNumero}/>
                <ButtonCalc texto="9" action={ArmarNumero}/>
                <ButtonCalc texto="X" color="#FF9427" action={btnMultiplicar}/>              
            </View>
            <View style={styles.fila}>
                <ButtonCalc texto="4" action={ArmarNumero}/>
                <ButtonCalc texto="5" action={ArmarNumero}/>
                <ButtonCalc texto="6" action={ArmarNumero}/>
                <ButtonCalc texto="-" color="#FF9427" action={btnRestar}/>              
            </View> 
            <View style={styles.fila}>
                <ButtonCalc texto="1" action={ArmarNumero}/>
                <ButtonCalc texto="2" action={ArmarNumero}/>
                <ButtonCalc texto="3" action={ArmarNumero}/>
                <ButtonCalc texto="+" color="#FF9427" action={btnSumar}/>              
            </View> 
            <View style={styles.fila}>
                <ButtonCalc texto="0" action={ArmarNumero} ancho />  
                <ButtonCalc texto="." action={ArmarNumero} />
                <ButtonCalc texto="=" color="#FF9427" action={calcular}/>              
            </View>  
        </View>
    )
}
