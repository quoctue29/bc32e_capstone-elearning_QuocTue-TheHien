import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyCourseServices } from "../../services/quanLyCourseServices";

const initialState = {
  listKhoaHoc: [],
  listDanhMuc: [],
  KhoaHocDetail: undefined,
  listKhoaHocTheoDanhMuc: [],
  isFetchListKhoaHoc: false,
  errListKhoaHoc: undefined,
};

export const { reducer: quanLyKhoaHocReducer, actions: quanLyKhoaHocActions } =
  createSlice({
    name: "quanLyKhoaHoc",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(getKhoaHocList.pending, (state, action) => {
          state.isFetchListKhoaHoc = true;
        })
        .addCase(getKhoaHocList.fulfilled, (state, action) => {
          state.listKhoaHoc = action.payload;
          state.isFetchListKhoaHoc = false;
        })
        .addCase(getKhoaHocList.rejected, (state, action) => {
          state.errListKhoaHoc = action.payload;
          state.isFetchListKhoaHoc = false;
        })

        .addCase(getChiTietKhoaHoc.pending, (state, action) => {
          state.isFetchListKhoaHoc = true;
        })
        .addCase(getChiTietKhoaHoc.fulfilled, (state, action) => {
          state.isFetchListKhoaHoc = false;
          state.KhoaHocDetail = action.payload;
        })
        .addCase(getChiTietKhoaHoc.rejected, (state, action) => {
          state.isFetchListKhoaHoc = false;
          state.KhoaHocDetail = action.payload;
        })

        .addCase(getDanhMucKhoaHoc.pending, (state, action) => {
          state.isFetchListKhoaHoc = true;
        })
        .addCase(getDanhMucKhoaHoc.fulfilled, (state, action) => {
          state.listDanhMuc = action.payload;
          state.isFetchListKhoaHoc = false;
        })
        .addCase(getDanhMucKhoaHoc.rejected, (state, action) => {
          state.errListKhoaHoc = action.payload;
          state.isFetchListKhoaHoc = false;
        })

        .addCase(getKhoaHocTheoDanhMuc.pending, (state, action) => {
          state.isFetchListKhoaHoc = true;
        })
        .addCase(getKhoaHocTheoDanhMuc.fulfilled, (state, action) => {
          state.listKhoaHocTheoDanhMuc = action.payload;
          state.isFetchListKhoaHoc = false;
        })
        .addCase(getKhoaHocTheoDanhMuc.rejected, (state, action) => {
          state.errListKhoaHoc = action.payload;
          state.isFetchListKhoaHoc = false;
        });
    },
  });
export const getKhoaHocList = createAsyncThunk(
  "quanLyKhoaHocReducer/getKhoaHocList",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const value = getState().quanLyKhoaHocReducer;
      const result = await quanLyCourseServices.getKhoaHocList();
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getChiTietKhoaHoc = createAsyncThunk(
  "quanLyKhoaHocReducer/getChiTietKhoaHoc",
  async (payload, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await quanLyCourseServices.getChiTietKhoaHoc(payload);
      console.log(result);
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getDanhMucKhoaHoc = createAsyncThunk(
  "quanLyKhoaHocReducer/getDanhMucKhoaHoc",
  async (danhmuc, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await quanLyCourseServices.getDanhMucKhoaHoc();
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getKhoaHocTheoDanhMuc = createAsyncThunk(
  "quanLyKhoaHocReducer/getKhoaHocTheoDanhMuc",
  async (payload, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await quanLyCourseServices.getKhoaHocTheoDanhMuc(payload);
      return result;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
