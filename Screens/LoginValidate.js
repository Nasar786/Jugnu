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
Dimensions,
StyleSheet,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const timer = require('react-native-timer');

export default class LoginValidate extends Component {
 
state={
  number:'',
  Isclick:true,
  color:"#AFACAC",
  timer: 5,
  
}


componentDidMount() {
    this.Interval = setInterval(this.tick, 1000);
 
  }

  tick =() => {
    this.setState({
      timer: this.state.timer - 1
    });
    if (this.state.timer==0){
        clearInterval(this.Interval);
        this.setState({
          Isclick:false,
          color:"#312167"
        });
         
    }
  }


  render() {

 return (
<SafeAreaView style={{width:"100%", height:"100%", backgroundColor:'white'}}>
  
<View style={{width:"100%", height: 50, backgroundColor:'#312167',
  alignItems:'center', justifyContent: 'center', }}>
               
        <Text style={{fontSize:25, color:'white', 
        }}> Verification</Text>
      </View>
      
     
   


      <View style={{width:"100%", height: screenHeight / 1.1, backgroundColor:'white',
  alignItems:'center', justifyContent: 'center', }}>
               
        <Text style={{fontSize:16, color:"#989696",}}>
             You will receive a verification code</Text>
         <Text style={{fontSize:16, color:"#989696",}}>
             through SMS on 0300-1234567</Text>
      


    <OTPInputView
    style={{width: '60%', height: screenHeight / 10,marginTop:screenHeight / 15, 
     }}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>


<Text style={{color:"#312167", fontSize:16, marginTop:screenHeight/8}}> Resend code in 0:{this.state.timer} </Text>
      
      
      <TouchableOpacity style={{width:130, height:40,
  backgroundColor:this.state.color,
   marginBottom:screenHeight/20, alignSelf:'center',
        justifyContent:'center', alignItems:'center', }}
       disabled={this.state.Isclick}
        onPress={()=>{
         this.props.navigation.navigate('PasswordScreen') 
        }}>
  <Text style={{fontSize:18, color:'white' }}>Resend</Text>       
    </TouchableOpacity>
      
   
   <Image style={{width:170, height:170,resizeMode:'contain'}}
   source={require("../assets/VerificationScreen.png")}>
   </Image>
   
    </View>
</SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45,
      borderColor:'red',
      borderWidth:3,
     },
  
    borderStyleHighLighted: {
      borderColor: "#312167",
    
   
    },
  
    underlineStyleBase: {
        fontSize:30,
      width: screenWidth/8,
      height: screenHeight/8,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: "#989696",
    
    },
  
    underlineStyleHighLighted: {
      borderColor: "#312167",
      
    },
  });
