/* ============================================================
   إعدادات Firebase — نفس المشروع اللي عملته على console.firebase.google.com
   ده الملف اللي بيوصل كل صفحة بقاعدة البيانات (Realtime Database)
   apiKey هنا مش سري — الحماية الحقيقية موجودة في "Rules" في لوحة Firebase
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyC9egVWYh0x6rI-_Xd6cpNIPg4vHl55mnw",
  authDomain: "man-store-ed5dd.firebaseapp.com",
  databaseURL: "https://man-store-ed5dd-default-rtdb.firebaseio.com",
  projectId: "man-store-ed5dd",
  storageBucket: "man-store-ed5dd.firebasestorage.app",
  messagingSenderId: "567822384262",
  appId: "1:567822384262:web:2a08e6738f3e8eb2046507"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
