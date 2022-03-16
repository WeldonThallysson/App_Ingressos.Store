# Ingressos.Store# Ingressos.Store
Aplicativo De Ingressos

import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';

// Tela forma de pagamento no cartão 
// usei texts inputs para entrada de informações dos usuarios
// usei um componente funcional resgatando o navigation
// usei tambem botões do tipo TouchableOpacity .

function Pagamento_Cartão({ navigation }){
		return(

				<KeyboardAvoidingView style={Estilos.ConteinerGlobal}>

				  <View style={Estilos.ConteinerTextoTopo}>
					<Text style={Estilos.Texto_Topo}>Cadastre o Cartão </Text>
				  </View>	

				 <View style={Estilos.ConteinerGeralTextoEntrada}> 	
				  
				    <View style={Estilos.ConteinerTextoEntrada}>
					 <TextInput 
					  style={Estilos.TextoEntrada}
					  onChangeText={() => {}}
					  keyboardType="numeric"
					  placeholder='Numero do Cartão'></TextInput>
					</View>
					
					<View  style={Estilos.ConteinerTextoEntrada}>
					 <TextInput 
					  onChangeText={() => {}}
					  keyboardType="numeric"
					  style={Estilos.TextoEntrada}
					  placeholder='Numero de Titular do Cartão'></TextInput>
					</View>
					
					<View  style={Estilos.ConteinerTextoEntrada}>
					 <TextInput 
					 keyboardType='numeric'
					  onChangeText={() => {}}
					  style={Estilos.TextoEntrada}
					  placeholder='mm/aaa d'></TextInput>
					</View>
					
					<View  style={Estilos.ConteinerTextoEntrada}>
					 <TextInput 
					  keyboardType='numeric'
					  onChangeText={() => {}}
					  style={Estilos.TextoEntrada}
					  placeholder='Cvc do Cartão'></TextInput>
					</View>

					<View style={Estilos.ConteinerTextoEntrada}>
					 <TextInput 
					  onChangeText={() => {}}
					  style={Estilos.TextoEntrada}
					  keyboardType='numeric'
					placeholder='Quantidade de Ingressos'></TextInput>
					</View>
					
	
			
			     </View>

					<View style={Estilos.ConteinerBotao}>
					
						<TouchableOpacity style={Estilos.Botao}onPress={() => navigation.navigate('Finalizado')}>
							<Text style={Estilos.Texto_Botao}>Finalizar Compra</Text>			
						</TouchableOpacity>

					</View>
				
				</KeyboardAvoidingView>
			);	
	}



export default Pagamento_Cartão;

const Estilos = StyleSheet.create({

	ConteinerGlobal:{
		flex:1,
		alignItems:'flex-start',
		marginTop: 15,
		marginHorizontal:5
	},
	ConteinerTextoTopo:{

		backgroundColor:"#363636",
		width: 240,
		height:40,
		borderRadius: 5,
		marginBottom: 10,
		padding: 5

	},
 	Texto_Topo:{
 		fontSize: 20,
 		fontWeight:'bold',
 		color:'#FF8C00',
 		textAlign:'center',
	},
	ConteinerGeralTextoEntrada:{
		flex:2,
		marginTop:5,
		padding:5,
		
	},
	ConteinerTextoEntrada:{
	   paddingBottom:25,
	   width: 300

	},
	TextoEntrada:{
		borderWidth: 1,
		borderColor:'#363636',
		borderRadius: 5,
		padding:10


	},
	ConteinerBotao:{
		 flex: 1,
		 height: 80,
		 width: 300,
		 marginHorizontal: 20,
		 marginVertical: -280,
		   

	},
	Botao:{
		padding: 20,
		backgroundColor:'#363636',
		borderRadius: 5

	},
	Texto_Botao: {
		textAlign:'center',
		color:'#FF8C00',
		fontSize: 15,
		fontWeight:'bold'
	}



});
