import React, { Component }  from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

let SQLite = require('react-native-sqlite-storage');
const database_name = "ReactOffline.db";
let db = SQLite.openDatabase({name: 'ReactOffline.db'});



//let row = [];
        
let temp = [];
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}




export default class DisplayItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
          row:[]
        };
        db.transaction(function(tx) {
          tx.executeSql(
            'SELECT * FROM Jugnu', [],
            (tx, results) => {
              
              
              for (let i = 0; i < results.rows.length; i++) {
                temp.push(results.rows.item(i));
              }
            console.log("34567 after--------------",this.state.row);
            }, (tx, errr) => {
                  console.log("errr setFile", errr);
            }
          );
        });
      }

componentDidMount(){};

 

    
render(){   
console.log("this is inside render temp--------------",temp)
 return(

<SafeAreaView style={styles.container}>
       
       <Text style={{alignSelf:'center'}}> HELLO WORLD</Text>
 
       <FlatList
        data={this.state.row}
        renderItem={({ item }) => <Text style={{
          fontSize:20,
          color:'red',
        }}>id is{item.id}={item.NAME}</Text>}
       // keyExtractor={({item => item.ID})}
       keyExtractor={({id}, index)=>index.toString()}
      />
</SafeAreaView>

);
}

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });