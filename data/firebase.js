import * as firebase from 'firebase';
import FirebaseConfig from '../constants/FirebaseConfig';
const ID = 'V7CCZpfSwxV3BYjWnNhO';

const firebaseInit = () => {
    !firebase.apps.length && firebase.initializeApp(FirebaseConfig);
}

const getUser = async () => {
    firebaseInit();
    let data = null;
    await firebase.database().ref('users').once('value', (resp) => data = resp.toJSON()).catch(() => console.log('Error'));
    return data[ID];
}

const updateStars = (data) => {
    console.log(data);
    
    firebase.database().ref(`users/${ID}`).set(data)
    .then(ok => { console.log('OK', ok)}).catch(error => { console.log('Error', error)});
};

export { getUser, updateStars };