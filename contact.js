 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
 import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBU6M3J_TTGL_54g08kXwawX0f67u295AY",
   authDomain: "khiyani-73042.firebaseapp.com",
   projectId: "khiyani-73042",
   storageBucket: "khiyani-73042.appspot.com",
   messagingSenderId: "45502866473",
   appId: "1:45502866473:web:6ef3d9eb66e59196616838",
   measurementId: "G-J2BFD1BBSG"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const database = getDatabase();

var name = document.getElementById('name');
var lname = document.getElementById('lname');
var email = document.getElementById('inputEmail4');
var down = document.getElementById('flexRadioDefault1');
var down2 = document.getElementById('flexRadioDefault2');
var num = document.getElementById('number');
var drop = document.getElementById('down23');
var drop2 = document.getElementById('flexselect');
var address = document.getElementById('floatingTextarea');
var message = document.getElementById('floatingTextarea2');

window.addValue = function(){
    var obj ={
        uname: name.value,
        ulname: lname.value,
        Gmail: email.value,
        udown: down.value,
        u_down: down2.value,
        number: num.value,
        udrop: drop.value,
        u_drop: drop2.value,
        addr: address.value,
        mess: message.value,

    };
    var uid = Math.random().toString().slice(2);
    obj.id = uid
    var reference = ref(database, `users/${obj.id}/`);
    set(reference,obj)
}