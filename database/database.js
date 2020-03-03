let SQLite = require('react-native-sqlite-storage')
const database_name = "ReactOffline.db";
let db = SQLite.openDatabase({name: 'ReactOffline.db'});


export default class database{
  
   static dbinit=()=>{

     
db.transaction((tx) => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Jugnu  (ID Integer PRIMARY KEY AUTOINCREMENT, NAME varchar(50), LNAME varchar(50), Age Integer (11), Designation varchar(25))', [],
     (tx, results) => {
        // Get rows with Web SQL Database spec compliance.
        //alert(JSON.stringify(results));
        console.log("your database created ",results )  
      },(err) => {
        console.log("sorry",err)  
      
    })
    
});
}  

//  static dbInsert=(value)=> {
//   let Query = `INSERT INTO Jugnu (NAME, LNAME, Age, Designation) VALUES ('${value.Name}','${value.LastName}',${value.Age}, '${value.Designation}');`
//   db.transaction((tx) => {
//     tx.executeSql(Query, [], (tx, results) => {
//       console.log('data enterd', results)
//     }, (tx, errr) => {
//    console.log("errr setFile", errr);   
//     });
//   })


// }



static dbInsert = (value) => {
  
 
        db.transaction(function(tx) {
          tx.executeSql(
            'INSERT INTO Jugnu (NAME, LNAME, Age, Designation) VALUES (?,?,?,?)',
            [value.Name, value.LastName, value.Age, value.Designation],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                alert(
                  'Data Entered Successfully',   
                );
              } else {
                alert('Operation Failed');
              }
            }, (tx, errr) => {
                  console.log("errr setFile", errr);
            }
          );
        });
     
};


static dbView = (value) => {
  
  db.transaction(function(tx) {
    tx.executeSql(
      'SELECT * FROM Jugnu', [],
      (tx, results) => {
        console.log('Results =', results);
        // if (results.rowsAffected > 0) {
        //   alert(
        //     'Data Entered Successfully',   
        //   );
        // } else {
        //   alert('Operation Failed');
        // }
      }, (tx, errr) => {
            console.log("errr setFile", errr);
      }
    );
  });

};


static dbDelete = () => {
  
 
  db.transaction(function(tx) {
    tx.executeSql(
      'TRUNCATE TABLE Jugnu',
      [],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          alert(
            'Success',
            'You are Registered Successfully',   
          );
        } else {
          alert('Registration Failed');
        }
      }, (tx, errr) => {
            console.log("errr setFile", errr);
      }
    );
  });

};


// static dbInsert=(value)=>{
 
//   db.transaction((tx) => {
//       tx.executeSql('INSERT INTO Jugnu  (NAME, LNAME, Age, Designation) VALUES (?,?,?,?)', [values.Name, values.LastName,value.Age, value.Designation],
//     (tx, results) => {
//        // Get rows with Web SQL Database spec compliance.
//        //alert(JSON.stringify(results));
//        console.log("your data entered ",results)
//        alert("Your data saved successfully");
          
//     //    tx.executeSql(`SELECT * FROM Jugnu where NAME='${values.Name}' LNAME= '${values.LastName}' Age='${value.Age}', Designation = '${value.Designation}') `, [],
//     // (tx, results) => {
//     //   console.log(results)
//     // },(err)=>{

//     // })
          
//   },(err) => {
//        console.log("sorry",err)  
//        alert('error')
//      //  alert('error '+JSON.stringify(err));
     
//     })
//   });
// }






// static dbInsert=(value)=>{

//   db.transaction((tx) => {
//       tx.executeSql('INSERT INTO Jugnu  (NAME, LNAME, Age, Designation) VALUES (?,?,?,?)', [values.Name, values.LastName,value.Age, value.Designation],
//     (tx, results) => {
//        // Get rows with Web SQL Database spec compliance.
//        //alert(JSON.stringify(results));
//        console.log("your data entered ",results )
//        alert("Your data saved successfully")  
//      },(err) => {
//        console.log("sorry",err)  
//        alert('error');
//      //  alert('error '+JSON.stringify(err));
     
//     })
//   });
// }


}

// import SQLite from "react-native-sqlite-storage";
// SQLite.DEBUG(true);
// SQLite.enablePromise(true);

// const database_name = "ReactOffline.db";
// const database_version = "1.0";
// const database_displayname = "SQLite React Offline Database";
// const database_size = 200000;

// export default class Database {

//     initDB() {
//         let db;
//         return new Promise((resolve) => {
//           console.log("Plugin integrity check ...");
//           SQLite.echoTest()
//             .then(() => {
//               console.log("Integrity check passed ...");
//               console.log("Opening database ...");
//               SQLite.openDatabase(
//                 database_name,
//                 database_version,
//                 database_displayname,
//                 database_size
//               )
//                 .then(DB => {
//                   db = DB;
//                   console.log("Database OPEN");
//                   db.executeSql('SELECT 1 FROM Product LIMIT 1').then(() => {
//                       console.log("Database is ready ... executing query ...");
//                   }).catch((error) =>{
//                       console.log("Received error: ", error);
//                       console.log("Database not yet ready ... populating data");
//                       db.transaction((tx) => {
//                           tx.executeSql('CREATE TABLE IF NOT EXISTS Product (prodId, prodName, prodPrice)');
//                       }).then(() => {
//                           console.log("Table created successfully");
//                       }).catch(error => {
//                           console.log("table not created and error received: ", error);
//                       });
//                   });
//                   resolve(db);
//                 })
//                 .catch(error => {
//                   console.log(error);
//                 });
//             })
//             .catch(error => {
//               console.log("echoTest failed - plugin not functional");
//             });
//           });
//       };

     
//       closeDatabase(db) {
//         if (db) {
//           console.log("Closing DB");
//           db.close()
//             .then(status => {
//               console.log("Database CLOSED");
//             })
//             .catch(error => {
//               this.errorCB(error);
//             });
//         } else {
//           console.log("Database was not OPENED");
//         }
//       };


    //   listProduct() {
    //     return new Promise((resolve) => {
    //       const products = [];
    //       this.initDB().then((db) => {
    //         db.transaction((tx) => {
    //           tx.executeSql('SELECT p.prodId, p.prodName, FROM Product p', []).then(([tx,results]) => {
    //             console.log("Query completed");
    //             var len = results.rows.length;
    //             for (let i = 0; i < len; i++) {
    //               let row = results.rows.item(i);
    //               console.log(`Prod ID: ${row.prodId}, Prod Name: ${row.prodName}`)
    //               const { prodId, prodName, prodImage } = row;
    //               products.push({
    //                 prodId,
    //                 prodName,
    //                 prodImage
    //               });
    //             }
    //             console.log(products);
    //             resolve(products);
    //           });
    //         }).then((result) => {
    //           this.closeDatabase(db);
    //         }).catch((err) => {
    //           console.log(err);
    //         });
    //       }).catch((err) => {
    //         console.log(err);
    //       });
    //     });  
    //   }