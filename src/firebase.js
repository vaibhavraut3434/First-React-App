import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyD7-su9SqTQKu41dR5JNujlQJoqkEicXa8",
    authDomain: "first-react-app-3e7a4.firebaseapp.com",
    databaseURL: "https://first-react-app-3e7a4-default-rtdb.firebaseio.com",
    projectId: "first-react-app-3e7a4",
    storageBucket: "first-react-app-3e7a4.appspot.com",
    messagingSenderId: "774504282728",
    appId: "1:774504282728:web:3041a04a8c15ece44919dd"
  };
  
  console.log({firebase})

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.database();
  var auth = firebase.auth();
  //export default auth;
  export default db;