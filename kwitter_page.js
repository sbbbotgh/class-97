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
    var room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0,
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4>" + name + "<img src='tick.png' class='user_tick'/></h4>";
msg_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
button_with_tag = "<button type='button' class='btn btn-warning'  id="+ firebase_message_id + "value=" + like + "onclick='updateLike(this.id):'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";
row = name_with_tag + msg_with_tag + button_with_tag + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("click on like button" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_like = Number(likes) + 1;
      console.log(updated_like);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_like
      });
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }