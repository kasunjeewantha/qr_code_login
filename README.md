# qr_code_login

About 

This app allows the user to log to the app through a QR authentication. Then the user get access to add notes and read notes.
First we have to manually add pre defined users to cloud fire store. For that we have to create a data collection named Users. There we add 3 data fields for users, QR Id, User Name, and E mail. Out of these, QR Id is used to identify the user uniquely.
Fire base is used for the data base and back end

With the use of QR Id, a QR Code is manually generated. This QR Code is read by the QR Scanner and a value is taken. If this value and Id given in the fire store are same, that user is already included in the fire store. The value get by QR code and Id are same, the user get access to log to the app.When the user send a note, a data collection named Notes is automatically created in the fire store.

To identify notes, three data types are used.They are; QR Id, date and time and content of the note. Through the QR Id, note is uniquely identified.Data in the Notes collection are saved to the table named as Notes which is in the SQLite data base. Then the notes of users who are currently logged in are displayed in the app by taking their data through the user Id

How to addqrcode-scanner
----------------
npm i react-native-qrcode-scanner


