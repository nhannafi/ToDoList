import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB2BZyeHB37L3YGGgNatJlrI0PmqGG-MV8",
    authDomain: "todoapp-2916c.firebaseapp.com",
    projectId: "todoapp-2916c",
    storageBucket: "todoapp-2916c.appspot.com",
    messagingSenderId: "855779877602",
    appId: "1:855779877602:web:8640f5e4fa4b454869f4bb"
  };

export default class Fire {
    constructor(callback){
        this.init(callback);
    }

    init(callback){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                callback(null);
            } else {
                firebase.auth().signInAnonymously.cath(error =>{
                    callback(error);
                });
            }
        })
    }
    
    
}