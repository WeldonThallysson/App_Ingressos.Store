# Ingressos.Store
# Ingressos.Store
Aplicativo De Ingressos

import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Alert} from 'react-native';

// Tela do Boleto 
const mensagem = () => {

 var boleto = 'Boleto Enviado..';

Alert.alert(boleto);

}

function Pagamento_Boleto ({ navigation }){
		return(

				<View style={Estilo.ConteinerGlobal}>
				
					<View style={Estilo.ConteinerTxt}>
						<Text style={Estilo.txt}> Boleto</Text>
					</View>

					<Text style={{fontWeight:'bold',marginTop: 5}}>O Boleto será enviado para o Seu Email! </Text>
					
					<TextInput
					  style={Estilo.txtEmail}
					  onChangeText={() => {}}
					  placeholder="Digite Seu Email">
					 </TextInput>

					 <TouchableOpacity onPress={mensagem} style={Estilo.BotaoD}>
					 	
					 		<Text style={Estilo.TxtBotao}>Enviar Boleto</Text>
					 
					 </TouchableOpacity>

					 <TouchableOpacity 
					  onPress={() => navigation.navigate('Finalizado')}
					  style={Estilo.Botao}
					  >
					  	
					  	<Text style={Estilo.TxtBotao}>Confirmar Compra</Text>
					  </TouchableOpacity>





				</View>
			);	
	}


export default Pagamento_Boleto;

const Estilo = StyleSheet.create({

	ConteinerGlobal:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
        marginBottom:100	

	},
	ConteinerTxt:{
		width:150,
		height:35,
		backgroundColor: '#363636',
		marginBottom: 10,
		borderRadius: 7
	},
	txt:{
		fontSize:19,
		fontWeight:'bold',
		color:'#FF8C00',
		padding: 2,
		textAlign:'center',
	

	},
	BotaoD:{
		marginTop:30

	},
	Botao:{
	  	borderRadius: 4,
		marginTop:30,
		padding: 15,
		backgroundColor:"#363636",
	},
	TxtBotao:{
		color:'#FF8C00',
		fontWeight:'bold'
	},
	txtEmail:{

		borderRadius: 5,
		borderWidth: 0.6,
		borderColor:'#363636',
		width: 300
	}


})
