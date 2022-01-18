import SQLiteDB from '../utils/SQLiteDB';
import {db} from '../firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore/lite';

export default async function GetNotes(QRId, callback) {

  const notesCol = collection(db, 'notes');
  const notesSnapshot = await getDocs(notesCol);
  const noteList = notesSnapshot.docs.map(doc => doc.data());

  console.log('' + JSON.stringify(noteList));

  await SQLiteDB.DeleteNoteTable();
  await SQLiteDB.CreateTable();
  await SQLiteDB.InsertNoteTable(noteList, noteList.length);
  await SQLiteDB.SelectNoteByQRIdTable(QRId, NoteTableDetails => {
    console.log('NoteTableDetails' + JSON.stringify(NoteTableDetails));

    callback(NoteTableDetails);
  });

  
} // End of SearchBSP()
