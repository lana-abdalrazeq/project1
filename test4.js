var mysql = require('mysql');     

var con = mysql.createConnection({     // connection 
  host: "localhost", 
  user: "root",
  password: "" ,
   database: "booking"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//    con.query("CREATE DATABASE booking", function (err, result) {                  
//       if (err) throw err;
//       console.log("Database created");
//     });

   
//     var sql = "CREATE TABLE contacts (contactsID integer primary key, name text,Email text unique)";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });

//     var sql1 = "CREATE TABLE users (UserID integer primary key, UserName text )";
//     con.query(sql1, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });

//      var sql1 = "CREATE TABLE Appointments (AppointmentsID integer primary key ,address text ,notes text, DateANDtime  DATETIME,UserID integer,contactsID INTEGER ,foreign key(UserID ) references Users (UserID ),foreign key(contactsID) references contacts (contactsID)  )";
//     con.query(sql1, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });


    
      

//     var contact = "INSERT into  contacts (contactsID, name,Email) VALUES ?";
//     var values= [
//         [11,'rawand saleh','rawand@yahoo.com',],
//         [22,'sara nahlan','sara@yahoo.com',],
//         [33,'hala atef','hala@gmail.com'],
//         [44,'aya ahmad','aya@gmail.com'],
//         [55,'yasmine hasan','yasmine@gmail.com'],
//         [66,'mohaamad ali','mohammad@yahoo.com'],
//         [77,'omar nizar','omar@gmail.com'],
// ];
//     con.query(contact,[values] ,function (err, result) {
//       if (err) throw err;
//       console.log(" record inserted");
//     });
//     var user = "INSERT into  users (userID, UserName) VALUES ?";
//     var values= [
//         [1, 'ahmad'],
//         [2,'hasan' ],
//         [3,' batool'],
//         [4, 'zain' ],
//         [5, 'sultan'],
//         [6, 'laith'],
//         [7, 'raneem'],
// ];
//     con.query(user,[values] ,function (err, result) {
//       if (err) throw err;
//       console.log(" record inserted");
//     });

    
    
    var appoint = "INSERT into  Appointments (address,notes, DateANDtime,userid,contactsid) VALUES ?";
//     var values= [
//         [111, 'amman/marka','check','2021-04-17 10:30:54',1,22],
//         [222,'amman/almadinah','Practical test','2021-05-16 10:48:54.000000',3,11],
//         [333,'irbid/alhuson','check','2021-05-13 11:54:54.000000',5,77],
//         [444, 'amman/alhussien','Theoretical test','2021-04-20 12:00:00.000000',4,66],
//         [555, 'amman/nuzha','Practical test','2021-04-22 10:48:54.000000',3,33],
//         [666, 'amman/khalda','Theoretical  test','2021-05-16 1:50:54.000000',4,11],
//         [777,   'amman/tbrbour','Practical test','2021-05-16 9:00:54.000000',7,11],
// ];
//     con.query(appoint,[values] ,function (err, result) {
//       if (err) throw err;
//       console.log(" record inserted");
//     });

// con.query("SELECT dateandtime FROM Appointments WHERE DATE(DateANDtime) = CURDATE() ", function (err, result, fields) {
//   if (err) throw err;
//   console.log(result);
// });


con.query("SELECT dateandtime FROM Appointments ", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
  result = result.sort()
var date;
  const arr = [];
for (let time in result) {
   date = result[time]['dateandtime'].toString().slice(0, 15);
  arr.push(date);
  // console.log(result[time]['dateandtime'].toString().slice(0, 15));
  
}

arr.sort()
console.log(arr);
var current = null;
var cnt = 0;
var countArr = {};
for (var i = 0; i <= arr.length; i++) {
  if (arr[i] != current) {
    if (cnt > 0) {
      console.log(current, cnt);
     
      countArr[current]=cnt;

    }

    current = arr[i];
    cnt = 1;
  } else {
    if (cnt >= 3) {
      console.log('Greater than 3');
      continue;
    } else {
      cnt++;
    }
  }
}
console.log(countArr);


if (countArr['Wed Apr 14 2021'] < 3 ){
var value=[ ['amman/marka','check','2021-04-14 10:30:54',1,22]];
con.query(appoint,[value] ,function (err, result) {
if (err) throw err;
console.log(" record inserted");
});
}

}); 
