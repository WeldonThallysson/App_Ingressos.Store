# Ingressos.Store
# Ingressos.Store
Aplicativo De Ingressos
import React,{useState} from 'react';
import {View,Text,TouchableOpacity,Alert,StyleSheet} from 'react-native';

//Tela Do Pix com Gerador de codigos proprio


  const GeradordoCodigo = () => {
  	 numRandom = Math.floor(Math.random() * 5);

  	var Codigos = Array();
  	Codigos[0] = 'KYWSE-389-90';
  	Codigos[1] = 'TRYSW-280-70';
  	Codigos[2] = 'SHQIO-450-12';
  	Codigos[3] = 'QUTYO-145-40';
  	Codigos[4] = 'KQYTW-850-12';


  var CodigoEscolhido = Codigos[numRandom];
  	
  	Alert.alert('Seu Código Do Ingresso',CodigoEscolhido);
  }



function TelaPix({ navigation }){
 	

				return(

				<View style={Estilo.Conteiner}>				
					<View style={Estilo.ConteinerPix}>
					 <Text style={Estilo.textoPix}>Pague no Pix</Text>
					</View>
					<Text style={Estilo.texto}>Codigo Pix: 70.586.333/0001-20</Text>

					<Text style={Estilo.textoP}>Assim que o Pagamento for efetuado pressione o botão</Text>

				
						
					


					<TouchableOpacity onPress={GeradordoCodigo} style={Estilo.botao}>						
						
						<Text style={Estilo.txtBotao}>Gerar Codigo do seu Ingresso</Text>

					</TouchableOpacity>
					

					
						
				</View>
			);	
	}



export default TelaPix;

const Estilo = StyleSheet.create({

	Conteiner:{
		flex: 1,
		alignItems:'center',
		justifyContent:'center',
		marginBottom: 100

	},
	textoPix:{
		fontSize: 25,
		fontWeight:'bold',
		padding: 8,
		marginBottom: 10,
		color:'#FF8C00',
		backgroundColor:'#363636',
		borderRadius:7

	},
	texto:{
		fontSize: 15,

		fontWeight: 'bold'
	},
	textoP:{
		fontWeight: 'bold',
		padding: 5
	},
	botao:{
		marginTop: 30,
		padding: 10,
		backgroundColor:'#363636',
		borderRadius: 7
	},
	txtBotao:{
		fontWeight:'bold',
		color:'#FFF'
	}

})
