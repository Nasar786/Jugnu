import React, { Component } from 'react';
import { View,
Text,
SafeAreaView,
Dimensions,
Image,
TouchableOpacity } from 'react-native';
import database from '../database/database'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class ActivationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  
  }

componentDidMount(){
  database.dbinit();
}

  render() {
    return (
        <SafeAreaView style={{width:"100%", height:"100%", backgroundColor:'white'}}>
  
        <View style={{width:"100%", height: 50, backgroundColor:'#312167',
          alignItems:'center', justifyContent: 'center', }}>
                       
                <Text style={{fontSize:25, color:'white', 
                }}> Activation Pending</Text>
              </View>
      
        <View style={{width:"80%", backgroundColor:'white', height:screenHeight/1.3,
           justifyContent: 'center',alignSelf:'center' }}>
                       
                <Text style={{fontSize:22, color:'black', fontWeight:'bold', 
                }}> Your Account is Created</Text>

                <Text style={{fontSize:18, color:'black', marginTop:30  
                }}>You can start using Jugnu Dost very soon. 
                Your account is being verified by our team. We'll keep you updated!</Text>
             
              <Image
                  source={require('../assets/VerificationScreen.png')}
                  style={{
                    width: 220,
                    height: 160,
                    borderColor:'white',
                    borderWidth:1,
                    resizeMode: 'contain',
                    alignSelf:'center',
                    marginTop:50,
                  }} />

<TouchableOpacity style={{ width:"80%", height: 40,
                        backgroundColor: '#312167',
                        alignSelf: 'center',marginTop:screenHeight/15,
                         justifyContent: 'center', alignItems: 'center',
                        borderWidth:1, borderRadius:3, 
                       }}

                        onPress={() => {
                          this.props.navigation.navigate('')
                      }}><Text style={{color:'white', fontSize:20}}>Come Back Later</Text>
                   
  </TouchableOpacity>
      </View>
            
    
     </SafeAreaView>         
             
    );
  }
}
