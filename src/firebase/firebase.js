import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyALduQK8EWL0Nl8ACYlB0ePS-LPYaOPQYs",
  authDomain: "expensify-a4d79.firebaseapp.com",
  databaseURL: "https://expensify-a4d79-default-rtdb.firebaseio.com",
  projectId: "expensify-a4d79",
  storageBucket: "expensify-a4d79.appspot.com",
  messagingSenderId: "829582282180",
  appId: "1:829582282180:web:706638e1e13d1e3366a891",
  measurementId: "G-2NKYC0SX51"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: 'Lucky Naja',
  age: 9,
  location: {
    city: 'Bangkok',
    country: 'Thailand'
  }
}).then(() => {
  console.log('Data is saved');
}).catch((e) => {
  console.log('This failed.', e);
});

database.ref('attributes').set({
  height: 77,
  weight: 88
}).then(() => {
  console.log('I made a request to change the data.');
}).catch((e) => {
  console.log('Failed naja', e);
});

