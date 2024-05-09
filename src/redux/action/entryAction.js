import {
  EDIT_ENTRY,
  DELETE_ENTRY,
  RESET_FORM_DATA,
  SUBMIT_FORM,
  INPUT_CHANGE,
  TO_DO_EDIT_INDEX_NULL,
  IS_LOAD_ENTRIES,
} from "./entryActionTypes";

export const inputChange = (name, value) => {
  return (dispatch, getState) => {
    const { formData } = getState().entry;
    dispatch({
      type: INPUT_CHANGE,
      payload: {
        ...formData,
        [name]: value,
      },
    });
  };
};

export const isLoadEntries = (entries) => {
  return (dispatch) => {
    dispatch({
      type: IS_LOAD_ENTRIES,
      payload: entries,
    });
  };
};

export const submitForm = () => {
  return (dispatch, getState) => {
    const { formData, entries, editIndex } = getState().entry;
    if (editIndex === null) {
      entries.push(formData);
      dispatch({
        type: SUBMIT_FORM,
        payload: entries,
      });
    } else {
      const updatedEntries = [...entries];
      updatedEntries[editIndex] = formData;
      dispatch({
        type: SUBMIT_FORM,
        payload: updatedEntries,
      });
      dispatch(toDoEditIndexNull());
    }
  };
};

export const resetFormData = () => {
  return {
    type: RESET_FORM_DATA,
  };
};

export const toDoEditIndexNull = () => {
  return {
    type: TO_DO_EDIT_INDEX_NULL,
  };
};

export const handleModalView = () => {
  return (dispatch) => {
    dispatch({
      type: "IS_MODAL_OPEN",
    });
  };
};
export const handleEntryToEdit = (index) => {
  return (dispatch, getState) => {
    const { entries } = getState().entry;
    const entryToEdit = entries[index];
    dispatch({
      type: EDIT_ENTRY,
      payload: { entryToEdit, index },
    });
  };
};
export const deleteEntry = (index) => {
  return (dispatch, getState) => {
    const { entries } = getState().entry;
    entries.splice(index, 1);
    dispatch({
      type: DELETE_ENTRY,
      payload: {
        ...entries,
        entries: entries,
      },
    });
  };
};
