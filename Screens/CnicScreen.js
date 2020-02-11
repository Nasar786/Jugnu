import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
//import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class CnicScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filePath1: require("../assets/nic.jpg"),
      filePath2: require("../assets/nic.jpg") 
    };
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
            alignItems: 'flex-start', width: "20%", height: 60,
            justifyContent: 'center', marginLeft: screenWidth / -4,

          }}>
            <TouchableOpacity style={{}}
              //  disabled={this.state.Isclick}
              onPress={() => {
                this.props.navigation.navigate('LoginValidate')
              }}>
              <Text style={{ fontSize: 34, color: 'white', marginBottom: 6, }}> {'<'} </Text>
            </TouchableOpacity>
          </View>


          <View style={{
            marginLeft: screenWidth / 20,
            justifyContent: 'center',
          }}>
            <Text style={{
              fontSize: 25, color: 'white',
              textAlign: 'center',
            }}> CNIC Photo</Text>
          </View>

        </View>

        <View style={{
          width: "100%", height:"100%", backgroundColor: 'white',alignSelf:'center',
          alignItems: 'center', justifyContent: 'center',
        }}>

          <Text
            style={{ fontSize: 18, color: "#989696", 
            marginTop:screenHeight/40, alignSelf:'center' }}>Take FRONT and BACK photos of CNIC </Text>

        

      

<View style=
              {{
                width: 240,
                height: 150,
                alignItems: 'center',
                marginTop:screenHeight /20,
                borderRadius:5,
                borderBottomColor: 'white',
              }}>

<TouchableOpacity style={{backgroundColor: "#312167",
                  width:"99%",
                  height:50,
                  //marginTop: screenHeight/-13.5,
                  opacity: 0.7,
                  zIndex:999,
                  bottom:-1,
                  position: 'absolute',
                  justifyContent: 'center',
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                }}

                onPress={() => {
                  ImagePicker.openCamera({
                    width: 240,
                    height: 150,                         
                    cropping: true,
                    includeBase64:true,
                    showCropFrame:true,
                    hideBottomControls:true,
                    cropperToolbarColor:"#312167",
                  }).then(image => {
                    console.log(image.path);
                    console.log(image);
                    let source = {uri: image.path}
                    this.setState({
                      filePath1:source
                    });
                  });
              
  }}>

             
                <Text
                  style={{
                    fontSize: 22, color: 'white',
                    alignSelf: 'center',
                  }}>
                  Take a Photo </Text>

              </TouchableOpacity>

              <Image
                source={this.state.filePath1}
                style={{
                  width: "99.5%",
                  height: 150,
                  borderRadius: 3,
                  resizeMode: 'contain'
                }} />        
              
            </View>


                
            <View style=
              {{
                width: 240,
                height: 150,
                alignItems: 'center',
                marginTop:screenHeight /20,
                borderRadius:5,
                borderBottomColor: 'white',
              }}>

<TouchableOpacity style={{backgroundColor: "#312167",
                  width:"99%",
                  height:50,
                  //marginTop: screenHeight/-13.5,
                  opacity: 0.7,
                  zIndex:999,
                  bottom:-1,
                  position: 'absolute',
                  justifyContent: 'center',
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                }}

                onPress={() => {
                  ImagePicker.openCamera({
                    width: 240,
                    height: 150,                         
                    cropping: true,
                    includeBase64:true,
                    showCropFrame:true,
                    hideBottomControls:true,
                    cropperToolbarColor:"#312167",
                  }).then(image => {
                    console.log(image.path);
                    console.log(image);
                    let source = {uri: image.path}
                    this.setState({
                      filePath2:source
                    });
                  });
              
  }}>

             
                <Text
                  style={{
                    fontSize: 22, color: 'white',
                    alignSelf: 'center',
                  }}>
                  Take a Photo </Text>

              </TouchableOpacity>

              <Image
                source={this.state.filePath2}
                style={{
                  width: "99.5%",
                  height: 150,
                  borderRadius: 3,
                  resizeMode: 'contain'
                }} />        
              
            </View>

      


            <TouchableOpacity style={{ width:"75%", height: 40,
                        backgroundColor: '#312167',
                        alignSelf: 'center',marginTop:screenHeight/10,
                        marginBottom:screenHeight/8,
                        justifyContent: 'center', alignItems: 'center',
                        borderWidth:1, borderRadius:3, 
                       }}

                        onPress={() => {
                          this.props.navigation.navigate('ActivationScreen')
                      }}><Text style={{color:'white', fontSize:20}}>Done</Text>
                   
  </TouchableOpacity>
            </View>
            
 
      </SafeAreaView>
    );
  }
}

