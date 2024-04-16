import {
  INPUT_CHANGE,
  EDIT_ENTRY,
  DELETE_ENTRY,
  RESET_FORM_DATA,
  IS_MODAL_OPEN,
  SUBMIT_FORM,
  TO_DO_EDIT_INDEX_NULL,
  IS_LOAD_ENTRIES,
} from "../action/entryActionTypes";

const initialState = {
  openPopup: false,
  formData: {
    name: "",
    amount: null,
    date: null,
    type: "option1",
  },
  entries: [],
  editIndex: null,
};

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        formData: {
          ...action.payload,
        },
      };
    case EDIT_ENTRY:
      return {
        ...state,
        formData: { ...action.payload.entryToEdit },
        editIndex: action.payload.index,
        openPopup: true,
        toastOpen: true,
        toastMessage: "Entry editted successfully",
      };
    case TO_DO_EDIT_INDEX_NULL:
      return {
        ...state,
        editIndex: null,
      };
    case DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter((index) => index !== action.payload),
      };
    case IS_MODAL_OPEN:
      return {
        ...state,
        openPopup: !state.openPopup,
      };
    case RESET_FORM_DATA:
      return {
        ...state,
        formData: {
          name: "",
          amount: null,
          date: null,
          type: "option1",
        },
      };
    case SUBMIT_FORM:
      return {
        ...state,
        entries: [...action.payload],
        openPopup: false,
        formData: {
          name: "",
          amount: null,
          date: null,
          type: "option1",
        },
      };
    case IS_LOAD_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };
    default:
      return state;
  }
};

export default entryReducer;
