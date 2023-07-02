import firebase from "firebase";

const config = {
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  apiKey: import.meta.env.VITE_API_KEY,
};

firebase.initializeApp(config);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
