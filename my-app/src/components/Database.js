import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDT-H9WFt9pSPMYAWHxIo4DrGhBzWPNW6I",
    authDomain: "recentnews-bf75b.firebaseapp.com",
    databaseURL: "https://recentnews-bf75b-default-rtdb.firebaseio.com",
    projectId: "recentnews-bf75b",
    storageBucket: "recentnews-bf75b.appspot.com",
    messagingSenderId: "789951700331",
    appId: "1:789951700331:web:b79dce9bbac73e42e0002e",
    measurementId: "G-J38NTM610J"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
const databaseRef = ref(database);

export const getArticlesByState = (state) => {
    return get(child(databaseRef, state));
};

export const getAllArticles = () => {
    return get(databaseRef);
};

/* Testing database fetching and print to console */

/*
useEffect(() => {
    getArticlesByState('Florida').then((snapshot) => {
        console.log(snapshot.val());
    });

    getAllArticles().then((snapshot) => {
        console.log(snapshot.val());
    });
}, []);
*/