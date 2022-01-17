import {Alert} from 'react-native';
import SetNotes from '../process/AddNoteProcess';

export function ValidateADDNotes(Note, QRId) {
  console.log(' ValidateADDNotes - Notes : ' + Note);

  return () => {
    // 1 - Screen Validate
    if (Note === '') {
      Alert.alert('Validation Error', 'please enter your note', [{text: 'OK'}]);
    } else {
      SetNotes(Note, QRId);
    } // End if
  };
} // End of ValidatePizzaHutSignIn()
