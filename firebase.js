import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAQjIs9BO9jx967NMmh5A4oyyRNPbL0Ax4",
  authDomain: "react-tutorial-1-e3806.firebaseapp.com",
  projectId: "react-tutorial-1-e3806",
  storageBucket: "react-tutorial-1-e3806.appspot.com",
  messagingSenderId: "476060464418",
  appId: "1:476060464418:web:5085da40a85df4b1b8217b"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase 
