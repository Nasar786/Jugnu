import React, { Component } from 'react';
import { View, 
Text,
SafeAreaView,
Dimensions,
TextInput,
StyleSheet,
TouchableOpacity,
} from 'react-native';
import database from '../database/database';
import Modal from '../Component/ModalScreen';

const ScreenWidth =  Dimensions.get('window').width;
const ScreenHeight =  Dimensions.get('window').height;

let navigation;

export default class DbHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name:'',
      Lname:'',
      Age:'',
      Designation:'',
      Isclick:0,
    };
  }

show=()=>{
  alert('nice');
}
 

  render() {
    return (
      
      <SafeAreaView style={{flex:1, backgroundColor:"#698474",}}>
           
            
            <View  style={styles.container}
         >

           <Modal          
           ref="modal"
           //onPressYes={()=>{}}
          />

            <Text 
            style={{
                fontSize:26,
                color:'black',
                marginTop:ScreenHeight/17,
            }}> Welcome! </Text>

            
            <Text 
            style={{
                fontSize:20,
                color:'black', 
                //marginTop:ScreenHeight/20,
                marginBottom:ScreenHeight/20,                
            }}> Please enter your details </Text>                
           
            <TextInput 
            style={styles.TextInput}
             placeholder="Name"
             placeholderTextColor="grey"
             onChangeText={(text) =>
               this.setState({
                  Name:text                 
               })}
             //value={this.state.text}
          >
  
            </TextInput>

                       
            <TextInput 
            style={styles.TextInput}
             placeholder="Last Name"
             placeholderTextColor="grey"
             onChangeText={(text) =>
              this.setState({
                 Lname:text                 
              })}
          >
            </TextInput>


            <TextInput 
            style={styles.TextInput}
            maxLength={2}
             placeholder="Age"
             placeholderTextColor="grey"
             keyboardType="number-pad"
            
             onChangeText={(text) =>{
                     this.setState({
                 Age:text                 
              })}
            }
              >
            </TextInput>

            <TextInput 
            style={styles.TextInput}
             placeholder="Designation"
             placeholderTextColor="grey"
      
             onChangeText={(text) =>{
              this.setState({
          Designation:text                 
       })}
     }
    
           >
            </TextInput>

          
            <TouchableOpacity style={styles.button}

                      
                      onPress={()=>{
                        database.dbView();
                       // this.refs.modal.toggleModal(true,"Hello world","Go to Next Screen",
                       // "Cancel",'ActivationScreen',this.props.navigation)
                       
                      //  let data={
                      //     Name:this.state.Name,
                      //     LastName:this.state.Lname,
                      //     Age:this.state.Age,
                      //     Designation:this.state.Designation,
                      //   }
                       
                

                      //   if ((data.Name!='') && (data.LastName!='') && (data.Age!='') && (data.Designation!='') )
                      //   {
                      //     database.dbInsert(data)
                      //   }
                      //   else {
                      //     alert ('Please Enter All Fields')                          
                      //   }
                         
                      }}

        //  onPress = {()=>{
        //   Alert.alert(
        //     'Alert Title',
        //     'My Alert Msg',
        //     [
        //       {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //       {
        //         text: 'Cancel',
        //         onPress: () => console.log('Cancel Pressed'),
        //         style: 'cancel',
        //       },
        //       {text: 'OK', onPress: () => console.log('OK Pressed')},
        //     ],
        //     {cancelable: false},
        //   );          
        //  }}




                      ><Text style={{color:'white', fontSize:20}}>Done</Text>
                   
  </TouchableOpacity>
          


          

            </View>

      </SafeAreaView>



);
  }
}
const styles = StyleSheet.create({
    container:{
      alignSelf:'center',
      width:ScreenWidth/1.2, 
    height:ScreenHeight/1.3,
    //justifyContent:'center',
    marginTop:50,     
   backgroundColor:"#bac7a7",
     alignItems:'center',
    borderWidth:1,
    borderColor:"#e5e4cc",
    borderRadius:10,
    shadowColor: 'red',
    shadowOffset: {
    width: 0,
    height: 10,
    },
    shadowOpacity: 10.37,
    shadowRadius: 2.49,
    elevation: 10,
    //bottom:0,
    //position:'absolute'
 },

    TextInput:
    { 
    width:"80%",
    height:35,
    fontSize:20,
    color:'black',
    borderColor:"#e5e4cc",
    borderWidth:1,
    borderRadius:5,
    fontSize:18,
    backgroundColor:'white',
    padding:0 ,
    paddingLeft:5,
    marginTop:13,                
 },

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

});