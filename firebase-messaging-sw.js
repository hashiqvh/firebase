importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

/*Update with yours config*/
const firebaseConfig = {
    apiKey: "AIzaSyAOJlgCfzMXlJo-v7GrcC7TcFAsd6EKxkA",
    authDomain: "lilypad-99cb6.firebaseapp.com",
    projectId: "lilypad-99cb6",
    storageBucket: "lilypad-99cb6.appspot.com",
    messagingSenderId: "247687764097",
    appId: "1:247687764097:web:4d2dc4ba092bb591f1d580",
    measurementId: "G-4YMV9H0WJB"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/*messaging.onMessage((payload) => {
console.log('Message received. ', payload);*/
messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});