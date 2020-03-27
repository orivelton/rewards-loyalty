import * as firebase from 'firebase';
import FirebaseConfig from '../constants/FirebaseConfig';
const ID = 'V7CCZpfSwxV3BYjWnNhO';

const firebaseInit = () => {
    !firebase.apps.length && firebase.initializeApp(FirebaseConfig);
}

const getUser = async () => {
    firebaseInit();
    let data = null;
    await firebase.database().ref('users').once('value', (resp) => data = resp.toJSON());
    
    return data[ID];
}

const updateStars = () => {
    firebase.database().ref(`users/${ID}`).set(
        {
        isFistTime: true
        }
    ).then(ok => { console.log('Error', ok)}).catch(error => { console.log('Error', error)});
};

export { getUser, updateStars };