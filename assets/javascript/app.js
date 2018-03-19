var config = {
    apiKey: "AIzaSyDkAoXEQFDvkL9kms8l-YifJQjhf9H1bI4",
    authDomain: "classactivities-dbec8.firebaseapp.com",
    databaseURL: "https://classactivities-dbec8.firebaseio.com",
    projectId: "classactivities-dbec8",
    storageBucket: "classactivities-dbec8.appspot.com",
    messagingSenderId: "791002863378"
};
firebase.initializeApp(config);

var txtEmail = $("#txtEmail");
var password = $("#password");
var btnLogin = $("#btnLogin");
var btnSignUp = $("#btnSignUp");
var btnLogOut = $("#btnLogOut");


//Add Log in Event
$("#btnLogin").on("click", function () {
    var email = txtEmail.val();
    var pass = password.val();
    var auth = firebase.auth();

    //signin with e-mail and password
    var promise = auth.signInWithEmailAndPassword(email, pass);
    console.log(email, pass)
    promise.catch(e => console.log('error.message'))

})

$("#btnSignUp").on("click", e => {
    var email = txtEmail.val();
    var pass = password.val();
    var auth = firebase.auth();

    var promise = auth.createUserWithEmailAndPassword(email, pass);
    console.log(email, pass);


    promise.catch(e => console.log(e.message));
    console.log('error.message')

})

$("#btnLogOut").on("click", e => {
    firebase.auth().signOut();
})

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);

    } else {
        console.log('not logged in')
    }

})