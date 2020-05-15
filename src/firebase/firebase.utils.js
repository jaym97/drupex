import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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
    if (!userAuth) return

    const patientRef = firestore.doc(`patients/${userAuth.uid}`),
          doctorRef = firestore.doc(`/doctors/${userAuth.uid}`),
          patientSnapshot = await patientRef.get(),
          doctorSnapshot = await doctorRef.get();

    if (!patientSnapshot.exists && !doctorSnapshot.exists && additionalData){
        const { role } = additionalData,
              { email } = userAuth,
              createdAt = new Date();

        try {
            if (role === 'patient'){
                await patientRef.set({ 
                    email,
                    createdAt,
                    ...additionalData
                })
            } else if (role === 'doctor'){
                await doctorRef.set({
                    email,
                    createdAt,
                    ...additionalData
                })
            }
            
        } catch (error){
            console.log('error creating user', error.message)
        }
    }

    if (userAuth.role === 'patient')
        return patientRef

    if (userAuth.role === 'doctor')
        return doctorRef
}

export const updatePrescriptionRequestList = async (userAuth, data) => {
    if (!userAuth) return

    const userRef = await firestore.doc(`patients/${userAuth.uid}`),
          userSnapshot = await userRef.get();

    if (userSnapshot.exists){
       try {
            await firestore.collection('patients').doc(`${userAuth.uid}`).collection('requests').add(data)
            return true
       } catch (error){
            console.log('error updating user', error.message)
            return false
        }
    }
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
