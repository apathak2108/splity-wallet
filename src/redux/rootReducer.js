import { combineReducers } from "redux";
import WalletReducer from "../../src/redux/reducer/walletReducer";
import EntryReducer from "../../src/redux/reducer/entryReducer";

export const rootReducer = combineReducers({
  wallet: WalletReducer,
  entry: EntryReducer,
});
