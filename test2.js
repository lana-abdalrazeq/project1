
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "" ,
  database: "reserved"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


    //  con.query("CREATE DATABASE reserved", function (err, result) {
    //   if (err) throw err;
    //   console.log("Database created");
    // });

    // var sql1 = "CREATE TABLE Appointments (AppointmentsID integer primary key ,address text ,notes text, DateANDtime  DATETIME)";
    // con.query(sql1, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });

    // var sql = "CREATE TABLE contacts (contactsID integer primary key, FullName text,Email text unique ,AppointmentsID  integer,foreign key(AppointmentsID) references Appointments (AppointmentsID)  )";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });
   
    
//     var appoint = "INSERT into  Appointments (AppointmentsID, address,notes,DateANDtime) VALUES ?";
//     var values= [
//         [1,'amman/marka','check','2021-04-17 10:30:54'],
//         [2,'amman/almadinah','Practical test','2021-05-16 10:48:54.000000'],
//         [3,'irbid/alhuson','check','2021-05-13 11:54:54.000000'],
//         [4,'amman/alhussien','Theoretical test','2021-04-20 12:00:00.000000'],
//         [5,'amman/nuzha','Practical test','2021-04-22 10:48:54.000000'],
//         [6,'amman/khalda','Theoretical exam test','2021-05-16 1:50:54.000000'],
//         [7,'amman/tbrbour','Practical test','2021-05-16 9:00:54.000000'],
// ];
//     con.query(appoint,[values] ,function (err, result) {
//       if (err) throw err;
//       console.log(" record inserted");
//     });

    var contact = "INSERT into  contacts (contactsID, FullName,Email) VALUES ?";
    var values= [
        [11,'rawand saleh','rawand@yahoo.com',],
        [22,'sara nahlan','sara@yahoo.com',],
        [33,'hala ataf','hala@gmail.com'],
        [44,'aya ahmad','aya@gmail.com'],
        [55,'yasmine hasan','yasmine@gmail.com'],
        [66,'mohaamad ali','mohammad@yahoo.com'],
        [77,'omar nizar','omar@gmail.com'],
];
    con.query(contact,[values] ,function (err, result) {
      if (err) throw err;
      console.log(" record inserted");
    });



