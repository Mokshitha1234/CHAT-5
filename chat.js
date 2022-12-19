// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



