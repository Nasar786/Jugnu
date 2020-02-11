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

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class CreatePassword extends Component {

    state = {
        number: '',
        Isclick: true,
        color: "#AFACAC",


    }



    render() {

        return (
            <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: 'white' }}>

                <View style={{
                    width: "100%", flexDirection: 'row', height: 50,
                     backgroundColor: '#312167',
                    alignItems: 'center', justifyContent: 'center',
                }}>

                    <View style={{
                        alignItems: 'flex-start', width: "20%", height: 30,
                        justifyContent: 'center', marginLeft: screenWidth / -5,
                       
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
                        }}> Create Password</Text>
                    </View>

                </View>





                <View style={{
                    width: "100%", height: screenHeight / 1.1, backgroundColor: 'white',
                    alignItems: 'center', justifyContent: 'center',
                }}>




                    <Text style={{ fontSize: 18, color: "#989696",width:"80%" }}>
                        Create a password of minimum 8 characters
                         (must include 1 number)</Text>



                        <TextInput style={{fontSize:16,width:"80%",height:40, color:"#AFACAC",
         borderColor:"#D9D2D2", borderWidth:1,marginTop:screenHeight/30, borderRadius:3 }}
        placeholder='Enter Password'
        onChangeText={number =>{
        }}>
          
        </TextInput>


            

        <TextInput style={{fontSize:16,width:"80%",height:40, color:"#AFACAC",
         borderColor:"#D9D2D2", borderWidth:1,marginTop:screenHeight/30, borderRadius:3 }}
        placeholder='Re-Enter Password'
        onChangeText={number =>{
        }}>
          
        </TextInput>



                    <TouchableOpacity style={{
                        width:"70%", height: 40,
                        backgroundColor: '#312167',
                        marginTop: screenHeight / 8, alignSelf: 'center',
                        justifyContent: 'center', alignItems: 'center',
                        borderWidth:1, borderRadius:3, marginBottom:15,
                    }}
                        //  disabled={this.state.Isclick}
                        onPress={() => {
                            this.props.navigation.navigate('ProfileScreen')
                        }}>
                        <Text style={{ fontSize: 18, color: 'white' }}>Done</Text>
                    </TouchableOpacity>


                    <Image style={{ width:130,height:130,
                        marginTop:screenHeight/14,
                      }}
                        source={require("../assets/passwordScreen.png")}>
                    </Image>

                </View>
            </SafeAreaView>
        );
    }
}

