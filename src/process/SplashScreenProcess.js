import SQLiteDB from '../utils/SQLiteDB';
import {db} from '../firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore/lite';

export async function GetRegisteredUsers() {
  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => doc.data());

  console.log(usersList);

  await SQLiteDB.DeleteUserTable();
  await SQLiteDB.CreateTable();
  await SQLiteDB.InsertUserTable(usersList, usersList.length);
}


