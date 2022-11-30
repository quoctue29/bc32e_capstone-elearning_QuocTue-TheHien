import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyCourseServices } from "../../services/quanLyCourseServices";

const initialState = {
  listKhoaHoc: [],
  listDanhMuc: [],
  KhoaHocDetail: undefined,
  listKhoaHocTheoDanhMuc: [],
  isFetchListKhoaHoc: false,
  errListKhoaHoc: undefined,
  themKhoaHoc: null, isFetchThemKhoaHoc: false, errThemKhoaHoc: undefined,
   delKhoaHoc: null, isFetchDelKhoaHoc: false, errDelKhoaHoc: undefined,
   upDateKhoaHoc: null, isFetchUpdateKhoaHoc: false, errUpdateKhoaHoc: undefined
};

export const { reducer: quanLyKhoaHocReducer, actions: quanLyKhoaHocActions } =
  createSlice({
    name: "quanLyKhoaHoc",
    initialState,
    reducers: {
      themKhoaHoc: (state, action) => {
        state.themKhoaHoc = null
        state.errThemKhoaHoc = undefined
     },
     suaKhoaHoc: (state, action) => {
        state.upDateKhoaHoc = null
        state.errUpdateKhoaHoc = undefined
     },
     xoaKhoaHoc: (state, action) => {
        state.delKhoaHoc = null
        state.errDelKhoaHoc = undefined
     }
    },
    extraReducers: (builder) => {
      builder
      //thêm khóa học
      .addCase(themKhoaHocUploadHinh.pending, (state, action) => {
        state.isFetchThemKhoaHoc = true
     }).addCase(themKhoaHocUploadHinh.fulfilled, (state, action) => {
        state.isFetchThemKhoaHoc = false
        state.themKhoaHoc = action.payload
        state.errThemKhoaHoc = undefined
     }).addCase(themKhoaHocUploadHinh.rejected, (state, action) => {
        state.isFetchThemKhoaHoc = false
        state.errThemKhoaHoc = action.payload
        state.themKhoaHoc = null
     })
     //Xoá khóa học
     .addCase(xoaKhoaHoc.pending, (state, action) => {
        state.isFetchDelKhoaHoc = true
     }).addCase(xoaKhoaHoc.fulfilled, (state, action) => {
        state.isFetchDelKhoaHoc = false
        state.delKhoaHoc = action.payload
        state.errDelKhoaHoc = undefined
     }).addCase(xoaKhoaHoc.rejected, (state, action) => {
        state.isFetchDelKhoaHoc = false
        state.errThemKhoaHoc = action.payload
        state.delKhoaHoc = null
     })
     // Cập nhật khóa học
     .addCase(capNhatKhoaHocUpload.pending, (state, action) => {
        state.isFetchUpdateKhoaHoc = true
     }).addCase(capNhatKhoaHocUpload.fulfilled, (state, action) => {
        state.isFetchUpdateKhoaHoc = false
        state.upDateKhoaHoc = action.payload
        state.errUpdateKhoaHoc = undefined
     }).addCase(capNhatKhoaHocUpload.rejected, (state, action) => {
        state.isFetchUpdateKhoaHoc = false
        state.errUpdateKhoaHoc = action.payload
        state.upDateKhoaHoc = null
     })

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
  async (detail, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await quanLyCourseServices.getChiTietKhoaHoc(detail);
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
export const themKhoaHocUploadHinh = createAsyncThunk('quanLyKhoaHocReducer/themKhoaHocUploadHinh',
   async (data, { rejectWithValue }) => {
      try {
         const result = await quanLyCourseServices.themKhoaHocUploadHinh(data)
         return result.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
export const xoaKhoaHoc = createAsyncThunk('quanLyKhoaHocReducer/xoaKhoaHoc',
   async (data, { rejectWithValue }) => {
      try {
         const result = await quanLyCourseServices.xoaKhoaHoc(data)
         return result.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
export const capNhatKhoaHocUpload = createAsyncThunk('quanLyKhoaHocReducer/capNhatKhoaHocUpload',
   async (data, { rejectWithValue }) => {
      try {
         const result = await quanLyCourseServices.capNhatKhoaHocUpload(data)
         return result.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
