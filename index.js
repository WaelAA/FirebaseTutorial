const firebase = require("firebase");

  var config = {
    apiKey: "xxxxxxx",
    authDomain: "xxxxxxx.xxxxxxx.com",
    databaseURL: "https://xxxxxxx.xxxxxxx.com",
    projectId: "xxxxxxx",
    storageBucket: "xxxxxxx.xxxxxxx.com",
    messagingSenderId: "xxxxxxx"
  };
  firebase.initializeApp(config);
////////////////
/*
  var playersRef = firebase.database().ref("players/");

  playersRef.set ({
     John: {
        number: 1,
        age: 30
     },
    
     Amanda: {
        number: 2,
        age: 20
     }
  });
  */
////////////
/*  
var johnRef = firebase.database().ref("players/John");

johnRef.update ({
   "number": 10
});
*/
////////////////

/*
var playersRef2 = firebase.database().ref("/").child("players");
playersRef2.push ({
   name: "John",
   number: 11,
   age: 30
});

playersRef2.push ({
   name: "Amanda",
   number: 2,
   age: 20
});
*/
//////////////////
//not working
// var playersKey = playersRef.key;
// console.log(playersKey);
//////////////////
var ref = firebase.database().ref("players/");
/*
var ref = firebase.database().ref("players/");
var amandaAgeRef = ref.child("Amanda").child('age');

amandaAgeRef.transaction(function(currentAge) {
   return currentAge + 2;
});
*/
//////////////////


ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});

//////////////////
ref.on("child_changed", function(data) {
  var player = data.val();
  console.log("The updated player name is " + player.name);
});

//////////////////
ref.on("child_removed", function(data) {
  var deletedPlayer = data.val();
  console.log(deletedPlayer.name + " has been deleted");
});
//////////////////
ref.off("value");
ref.off();
///////////////
/**/
var email = "myemail@email.com";
var password = "mypassword";
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  console.log(error.code);
  console.log(error.message);
});
var firstPlayerRef = firebase.database().ref("players/").limitToFirst(1);

var lastPlayerRef = firebase.database().ref('players/').limitToLast(1);

firstPlayerRef.on("value", function(data) {
   console.log(data.val());
}, function (error) {
   console.log("Error: " + error.code);
});

lastPlayerRef.on("value", function(data) {
   console.log(data.val());
}, function (error) {
   console.log("Error: " + error.code);
});
///////////////
/*
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
   console.log(error.code);
   console.log(error.message);
});
*/
///////////////
///////////////
///////////////
/*
ref.orderByChild("name").on("child_added", function(data) {
  console.log(data.val().name);
});
ref.orderByKey().on("child_added", function(data) {
  console.log(data.key);
});

ref.orderByValue().on("value", function(data) {   
  data.forEach(function(data) {
     console.log("The " + data.key + " rating is " + data.val());
  });  
});
*/
//firebase.database().ref('x').push({"key2":"Val2 wael"});
//firebase.database().ref('x/y').set({"key2":"Val2 wael2"});

// firebase.database().ref('blogs/').child("key2")
//             .on('value', snapshot => {
//                 console.log(snapshot);
//             });
//firebase.database().ref('blogs/').child("Wael").child("xxxxx").on('value', snapshot =>  console.log(snapshot.val()));

//console.log(ref);
