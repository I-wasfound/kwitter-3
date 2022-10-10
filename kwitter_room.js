//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCyqWCReZogY6R3pPlY8Ok7V9jecaDjbSM",
      authDomain: "kwitter-b215e.firebaseapp.com",
      databaseURL: "https://kwitter-b215e-default-rtdb.firebaseio.com",
      projectId: "kwitter-b215e",
      storageBucket: "kwitter-b215e.appspot.com",
      messagingSenderId: "928407604723",
      appId: "1:928407604723:web:eeddc80ea83b555d439686",
      measurementId: "G-PX75WZX7K0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "ｗ𝐄𝓛ｃ𝕆𝐌𝐄 " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name",
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Names -  " + Room_names);
                  row = 
                  "<div class='room_name' id=" + 
                  Room_names + 
                  " onclick='redirectToRoomName(this.id)' >#" + 
                  Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
