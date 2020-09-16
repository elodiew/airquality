import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth"

import {
    firebaseConfig
} from "@/config/firebase.config"

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

export {
    db,
    auth
}