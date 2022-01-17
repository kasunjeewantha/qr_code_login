import {openDatabase} from 'react-native-sqlite-storage';
import {encryptData, decryptData} from './helpers';

// Create SQLite Tables
const CREATE_USER_TBL =
  'CREATE TABLE IF NOT EXISTS user(Email TEXT , QRId TEXT PRIMARY KEY, Username TEXT)';

const CREATE_NOTE_TBL =
  'CREATE TABLE IF NOT EXISTS note(Content TEXT , Date TEXT , QRID TEXT)';

// Insert Table
const INSERT_USER_TBL = 'INSERT INTO user(Email, QRId, Username) VALUES';
const INSERT_NOTE_TBL = 'INSERT INTO note(Content, Date, QRId) VALUES';

var db = openDatabase({name: 'ProntoQR.db'});

class SQLiteDB {
  ExecuteQuery = (sql, params = []) =>
    new Promise((resolve, reject) => {
      db.transaction(trans => {
        trans.executeSql(
          sql,
          params,
          (trans, results) => {
            resolve(results);
          },
          error => {
            console.log('ExecuteQuery - ' + sql + ' : ', error);
            reject(error);
          },
        );
      });
    });

  CreateTable = async () => {
    console.log('[SQLiteDB] - Create user Table');
    let resultUser = await this.ExecuteQuery(CREATE_USER_TBL, []);
    console.log(
      '[SQLiteDB] - Create user  Table Results : ',
      JSON.stringify(resultUser),
    );

    console.log('[SQLiteDB] - Create note Table');
    let resultNote = await this.ExecuteQuery(CREATE_NOTE_TBL, []);
    console.log(
      '[SQLiteDB] - Create note  Table Results : ',
      JSON.stringify(resultNote),
    );
  };

  InsertUserTable = async (data, length) => {
    console.log('[SQLiteDB] - InsertUserTable Data : ', JSON.stringify(data));
    console.log('[SQLiteDB] - InsertUserTable Length : ', length);

    let SQLInsert = INSERT_USER_TBL;
    for (let i = 0; i < length; ++i) {
      SQLInsert =
        SQLInsert +
        "('" +
        encryptData(data[i].Email) +
        "','" +
        encryptData(data[i].QRId) +
        "','" +
        encryptData(data[i].Username) +
        "')";

      if (i != length - 1) SQLInsert = SQLInsert + ',';
    }

    console.log('[SQLiteDB] - Insert user Query : ', SQLInsert);
    var SQLInsertResult = await this.ExecuteQuery(SQLInsert, []);
    console.log(
      '[SQLiteDB] - Insert user Query Result : ',
      JSON.stringify(SQLInsertResult),
    );
  };

  InsertNoteTable = async (data, length) => {
    console.log('[SQLiteDB] - InsertNoteTable Data : ', JSON.stringify(data));
    console.log('[SQLiteDB] - InsertNoteTable Length : ', length);

    let SQLInsert = INSERT_NOTE_TBL;
    for (let i = 0; i < length; ++i) {
      SQLInsert =
        SQLInsert +
        "('" +
        data[i].note +
        "','" +
        data[i].time +
        "','" +
        data[i].QRId +
        "')";

      if (i != length - 1) SQLInsert = SQLInsert + ',';
    }

    console.log('[SQLiteDB] - Insert note Query : ', SQLInsert);
    var SQLInsertResult = await this.ExecuteQuery(SQLInsert, []);
    console.log(
      '[SQLiteDB] - Insert note Query Result : ',
      JSON.stringify(SQLInsertResult),
    );
  };

  SelectUserTable = async callback => {
    var SQLSelect = 'SELECT Email,QRId,Username FROM user';

    var SQLSelectResults = await this.ExecuteQuery(SQLSelect, []);
    console.log(
      '[SQLiteDB] - SelectImagesByTempIDTable Query Result : ',
      JSON.stringify(SQLSelectResults),
    );

    var UserTableDetails = [];

    if (SQLSelectResults && SQLSelectResults.rows.length > 0) {
      for (let i = 0; i < SQLSelectResults.rows.length; ++i) {
        UserTableDetails.push({
          Email: decryptData(SQLSelectResults.rows.item(i).Email),
          QRId: decryptData(SQLSelectResults.rows.item(i).QRId),
          Username: decryptData(SQLSelectResults.rows.item(i).Username),
        });
      }
    }

    callback(UserTableDetails);
  };

  SelectNoteTable = async callback => {
    var SQLSelect = 'SELECT Content,QRId,Date FROM note';

    var SQLSelectResults = await this.ExecuteQuery(SQLSelect, []);
    console.log(
      '[SQLiteDB] - SelectNoteTable Query Result : ',
      JSON.stringify(SQLSelectResults),
    );

    var NoteTableDetails = [];

    if (SQLSelectResults && SQLSelectResults.rows.length > 0) {
      for (let i = 0; i < SQLSelectResults.rows.length; ++i) {
        NoteTableDetails.push({
          Content: SQLSelectResults.rows.item(i).Content,
          Date: SQLSelectResults.rows.item(i).Date,
          QRId: SQLSelectResults.rows.item(i).QRId,
        });
      }
    }

    callback(NoteTableDetails);
  };

  SelectNoteByQRIdTable = async (QRId, callback) => {
    console.log(
      'encryptData(JSON.stringify(QRId)' + encryptData(JSON.stringify(QRId)),
    );
    var SQLSelect =
      "SELECT Content, Date FROM note WHERE QRId = '" + QRId + "'";
    console.log('[SQLiteDB] - SelectNoteByQRIdTable Query : ', SQLSelect);

    var SQLSelectResults = await this.ExecuteQuery(SQLSelect, []);
    console.log(
      '[SQLiteDB] - SelectNoteByQRIdTable Query Result : ',
      JSON.stringify(SQLSelectResults),
    );

    var NoteTableDetails = [];

    if (SQLSelectResults && SQLSelectResults.rows.length > 0) {
      for (let i = 0; i < SQLSelectResults.rows.length; ++i) {
        NoteTableDetails.push({
          ID: i,
          Content: SQLSelectResults.rows.item(i).Content,
          Date: SQLSelectResults.rows.item(i).Date,
        });
      } // End For
    }

    callback(NoteTableDetails);
  }; // End of SelectImagesByTempIDTable()

  DeleteUserTable = async () => {
    var SQLDelete = 'DROP TABLE IF EXISTS user';
    console.log('[SQLiteDB] - DeleteUserTable Query : ', SQLDelete);

    let SQLDeleteUsers = await this.ExecuteQuery(SQLDelete, []);
    console.log('[SQLiteDB] - DeleteUserTable Query Result : ', SQLDeleteUsers);
  };

  DeleteNoteTable = async () => {
    var SQLDelete = 'DROP TABLE IF EXISTS note';
    console.log('[SQLiteDB] - DeleteNoteTable Query : ', SQLDelete);

    let SQLDeleteNotes = await this.ExecuteQuery(SQLDelete, []);
    console.log('[SQLiteDB] - DeleteNoteTable Query Result : ', SQLDeleteNotes);
  };
} // End of SQLiteDB()

const SQLiteDBObject = new SQLiteDB();

export default SQLiteDBObject;
