import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

initializeApp ({
        
        apiKey: "AIzaSyCon62oF6sKmpA243RnBm5gyVUZLTXkp0Q",
        authDomain: "online-store-24d1f.firebaseapp.com",
        projectId: "online-store-24d1f",
        storageBucket: "online-store-24d1f.appspot.com",
        messagingSenderId: "212248465193",
        appId: "1:212248465193:web:fe62d59db21397ee1c3138"
      
        // Почему-то так не работает
    // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    // appId: process.env.NEXT_PUBLIC_APP_ID,
})

const firestore = getFirestore()
//const auth = getAuth()

export {
    firestore,
    //auth,
}