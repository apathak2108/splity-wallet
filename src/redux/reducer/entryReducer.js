import {
  ADD_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY,
  RESET_FORM_DATA,
  IS_MODAL_OPEN,
  SUBMIT_FORM,
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
  toastOpen: false,
  toastMessage: "",
  editIndex: null,
};

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
        entries: [...state.entries, action.payload],
      };
    case EDIT_ENTRY:
      return {
        ...state,
        openPopup: true,
        toastOpen: true,
        toastMessage: "Entry editted successfully",
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
      return state;
    default:
      return state;
  }
};

export default entryReducer;
