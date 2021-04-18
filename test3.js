

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "" ,
  database: "reserve"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


    //  con.query("CREATE DATABASE reserve", function (err, result) {
    //   if (err) throw err;
    //   console.log("Database created");
    // });

    // var sql1 = "CREATE TABLE Appointments (AppointmentsID integer primary key ,UserName text,address text ,notes text, DateANDtime  DATETIME)";
    // con.query(sql1, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });

    // var sql = "CREATE TABLE contacts (contactsID integer primary key, FullName text,Email text unique)";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });
   
    
//     var appoint = "INSERT into  Appointments (AppointmentsID, UserName ,address,notes, DateANDtime) VALUES ?";
//     var values= [
//         [1, 'ahmad','amman/marka','check','2021-04-17 10:30:54'],
//         [2,'hasan' ,'amman/almadinah','Practical test','2021-05-16 10:48:54.000000'],
//         [3,' batool','irbid/alhuson','check','2021-05-13 11:54:54.000000'],
//         [4, 'zain' ,'amman/alhussien','Theoretical test','2021-04-20 12:00:00.000000'],
//         [5, 'sultan','amman/nuzha','Practical test','2021-04-22 10:48:54.000000'],
//         [6, 'laith','amman/khalda','Theoretical  test','2021-05-16 1:50:54.000000'],
//         [7, 'raneem',  'amman/tbrbour','Practical test','2021-05-16 9:00:54.000000'],
// ];
//     con.query(appoint,[values] ,function (err, result) {
//       if (err) throw err;
//       console.log(" record inserted");
//     });

//     var contact = "INSERT into  contacts (contactsID, FullName,Email) VALUES ?";
//     var values= [
//         [11,'rawand saleh','rawand@yahoo.com',],
//         [22,'sara nahlan','sara@yahoo.com',],
//         [33,'hala ataf','hala@gmail.com'],
//         [44,'aya ahmad','aya@gmail.com'],
//         [55,'yasmine hasan','yasmine@gmail.com'],
//         [66,'mohaamad ali','mohammad@yahoo.com'],
//         [77,'omar nizar','omar@gmail.com'],
// ];
//     con.query(contact,[values] ,function (err, result) {
//       if (err) throw err;
//       console.log(" record inserted");
//     });


// var sql3 = "CREATE TABLE contacts_Appointments (contactsID integer not null ,AppointmentsID  integer not null, primary key (contactsID,AppointmentsID) ,foreign key(AppointmentsID) references Appointments (AppointmentsID),foreign key(contactsID) references contacts (contactsID)  )";
//     con.query(sql3, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });

//     var contacts_Appointments = "INSERT into  contacts_Appointments (contactsID, AppointmentsID) VALUES ?";
//     var values= [
//         [11,5],
//         [22,7],
//         [33,5],
//         [11,3],
//         [55,6],
//         [66,1],
//         [11,2],
// ];
//     con.query(contacts_Appointments,[values] ,function (err, result) {
//       if (err) throw err;
//       console.log(" record inserted");
//     });

//  var z = con.query("SELECT current_date ", function (err, result, fields) {
//   if (err) throw err;
//   console.log(result);
// })


// con.query("SELECT UserName, DATE_FORMAT(DateANDtime, '%Y-%m-%d') FROM appointments WHERE DATE(DateANDtime) = CURDATE()", function (err, result, fields) {
//   if (err) throw err;
//   console.log(result);
// });

con.query("SELECT UserName ,dateandtime FROM Appointments WHERE DATE(DateANDtime) = CURDATE() ", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
0