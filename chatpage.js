const firebaseConfig = {
    apiKey: "AIzaSyAJewDUp1Wa3_l0ft_es1fEU8PGQ0TWnf8",
    authDomain: "chatapp-36a70.firebaseapp.com",
    databaseURL: "https://chatapp-36a70-default-rtdb.firebaseio.com",
    projectId: "chatapp-36a70",
    storageBucket: "chatapp-36a70.appspot.com",
    messagingSenderId: "429782427304",
    appId: "1:429782427304:web:9c5b9cf84cf8c8a9c2c49d",
    measurementId: "G-HR01R6CLS8"
  };
  
  // Initialize Firebase


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
roomName = localStorage.getItem("roomName")

function send(){
 msg = document.getElementById("msg").value
 firebase.database().ref(roomName).push({
    name: user_name, 
    message: msg,
    like: 0
 })
 document.getElementById("msg").value = ""
 
}

function getData(){

  firebase.database().ref("/"+room_name).on('value',
  function(snapshot){document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key;
    childData = childSapshot.val();
    if(childKey !="purpose"){
firebase_message_id = childKey;
message_data = childData;

//start code
console.log(message_data);
name = meddage_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class= 'user_tick' src='tick.png'></h4>";
like_button = "<button class = 'btn btn-warning' id='" + firbase_message_id +"' value='"+like+"'onclick = 'updateLike(this.id)'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like; "+ like +"</span<button><hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;

//end code
    }
    
  })

  })
}

function updateLike(message_id)
{
button_id = message_id
likes = document.getElementById(button_id).value;
updated_like = Number(likes)+1;
firebase.database().ref(roomName).child(message_id).update({

  like: updated_like
})


}


function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("roomName")
    window.location = "index.html"
}

