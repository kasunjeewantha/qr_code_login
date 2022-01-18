import CryptoJS from 'crypto-js';

const KEY = 'zxcvbnmasdfghjkl';
const IV = '1234567890123456';

export const encryptData = data => {
  try {
    var data = data;
    var key = CryptoJS.enc.Latin1.parse(KEY);
    var iv = CryptoJS.enc.Latin1.parse(IV);

    var encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding,
    });

    return encrypted;
  } catch (e) {
    return data;
  }
}; // End of Encrypt()

export const decryptData = data => {
  try {
    var encrypted = data;
    var key = CryptoJS.enc.Latin1.parse(KEY);
    var iv = CryptoJS.enc.Latin1.parse(IV);

    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
      iv: iv,
      padding: CryptoJS.pad.ZeroPadding,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    console.log('Decryption error ' + e);
    return data;
  }
}; // End of Decrypt()

