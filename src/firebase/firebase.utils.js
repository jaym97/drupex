import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAW-tSYu7LxENsysnHETubjj_p3J2BlyBw",
    authDomain: "drug-prescriber-b473d.firebaseapp.com",
    databaseURL: "https://drug-prescriber-b473d.firebaseio.com",
    projectId: "drug-prescriber-b473d",
    storageBucket: "drug-prescriber-b473d.appspot.com",
    messagingSenderId: "577289618695",
    appId: "1:577289618695:web:a4d4321eec43d697c8f1a2",
    measurementId: "G-SRX3RW44C4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists){
        const { firstname, lastname, username, email, role } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                firstname,
                lastname,
                username, 
                email,
                createdAt,
                role,
                ...additionalData
            })
            
        } catch (error){
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
