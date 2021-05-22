 var mysql = require('mysql');

 var connection = mysql.createConnection({ // Create Connection

     host: "localhost",
     user: "root",
     password: "",
     database: "booked" // connection with database "booked"
 });



 //  query about the current day's appointments 

 connection.query("select date_format(DateANDtime, ' %y-%m-%d' ) as date ,Time(DateANDtime) as time, userName from appointments  where DATE(DateANDtime) = CURDATE() ", function (err, result, fields) {
     if (err) throw err;
     console.log("")

     console.log("**appointments  of current day :");

     var date_from_query;
     var user_name;
     var time_from_query;
     for (var i = 0; i < result.length; i++) { // loop to pass the elemmens in query
         date_from_query = result[i]['date']; // return the date from  query
         time_from_query = result[i]['time']; // return the time from query

         user_name = result[i]['userName']; // return the user name from query

         console.log("you have an appointment in", date_from_query, 'at', time_from_query, "with", user_name) // pprint the date and time and user name  
     }
     console.log("")

 });




 //  // query about the appointments of this week
 connection.query("select date_format(DateANDtime, ' %y-%m-%d' ) as date ,Time(DateANDtime) as time, userName from appointments  where date_format(DateANDtime,'%Y-%m-%d')= date_format(now(),'%Y-%m-%d')", function (err, result, fields) {
     if (err) throw err;
     console.log("");
     console.log(" **appointments in current week:");

     var date_from_query;
     var user_name;
     var time_from_query;
     for (var i = 0; i < result.length; i++) { // loop to pass the elemmens in query
         date_from_query = result[i]['date']; // return the date from  query
         time_from_query = result[i]['time']; // return the time from query

         user_name = result[i]['userName']; // return the user name from query

         console.log("you have an appointment in", date_from_query, 'at', time_from_query, "with", user_name) // pprint the date and time and user name  
     }
     console.log("");
 });


 // query about the appointments of this month
 connection.query("select date_format(DateANDtime, ' %y-%m-%d' ) as date ,Time(DateANDtime) as time, userName from appointments   where date_format(DateANDtime,'%Y-%m')=date_format(now(),'%Y-%m') ", function (err, result, fields) {
     if (err) throw err;
     console.log(" ** appointments in current month:")
     var date_from_query;
     var user_name;
     var time_from_query;
     for (var i = 0; i < result.length; i++) { // loop to pass the elemmens in query
         date_from_query = result[i]['date']; // return the date from  query
         time_from_query = result[i]['time']; // return the time from query

         user_name = result[i]['userName']; // return the user name from query

         console.log("you have an appointment in", date_from_query, 'at', time_from_query, "with", user_name) // pprint the date and time and user name  
     }


 });