import SQLiteDB from '../utils/SQLiteDB';
import {db} from '../firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore/lite';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';

export async function GetRegisteredUsers() {
  NetInfo.addEventListener(async networkState => {
    console.log('Connection type - ', networkState.type);
    console.log('Is connected? - ', networkState.isConnected);

    if (networkState.isConnected == true) {
      const usersCol = collection(db, 'users');
      const usersSnapshot = await getDocs(usersCol);
      const usersList = usersSnapshot.docs.map(doc => doc.data());

      console.log(usersList);

      await SQLiteDB.DeleteUserTable();
      await SQLiteDB.CreateTable();
      await SQLiteDB.InsertUserTable(usersList, usersList.length);
    } else {
      Alert.alert(
        'Communication Error',
        'Please check the Internet connection',
        [{text: 'OK'}],
      );
    }
  });
}
