import {UPDATE_NOTES} from './ActionTypes';

export function UpdateADDNotes(NewNoteTableDetails) {
    console.log("Action : NewNoteTableDetails : ", JSON.stringify(NewNoteTableDetails));
  return {
    type: UPDATE_NOTES,
    NoteTableDetails: NewNoteTableDetails,
  };
}
