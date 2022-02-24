var firebaseConfig =
 {
      apiKey: "AIzaSyDNl7UcqkxUo0Ui3TkPT0TtVi_4sRkkMsc", 
      authDomain: "kwitter-17656.firebaseapp.com",
       databaseURL: "https://kwitter-17656-default-rtdb.firebaseio.com", 
       projectId: "kwitter-17656", 
       storageBucket: "kwitter-17656.appspot.com", 
       messagingSenderId: "409299819156", 
       appId: "1:409299819156:web:b036f737f778c426433281" };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 userName = localStorage.getItem("userName");
 document.getElementById("user_name").innerHTML = "Welcome " + userName + "!";

 function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);      
}


function getData(){firebase.database().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){ childKey  = childSnapshot.key;
              Room_names = childKey;
              console.log("Room Name - " + Room_names);
              row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
              document.getElementById("output").innerHTML += row;
});
});
}           
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";     
}

function logOut()
{
      localStorage.removeItem("userName");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

