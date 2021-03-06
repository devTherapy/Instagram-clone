import {firebase, FieldValue} from '../lib/firebase';

export async function doesUsernameExists(username) {
    const result = await firebase.firestore().collection('users').where('username', '==', username).get();
    return result.docs.length > 0;
}
