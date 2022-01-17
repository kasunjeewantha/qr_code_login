import { UPDATE_NOTES } from "./ActionTypes";

export function UpdateViewNotes(NewNoteTableDetails) {
    console.log("Action : NewNoteTableDetails : ", JSON.stringify(NewNoteTableDetails));
  return {
    type: UPDATE_NOTES,
    NoteTableDetails: NewNoteTableDetails,
  };
}
