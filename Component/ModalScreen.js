import React, { Component } from "react";
import { Button, Text, View, TouchableOpacity,StyleSheet } from "react-native";
import Modal from "react-native-modal";

//import { TouchableOpacity } from "react-native-gesture-handler";

var navigation;

 export default class ModalTester extends Component {


  state = {
    isModalVisible: false,
    message:'',
    opt1:'',
    opt2:'',
    opt3:'',
    opt1Screen:''

  };

  toggleModal = (value, message, opt1,opt2,opt3,nav) => {
    this.setState({ isModalVisible: value, message:message, opt1:opt1, opt2:opt2, opt3:opt3 });
    navigation=nav;
  };
  
  hideModal = () => this.setState({ isModalVisible: false })

  goToSecondScreen = () => {
    // First, hide the modal
    this.hideModal();
    // Then, navigate to your second screen
    //let screen=this.state.opt1Screen;
    
  }

next=()=>{
  
    
} 


  render() {
    return (
 
 
      <Modal isVisible={this.state.isModalVisible}
          animationIn='slideInRight'
          animationInTiming={700}
          swipeDirection={'up', 'down'}>
          <View
            style={{
              height: 150,
              padding: 20,
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius:5,
            }}>
            <Text style={{
              fontSize: 18
            }}>{this.state.message}</Text>




            <TouchableOpacity style={{
              height: 50,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderColor:'grey',
              borderWidth:2,
              borderRadius:5,
              bottom: 2,
              right: 3,
              position: 'absolute',
            }}
              onPress={() => {
              this.hideModal();
                navigation.navigate(this.state.opt3);
                
                // this.goToSecondScreen();  
              //   this.setState({
              //     isModalVisible:false
              //   });
              //  // let screen=this.state.opt1Screen;
               // this.props.navigation.navigate('LoginValidate') 
               // this.props.navigation.navigate(screen)
              
              }
              } >
              <Text>{this.state.opt1}</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{
              height: 50,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderColor:'grey',
              borderWidth:2,
              borderRadius:5,
              bottom: 2,
              left: 3,
              position: 'absolute',
            }}
              onPress={() => {
              this.hideModal();
              }
              } >
              <Text>{this.state.opt2}</Text>
            </TouchableOpacity>
           
            </View>

        </Modal>
      
    );  
  }
}

const styles = StyleSheet.create({
  button:{
    width:"60%", 
    height: 40,
    backgroundColor: '#312167',
    bottom:20,
    position:'absolute',
    // marginTop:ScreenHeight/10,
    //marginBottom:ScreenHeight/30,
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth:1, borderRadius:3, 
 }
})

//export default WithNavigation (ModalTester)
