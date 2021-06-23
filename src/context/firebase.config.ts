
import firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyDe0ly1pjm4S4HBcPWkgYT4pxf117IwkM4",
    authDomain: "quize-app-58749.firebaseapp.com",
    projectId: "quize-app-58749",
    storageBucket: "quize-app-58749.appspot.com",
    messagingSenderId: "632174268621",
    appId: "1:632174268621:web:b5350038d303bd9b221984",
    measurementId: "G-ZWYT3837F6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore();