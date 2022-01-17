import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";
import { Platform } from "react-native";

const PLATFORM_CAMERA_PERMISSIONS = {
  android: PERMISSIONS.ANDROID.CAMERA,
};

const PLATFORM_READ_EXTERNAL_STORAGE_PERMISSIONS = {
  android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
};

const PLATFORM_WRITE_EXTERNAL_STORAGE_PERMISSIONS = {
  android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
};

const PLATFORM_CALL_PHONE_PERMISSIONS = {
  android: PERMISSIONS.ANDROID.CALL_PHONE,
};

const PLATFORM_RECORD_AUDIO_PERMISSIONS = {
  android: PERMISSIONS.ANDROID.RECORD_AUDIO,
};

const REQUEST_PERMISSION_TYPE = {
  camera: PLATFORM_CAMERA_PERMISSIONS,
  readExternalStorage: PLATFORM_READ_EXTERNAL_STORAGE_PERMISSIONS,
  writeExternalStorage: PLATFORM_WRITE_EXTERNAL_STORAGE_PERMISSIONS,
  callPhone: PLATFORM_CALL_PHONE_PERMISSIONS,
  recordAudio: PLATFORM_RECORD_AUDIO_PERMISSIONS,
};

const PERMISSION_TYPE = {
  camera: "camera",
  readExternalStorage: "readExternalStorage",
  writeExternalStorage: "writeExternalStorage",
  callPhone: "callPhone",
  recordAudio: "recordAudio",
};

class AppPermisions {
  checkPermission = async (type) /* : Promise<boolean> */ => {
    console.log("AppPermission requestPermission type : ", type);
    const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];
    console.log("AppPermission requestPermission permissions : ", permissions);
    if (!permissions) {
      let a = "permission creation error";
      alert("permission creation error");
      return a;
      // return true
    }
    try {
      const result = await check(permissions);
      console.log("AppPermission requestPermission resultCheck : ", result);
      if (result === RESULTS.GRANTED) return result;
      //true

      return this.requestPermission(permissions);
    } catch (error) {
      let a = "requestPermission error 1";
      console.log("AppPermission requestPermission error 1 : ", error);
      return a;
      // return false
    }
  };
  requestPermission = async (permissions) /* :Promise<boolean> */ => {
    console.log(
      "AppPermission requestPermission resultRequest : ",
      permissions
    );
    try {
      const result = await request(permissions);
      console.log("AppPermission : " + i++, result);
      return result;
      // result === RESULTS.GRANTED
    } catch (error) {
      let a = "requestPermission error 2";
      console.log("AppPermission requestPermission error 2 : ", error);
      return a;
      //return false
    }
  };

  // requestMultiple = async (types)/* :Promise<boolean> */ => {
  //     console.log("AppPermission requestMultiple types: ", types)
  //     const results = []
  //     for (const type of types) {
  //         const permission = REQUEST_PERMISSION_TYPE[type][Platform.OS]
  //         if (permission) {
  //             const result = await this.requestPermission(permission)
  //             results.push(result)
  //         }
  //     }
  //     for (const result of results) {
  //         if (!result) {
  //             return false
  //         }
  //     }
  //     return true
  // }

  requestMultiple = async (types) /* :Promise<boolean> */ => {
    console.log("AppPermission requestMultiple types: ", types);
    const results = [];
    for (const type of types) {
      let result = await this.checkPermission(type);
      results.push(result);
    }
    return results;
  };
}

const Permission = new AppPermisions();
export { Permission, PERMISSION_TYPE };
