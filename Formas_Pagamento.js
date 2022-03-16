# Ingressos.Store
Aplicativo De Ingressos
import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';

//tela de formas de pagamentos

const Cartao = require('../../imgs/ImagemCartão.png');
const Boleto = require('../../imgs/ImagemBoleto.png');
const Pix = require('../../imgs/logo-pix.png');

function Formas_Pagamentos({ navigation }) {
		return(

				<View style={Estilo.ConteinerGeral}>
					
						<View style={Estilo.Conteiner_Texto}>
							<Text style={Estilo.Texto}>Escolha Sua Forma de Pagamento</Text>
						</View>

					
					 <View style={Estilo.Conteiner_Botoes}>

					 	<TouchableOpacity 
					 	   onPress={() => navigation.navigate('Cadastro do Cartão')} 
					 	   style={Estilo.Botoes}> 
					 	
					 		 <Text style={Estilo.Texto_Botao}>Cartão</Text>
					 		
					 		<Image source={Cartao} style={{width: 200,height:105}}/>					 		
					 	</TouchableOpacity>
					

					 	<TouchableOpacity 
					 		  onPress={() => navigation.navigate('Gere o Boleto e Finalize o Pagamento')} 
					 	      style={Estilo.Botoes}>
					 			
					 			<View style={{marginBottom: 5}}>
					 			 <Text style={Estilo.Texto_Botao}>Boleto</Text>
					 			</View>
					 		
					 		<Image source={Boleto} style={{width: 200,height:105}}/>
					 	</TouchableOpacity>

	
					
					
					</View>
					 	<TouchableOpacity 
					 		  onPress={() => navigation.navigate('Pix')} 
					 	      style={Estilo.Botoes}>
					 			
					 			<View style={{marginTop: 15}}>
					 			 <Text style={Estilo.Texto_Botao}>Pix</Text>
					 			</View>
					 		
					 		<Image source={Pix} style={{width: 200,height:100,borderRadius: 7,marginHorizontal: 1}}/>
					 	</TouchableOpacity>

				</View>
			)
				}



export default Formas_Pagamentos;

const Estilo = StyleSheet.create({

	ConteinerGeral:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		marginBottom: 10,
	
	},
	Conteiner_Texto:{
		
		marginTop: 150


	},

	Texto:{
	 fontSize:25,
	 textAlign:'center',
	 fontWeight:'bold',
     color:'#FF8C00'

	},

	Texto_Botao:{
		fontSize: 20,
		textAlign:'center',
		fontWeight:'bold',
		color:'black',
		marginBottom: 5
	},


	Conteiner_Botoes:{
		flex:2,
		marginTop: 80,
		marginLeft: 70,
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'row',
		 
	

	},

	Botoes:{

		width: 200,
		height: 200,

	}



});
