# qr_code_login

#### About 

This app allows the user to log to the app through a QR authentication. Then the user get access to add notes and read notes.
First we have to manually add pre defined users to cloud fire store. For that we have to create a data collection named Users. There we add 3 data fields for users, QR Id, User Name, and E mail. Out of these, QR Id is used to identify the user uniquely.
Fire base is used for the data base and back end

With the use of QR Id, a QR Code is manually generated. This QR Code is read by the QR Scanner and a value is taken. If this value and Id given in the fire store are same, that user is already included in the fire store. The value get by QR code and Id are same, the user get access to log to the app

### Installed NPM Libraries

#### https://github.com/react-native-device-info/react-native-device-info#installation


npx yarn add react-redux
npx yarn add redux
npx yarn add redux-thunk


How to add Fonts
----------------

https://mehrankhandev.medium.com/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4

How to add SVG Images
---------------------

https://blog.logrocket.com/how-to-use-svgs-react-native-tutorial-with-examples/
https://www.youtube.com/watch?v=2mCu2ekFc3Y
https://www.npmjs.com/package/react-native-svg
https://www.npmjs.com/package/react-native-svg-transformer

yarn add react-native-svg
