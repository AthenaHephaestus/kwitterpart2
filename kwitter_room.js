
//ADD YOUR FIREBASE LINKS HERE

    // Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyABdj_n1xd8oFG489lsLcs9canyy-ETAXs",
      authDomain: "kwitter-revamped-8dbf0.firebaseapp.com",
      databaseURL: "https://kwitter-revamped-8dbf0-default-rtdb.firebaseio.com",
      projectId: "kwitter-revamped-8dbf0",
      storageBucket: "kwitter-revamped-8dbf0.appspot.com",
      messagingSenderId: "582406570966",
      appId: "1:582406570966:web:458410ebe4c1a9ebbd5a77"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
