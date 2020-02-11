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
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class CreateProfile extends Component {

    state = {
        number: '',
        Isclick: true,
        color: "#AFACAC",


    }



    render() {

        return (
            <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: 'white' }}>

                <View style={{
                    width: "100%", flexDirection: 'row', height:50,
                     backgroundColor: '#312167',
                    alignItems: 'center', justifyContent: 'center',
                }}>

                    <View style={{
                        alignItems: 'flex-start', width: "20%", height: 60,
                        justifyContent: 'center', marginLeft: screenWidth / -4,
                      
                    }}>
                        <TouchableOpacity style={{}}
                            //  disabled={this.state.Isclick}
                            onPress={() => {
                                this.props.navigation.navigate('LoginValidate')
                            }}>
                            <Text style={{ fontSize: 34, color: 'white',marginBottom:6, }}> {'<'} </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginLeft: screenWidth / 20, 
                        justifyContent: 'center',  }}>
                        <Text style={{
                            fontSize: 25, color: 'white',
                            textAlign: 'center',
                        }}> Create Profile</Text>
                    </View>

                </View>





                <View style={{
                    width: "100%", height: screenHeight / 1.1, backgroundColor: 'white',
                    alignItems: 'center', justifyContent: 'center',
                }}>




                    <Text style={{ fontSize: 18, color: "#989696",width:"80%" }}>
                       Enter your name and CNIC No. to build
                    your profile</Text>



                        <TextInput style={{fontSize:16,width:"80%",height:40, color:"#AFACAC",
         borderColor:"#D9D2D2", borderWidth:1,marginTop:screenHeight/30, borderRadius:3 }}
        placeholder='Name'
        onChangeText={number =>{
        }}>
          
        </TextInput>


            

        <TextInput style={{fontSize:16,width:"80%",height:40, color:"#AFACAC",
         borderColor:"#D9D2D2", borderWidth:1,marginTop:screenHeight/30, borderRadius:3 }}
        placeholder='CNIC No.'
        keyboardType={'numeric'}
        maxLength={14}
        onChangeText={number =>{
        }}>
          
        </TextInput>



                    <TouchableOpacity style={{
                        width:"80%", height: 40,
                        backgroundColor: '#312167',
                        marginTop: screenHeight / 8, alignSelf: 'center',
                        justifyContent: 'center', alignItems: 'center',
                        borderWidth:1, borderRadius:3, marginBottom:screenHeight/3,
                    }}
                        //  disabled={this.state.Isclick}
                        onPress={() => {
                            this.props.navigation.navigate('CnicScreen')
                        }}>
                        <Text style={{ fontSize: 18, color: 'white' }}>Next</Text>
                    </TouchableOpacity>


                </View>
            </SafeAreaView>
        );
    }
}
