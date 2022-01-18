import {Alert} from 'react-native';
import SetNotes from '../process/AddNoteProcess';
import NetInfo from '@react-native-community/netinfo';
import {UPDATE_LOADING} from './ActionTypes';

export function ValidateADDNotes(Note, QRId) {
  console.log(' ValidateADDNotes - Notes : ' + Note);

  return dispatch => {
    if (Note === '') {
      Alert.alert('Validation Error', 'please enter your note', [{text: 'OK'}]);
    } else {
      NetInfo.addEventListener(async networkState => {
        console.log('Connection type - ', networkState.type);
        console.log('Is connected? - ', networkState.isConnected);
        if (networkState.isConnected == true) {
          SetNotes(Note, QRId);
        } else {
          Alert.alert(
            'Communication Error',
            'Please check the Internet connection',
            [{text: 'OK'}],
          );
        }
      });
    }
  };
}

export function ADDNotesLoading(loading) {
  console.log('Action : ADDNotesLoading');

  return {
    type: UPDATE_LOADING,
    loading: loading,
  };
}
