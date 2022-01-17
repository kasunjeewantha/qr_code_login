import {db} from '../firebase/firebase-config';
import {collection, addDoc} from 'firebase/firestore/lite';
import {Alert} from 'react-native';
import moment from 'moment';

export default async function SetNotes(Note,QRId) {
  let CurrentDate = moment()
    .utcOffset('+05:30')
    .format('YYYY-MM-DD hh:mm:ss')
    .toString();

  const docRef = await addDoc(collection(db, 'notes'), {
    note: Note,
    time: CurrentDate,
    QRId: QRId,
  });
  Alert.alert('', 'Submit Successful', [{text: 'OK'}]);
}
