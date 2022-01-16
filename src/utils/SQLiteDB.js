import {openDatabase} from 'react-native-sqlite-storage';
import {encryptData, decryptData} from './helpers';

// Create SQLite Tables
const CREATE_USER_TBL =
  'CREATE TABLE IF NOT EXISTS user(Email TEXT , QRId TEXT PRIMARY KEY, Username TEXT)';

// Insert Table
const INSERT_USER_TBL = 'INSERT INTO user(Email, QRId, Username) VALUES';

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

  DeleteUserTable = async () => {
    var SQLDelete = "DROP TABLE IF EXISTS user"
    console.log('[SQLiteDB] - DeleteInfoByTempIdTable Query : ', SQLDelete);

    let SQLDeleteResults = await this.ExecuteQuery(SQLDelete, []);
    console.log(
      '[SQLiteDB] - DeleteUserByQRIdTable Query Result : ',
      SQLDeleteResults,
    );
  };
} // End of SQLiteDB()

const SQLiteDBObject = new SQLiteDB();

export default SQLiteDBObject;
