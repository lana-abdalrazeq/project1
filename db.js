
 var mysql = require('mysql');
 var connection = mysql.createConnection({                               // Create Connection

 host: "localhost",
 user: "root",
 password: "" ,
 database: "booked"                                                    // connection with database "booked"
 });

 // To see that the connection has worked
 connection.connect(function(err) {
 if (err) throw err;
  console.log("Connected!");
 });




 /*This code calculates the number of Appointments with the entered contact, and if the same contact is repeated for more than 
 three times, a check is made on the entered date, and if the date is found repeated for more than three times for the same contact, 
 a message is printed*/

 var appoint = "INSERT into  Appointments ( Appointmentsid,UserName,address, notes, DateANDtime , contactsId) VALUES ?";
 var value=[ [10,'lama','amman/marka','check','2021-05-16 10:30:54',55]];    // insert data into Appointments table
 connection.query(appoint,[value] ,function (err, result)
  {
 if (err) throw err;
 var contact_id;
 var date_time ;
 var date;
 for( let data of value)                                             // loop to  check the entered data 
 {
 date_time = data[3];                                               // return the date and time from entered data
 contact_id = data[4]                                               // return the contacts id 

 date = date_time.slice(0, 11);                                      // return the date without time

 }


 connection.query("SELECT contactsID ,date_format(DateANDtime, '%Y-%m-%d') as date FROM Appointments", function (err, result, fields) {
 if (err) throw err;
 const arr2 =[];
 var count_id =0 ;
 var count_date=0;
 var the_entered_date;
 for(var j = 0; j<result.length ; j++)                                // Loop to pass the returned date from the query statement and push the element in array
 {                                     
 var date_from_query =result[j]['date'];
 arr2.push(date_from_query);
 } 

 for( var i = 0 ; i < result.length ; i++)                           // Loop to pass the returned  from the query statement   
 {                                                                   
 var contact_id_from_query = result[i]['contactsID'];
 if( contact_id_from_query == contact_id)
  {                                                                  //if statments to check if the entered 'contactsid' equal the element that return from query statment
 count_id++                                                          // count the number of repeated contacts id
 if(count_id >3)                                          
 {

  the_entered_date = arr2[j-1];                                      // store the last element of array 'the entered date'    
 for( var k =0; k<arr2.length ; k++)                                 // loop to pass the array elements
 {
 if (the_entered_date == arr2[k] )                                   // check if 'the date enetered' equal the other date in array
 {                                      
  count_date++;                                                       // count the number of repeated dates
 if( count_date>3)
 {                                                                    // check if count more than print ' you already have three dates in this day '
 console.log('you already have three dates in this day')
 return count_date;
 }
 }
 }

 }}}

 });
 });



