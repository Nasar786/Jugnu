/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
SafeAreaView,
View,
Text,
TextInput,
TouchableOpacity,
Image, 
Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class LoginScreen extends Component {
 
state={
  number:'',
  Isclick:true,
  color:"#AFACAC"

}
  

  render() {
    return (
<SafeAreaView style={{width:"100%", height:"100%", backgroundColor:'white'}}>
<View style={{width:"100%", height:150, backgroundColor:'#312167',
  alignItems:'center', }}>
        
        <Image style={{width:"100%",alignSelf:'center',  }}
        source={require("../assets/welcome.png")}>     
        </Image>
        <Text style={{fontSize:25, color:'white', 
        marginTop:-38}}> Welcome!</Text>
      </View>
      
      <View style={{width:"80%", height:screenHeight/1.5, backgroundColor:'white',
      shadowColor:"#000",shadowOffset:{width:0, height:3},shadowOpacity:2,
      shadowRadius:5,elevation: 8,
      marginTop:-30,alignSelf:'center',alignItems:'center'}}>
        <Text style={{fontSize:16, color:"#AFACAC",marginTop:70 }}>Please enter your number to start</Text>
        
        <TextInput style={{fontSize:16,width:"80%",height:40, color:"#AFACAC",
         borderColor:"#D9D2D2", borderWidth:1,marginTop:8, borderRadius:3 }}
        placeholder='eg, 0300-1234567'
        keyboardType={'numeric'}
        maxLength={11}
        onChangeText={number =>{
          this.setState({number})
          if(number.length<11 || number ==""){
            this.setState({
              Isclick:true,
              color:"#AFACAC"
            })
          }else{
            this.setState({
              Isclick:false,
              color:"#312167",
            })
          }
        }}>
          
        </TextInput>

       
  <TouchableOpacity style={{width:130, height:40,
  backgroundColor:this.state.color,
   marginTop:130,alignSelf:'center',
        justifyContent:'center', alignItems:'center', }}
        disabled={this.state.Isclick}
        onPress={()=>{
            this.props.navigation.navigate('LoginValidate')
        }}>
  <Text style={{fontSize:18, color:'white' }}>Get Started</Text>       
    </TouchableOpacity>

      </View>  
  
</SafeAreaView>
    );
  }
}
