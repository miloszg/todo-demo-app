import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAdETCAVx_VdRIvxXLAGPqZ3Gxfgmk3O_M",
  authDomain: "todo-app-9d004.firebaseapp.com",
  projectId: "todo-app-9d004",
  storageBucket: "todo-app-9d004.appspot.com",
  messagingSenderId: "899565377273",
  appId: "1:899565377273:web:ae2ecf36d7bda41946f428",
  measurementId: "G-2PLP6TC8RT",
  databaseURL:
    "https://todo-app-9d004-default-rtdb.europe-west1.firebasedatabase.app/",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
