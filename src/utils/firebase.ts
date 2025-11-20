import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyByy35OelabzupETI0BkM1dE3gUkYgI_Jk",
    authDomain: "miguelmo-2162c.firebaseapp.com",
    projectId: "miguelmo-2162c",
    storageBucket: "miguelmo-2162c.firebasestorage.app",
    messagingSenderId: "704582543135",
    appId: "1:704582543135:web:fa40f11e15f3f5f4a3722a",
    measurementId: "G-TZ27L6SQJS",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
