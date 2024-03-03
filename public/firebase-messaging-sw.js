// Service Worker
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDVlKbSXUs0icDA8y8ALnf369s6K6aRv40",
  authDomain: "daystogo-6c643.firebaseapp.com",
  projectId: "daystogo-6c643",
  storageBucket: "daystogo-6c643.appspot.com",
  messagingSenderId: "324542282410",
  appId: "1:324542282410:web:b1a379658b57dd02246ed3",
  measurementId: "G-MS47582DX4"
};

// // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/images/icon144_maskable.png'
    };
  

    console.log('onBackgorundMessage')
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });