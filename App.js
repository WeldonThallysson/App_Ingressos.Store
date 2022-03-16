# Ingressos.Store
import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//importação dos documentos onde estão as telas!
import Home from './src/components/Home';
import Fp from './src/components/Formas_Pagamentos';
import PgCartao from './src/components/Pagamento_Cartão';
import PgBoleto from './src/components/Pagamento_Boleto';
import TelaPix from './src/components/TelaPix';
import Finalizado from './src/components/Finalizado';

//empilhamento das Telas
class app4 extends Component{
  render(){
    return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Ingressos .Store" component={Home}
              options={{
                title:"Ingressos .Store",
                headerStyle:{
                  backgroundColor:'#1c1c1c',

                },
                headerTintColor:"#FF8C00",
                headerTitleStyle:{
                  fontSize: 25,
                  fontWeight:'bold',
                  alignText: 'center',
                  fontFamily:'Signature'
                }
              }}
            />
            <Stack.Screen 
              name="Formas de Pagamentos" component={Fp}
              options={{
                title: 'Formas de Pagamento',
                headerStyle:{
                  backgroundColor:'#1c1c1c'
                },
                headerTintColor:'#FF8C00',
                headerTitleStyle:{
                  fontSize: 25,
                  fontWeight:'bold',
                  alignText:'center'
                }
                
              }}
            />
            <Stack.Screen
              name="Cadastro do Cartão" component={PgCartao}
              options={{
                title: 'Cadastre e Finalize a Compra',
                headerStyle:{
                  backgroundColor:'#1c1c1c',
                },
                headerTintColor:'#FF8C00',
                headerTitleStyle:{
                  fontSize:20,
                  fontWeight:'bold',
                  alignText:'center'
                }
              }}

            />
            <Stack.Screen
              name="Gere o Boleto e Finalize o Pagamento" component={PgBoleto}
              options={{
                title:'Gerar o Boleto e Confirmar Compra',
                headerStyle:{
                  backgroundColor:'#1c1c1c'
                },
                headerTintColor:"#FF8C00",
                headerTitleStyle:{
                  fontSize:15,
                  fontWeight:'bold',
                  alignText:'center'
                }
              }}
            />
            <Stack.Screen
              name="Pix" component={TelaPix}
              options={{
                title:"Pix",
                headerStyle:{
                  backgroundColor:'#1c1c1c'
                },
                headerTintColor:"#FF8C00",
                headerTitleStyle:{
                  fontSize: 25,
                  fontWeight:'bold'
                }
              }}

            />
            <Stack.Screen
              name="Finalizado" component={Finalizado}
              options={{
                title:'Compra Finalizada',
                headerStyle:{
                  backgroundColor:'#1c1c1c'
                },
                headerTintColor:'#FF8C00',
                headerTitleStyle:{
                  fontSize: 15,
                  fontWeight:'bold',

                }
                

              }}
              
            />
       

          </Stack.Navigator>
        </NavigationContainer>

      );
  }
}

export default app4;

