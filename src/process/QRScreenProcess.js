export async function GetRegisteredUsers() {
    const usersCol = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
  
    console.log(usersList);
  
    await SQLiteDB.DeleteUserTable();
    await SQLiteDB.CreateTable();
    await SQLiteDB.InsertUserTable(usersList, usersList.length);
  }