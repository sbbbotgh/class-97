  var firebaseConfig = {
    apiKey: "AIzaSyA2Dm6rdiOyXNvH_r8u1csCoHDQYNOXwWY",
    authDomain: "loki-92260.firebaseapp.com",
    databaseURL: "https://loki-92260-default-rtdb.firebaseio.com",
    projectId: "loki-92260",
    storageBucket: "loki-92260.appspot.com",
    messagingSenderId: "1009771718146",
    appId: "1:1009771718146:web:b4f355c4aaf25ad3ef291b"
  };
  firebase.initializeApp(firebaseConfig);

  var user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    role:"adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);

      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}


function redirectToRoomName(name){

  console.log(name);
  localStorage.setItem("room_name", name);

  window.location = "kwitter_page.html";
}
