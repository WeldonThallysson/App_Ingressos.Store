# Ingressos.Store
# Ingressos.Store
Aplicativo De Ingressos
import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet,FlatList} from 'react-native';

//Aqui é a Tela Inicial onde Está a Lista de Produtos com os Botôes de Comprar os Ingressos
//Abaixo está todos os Itens da FlatList(Lista Plana) 



const ingressos = [
 {
 	id:'001',
 	desc:['CineMark','(SP)','Shang-Chi','24,00 R$'],
 	image: "https://pbs.twimg.com/media/E7jF7W6X0AYucYc?format=jpg&name=medium"
 
},
{
	id:'002',
	desc:['TerraContry','(SP)','Zé Neto e Cristiano', '65,00 R$'],
	image:"https://cdn.violashow.com.br/img/eventos/flyers/2323.jpg"
},
{
	id:'003',
	desc:['CineMark','(SP)','Venom 2','25,00 R$'],
	 	image: "https://img.olhardigital.com.br/wp-content/uploads/2021/05/legiao_pyIbsqdSvHan.png.jpeg"
},
 {
	id:'004',
	desc:['Espaço Itau','(SP)','Escape Room 2:Tensão Maxima','21,00 R$'],
	image: "https://br.web.img3.acsta.net/pictures/21/07/05/16/57/2096962.jpg"
},
{
		id:'005',
		desc:['Cruzeiro Msc Preziosa', '(Alto Mar)','Wesleu Safadão: OnBoard','569,00 R$'],
		image: "https://assets.lojapromoacao.com.br/wp-content/uploads/2021/04/23152201/Tablet-4.jpg"
},
{
	id:'006',
	desc:['CineSystem','(SP)','Free Guy:Assumindo o Controle','20,00 R$'],
	 image: "https://br.web.img2.acsta.net/pictures/21/06/10/20/47/1652456.jpg"
},  
 {
   id:'007',
   desc:['CineSystem','(SP)','Pedro Coelho 2:O Fugitivo',' 20,00 R$'],
   image: "https://br.web.img3.acsta.net/pictures/19/10/18/16/49/5592014.jpg"
},
 {
   id:'008',
   desc:['Congresso Regional Universitário','(MG)','Tema: Gestão e Inovação','15,00 R$'],
    	image: "https://www.andifes.org.br/wp-content/uploads/2021/06/UFABC-300x300.jpg"

},
 {
   id:'009',
   desc:['Fortaleza','(CE)','Winderson Nunes: Adulto','60,00 R$'],
    	image: "https://media.fstatic.com/-Zgo6mxNj18_vrTNG4mqfH5HZV4=/290x478/smart/media/movies/covers/2019/08/bfd2d11f7b6a020b86f7b3aa0d6f970a59ac8b7d_s2_n2.jpg"

},
{
	id:'010',
	desc:['Espaço das Americas','(SP)','Jorge e Matheus','50,00 R$'],
	image:'https://www.programanapista.com.br/site/assets/ckfinder/core/connector/php/uploads/images/JEM_EDA%20Divulga%C3%A7%C3%A3o.jpg'
},

];

function Home({ navigation }) {
         return(
         	<View style={Estilo.conteinerGlobal}>
 	 				<FlatList
 	 				data={ingressos}
 	 				keyExtractor={item=>item.id}
 	 				renderItem={({item}) =>

						<View style={Estilo.lista}>
							
							<Image 
								source={{uri: item.image}}
								style={{width: 105,height:150,borderRadius: 7,marginHorizontal: 3
								}}
							/>	

						   	<View style={Estilo.Textos}>
							    <Text style={Estilo.lista_texto}>{item.desc[0]}{item.desc[1]} </Text>
							    <Text style={Estilo.lista_texto}> Ingresso </Text>
							    <Text style={Estilo.lista_texto}>{item.desc[2]}</Text>
							    <Text style={Estilo.lista_texto}> Valor: {item.desc[3]}</Text>
							      
							  </View>
				
							 <TouchableOpacity
							    style={Estilo.lista_botao}
							  	title="Comprar"
								  onPress={() => navigation.navigate('Formas de Pagamentos')}>

								  		<Text style={Estilo.TextBotao}>Comprar</Text>

								  		</TouchableOpacity>
						    
						  	
						  </View>


 	 			}

 	 			/>
 	 			</View>

			);
	}


export default Home;


const Estilo = StyleSheet.create({
	conteinerGlobal:{
		flex:1,
		backgroundColor:'#363636'
	},
   lista:{
   		flex:1,
   		justifyContent:'center',
   		alignItems:'center',
   		flexDirection:'row',
   		padding:10,
   		marginVertical:2,
   		marginHorizontal: 3,
   		borderBottomWidth: 5,
   		borderBottomColor:'#1C1C1C',
   		width: 350

   },
   Textos:{
   	width: 160,
   	height:150
   },
   lista_texto:{
   	fontSize:15,
   	padding:3,
   	textAlign:'left',
   	color:'#FF8C00',
   	fontWeight:'bold',
   	fontFamily:'Signature'
   },
   TextBotao:{
   	textAlign:'center',
   	fontSize: 17, 
   	fontWeight:'bold'
   },
   lista_botao:{
   	marginTop:120,
   	marginHorizontal: -10,
    borderRadius: 7,
    borderWidth:0.5,
    borderColor:'black',
   	width: 80,
    padding:5,
   	height: 35,
   	backgroundColor:'#FF8C00'
   }

});
