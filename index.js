// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyA4RRvZ4ivOsgNRRN1igIjc43VdVARMQo0",
  authDomain: "grocery-list-98b6c.firebaseapp.com",
  projectId: "grocery-list-98b6c",
  storageBucket: "grocery-list-98b6c.appspot.com",
  messagingSenderId: "279937219467",
  appId: "1:279937219467:web:9c24ec3c319961c4438d8e",
  measurementId: "G-GRJKNJ2PLM"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content
$(this).text("saved");
  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection("myList").add({
      item: value,
    });
    firebase.firestore().collection("myExample").add({
      item: value,
    });
  });
}); 
