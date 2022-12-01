import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import cardSlice from "./Card/cardSlice";
import { quanLyKhoaHocReducer } from "./quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDungReducer/quanLyNguoiDungReducer";
const rootReducer = combineReducers({
  card: cardSlice,
  quanLyNguoiDungReducer,
  quanLyKhoaHocReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
