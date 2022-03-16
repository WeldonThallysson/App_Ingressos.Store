# Ingressos.Store
# Ingressos.Store
Aplicativo De Ingressos
import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Alert,Image} from 'react-native';
	
//Tela de Compra Finalizada 

	const IngressosStore = require('../../imgs/IngressosStore.png')

  const GeradordoCodigo = () => {
  	var numRandom = Math.floor(Math.random() * 10);

  	var Codigos = Array();
  	Codigos[0] = 'KYWSE-389-90';
  	Codigos[1] = 'TRYSW-280-70';
  	Codigos[2] = 'SHQIO-450-12';
  	Codigos[3] = 'QUTYO-145-40';
  	Codigos[4] = 'KQYTW-850-12';
  	Codigos[6] = 'CVBNM-123-77';
	Codigos[7] = 'ASDFH-345-09';
	Codigos[8] = 'LIJKH-801-84';
	Codigos[9] = 'CSAGO-211-29';
	Codigos[10] = 'IGOFF-090-07';

  var CodigoEscolhido = Codigos[numRandom];
  	
  	Alert.alert('Seu Código Do Ingresso',CodigoEscolhido);
  }

function Finalizado({ navigation }){
		return(

			   <View style={Estilo.conteinerGlobal}>
					
					<View style={Estilo.conteinerTxtPrincipal}>
					  <Text style={Estilo.txtPrincipal}>Pagamento Realizado Com Sucesso !</Text>
					</View>
					
					<Image source={IngressosStore} style={{width: 340,height: 200}}/>
						
						<View style={{ marginBottom: 5}}>
						  <Text style={{fontWeight:'bold',fontSize: 18}}>Obrigado pela Preferência</Text>
						</View>


					
					 <Text style={{fontSize: 14,fontWeight:'bold'}}>Pressione o botão para Receber Seu Código do Ingresso</Text>

					<TouchableOpacity onPress={GeradordoCodigo} style={Estilo.Botao}>
					  <Text style={Estilo.Texto_Botao}>Receber Código do Ingresso</Text>
					</TouchableOpacity>

				</View>
	    );	
	}


export default Finalizado;

const Estilo = StyleSheet.create({
	conteinerGlobal:{
		flex:1,
		marginTop: 100,
		alignItems:'center',
},
	conteinerTxtPrincipal:{
		marginBottom: - 45,
		backgroundColor:'#363636',
		borderRadius: 3,


	},
	
	txtPrincipal:{
		fontSize: 15,
		textAlign:'center',
		padding: 10,
		fontWeight: 'bold',
		color:"#FF8C00"
	},
	Botao:{
		backgroundColor: "#363636", 
		borderRadius: 5,
		padding: 5,
		marginTop: 25,
	},
	Texto_Botao:{
		padding: 5,
		fontWeight:'bold',
		color:"#FF8C00"
	},

})
