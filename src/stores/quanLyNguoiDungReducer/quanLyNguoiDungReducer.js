import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AccessToken, UserLogin } from "../../constants/api";
import { quanLyNguoiDung } from "../../services/quanLyNguoiDungServices";

const initialState = {
  nguoiDung: null,
  isFetchNguoiDung: false,
  errNguoiDung: undefined,
  xoaUser: null,
  isFetchXoaUser: false,
  errXoaUser: undefined,
  ttTaiKhoan: null,
  isFetchTtTaiKhoan: false,
  errTtTaiKhoan: undefined,
  danhSachNguoiDung: null,
  isFetchDanhSachNguoiDung: false,
  errDanhSachNguoiDung: undefined,
  addNguoiDung: null,
  isFetchAddNguoiDung: false,
  errAddNguoiDung: undefined,
  ttNguoiDung: null,
  isFetchTtNguoiDung: false,
  errTtNguoiDung: undefined,
  capNhat: null,
  isCapNhat: false,
  errCapNhat: undefined,
  dangKy: null,
  isFetchDangKi: false,
  errDangKi: undefined,
};

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyKhoaHoc",
  initialState,
  reducers: {
    dangXuat: (state, action) => {
      state.nguoiDung = null;
      state.dangKy = null;
      localStorage.removeItem(UserLogin);
      localStorage.removeItem(AccessToken);
    },
    dangKy: (state, action) => {
      state.errDangKi = undefined;
    },
    dangNhap: (state, action) => {
      state.errNguoiDung = undefined;
    },
    themNguoiDung: (state, action) => {
      state.errAddNguoiDung = undefined;
      state.addNguoiDung = null;
    },
    capNhat: (state, action) => {
      state.errCapNhat = undefined;
      state.capNhat = null;
    },
    xoaNguoiDung: (state, action) => {
      state.errXoaUser = undefined;
      state.xoaUser = null;
    },
  },
  extraReducers: (builder) => {
    builder

      //dang nhap
      .addCase(dangNhap.pending, (state, action) => {
        state.isFetchNguoiDung = true;
      })
      .addCase(dangNhap.fulfilled, (state, action) => {
        state.nguoiDung = action.payload;
        console.log(state.nguoiDung);
        state.isFetchNguoiDung = false;
        state.errNguoiDung = undefined;
        console.log(action.payload);
        localStorage.setItem(UserLogin, JSON.stringify(action.payload));
        localStorage.setItem(
          AccessToken,
          JSON.stringify(action.payload.accessToken)
        );
      })
      .addCase(dangNhap.rejected, (state, action) => {
        state.errNguoiDung = action.payload;
        state.isFetchNguoiDung = false;
      })
      // ????ng k?? ng?????i d??ng
      .addCase(dangKyNguoiDung.pending, (state, action) => {
        state.isFetchDangKi = true;
      })
      .addCase(dangKyNguoiDung.fulfilled, (state, action) => {
        state.dangKy = action.payload;
        state.isFetchDangKi = false;
        state.errDangKi = undefined;
      })
      .addCase(dangKyNguoiDung.rejected, (state, action) => {
        state.errDangKi = action.payload;
        state.isFetchDangKi = false;
      })
      // xo?? ng?????i d??ng
      .addCase(xoaNguoiDung.pending, (state, action) => {
        state.isFetchXoaUser = true;
      })
      .addCase(xoaNguoiDung.fulfilled, (state, action) => {
        state.isFetchXoaUser = false;
        state.xoaUser = action.payload;
        state.errXoaUser = undefined;
      })
      .addCase(xoaNguoiDung.rejected, (state, action) => {
        state.isFetchXoaUser = false;
        state.errXoaUser = action.payload;
        state.xoaUser = null;
      })
      // th??ng tin t??i kho???n
      .addCase(thongTinTaiKhoan.pending, (state, action) => {
        state.isFetchTtTaiKhoan = true;
      })
      .addCase(thongTinTaiKhoan.fulfilled, (state, action) => {
        state.isFetchTtTaiKhoan = false;
        state.ttTaiKhoan = action.payload;
      })
      .addCase(thongTinTaiKhoan.rejected, (state, action) => {
        state.isFetchTtTaiKhoan = false;
        state.errTtTaiKhoan = action.payload;
      })
      // l???y danh s??ch ng?????i d??ng
      .addCase(layDanhSachNguoiDung.pending, (state, action) => {
        state.isFetchDanhSachNguoiDung = true;
      })
      .addCase(layDanhSachNguoiDung.fulfilled, (state, action) => {
        state.danhSachNguoiDung = action.payload;
        state.isFetchDanhSachNguoiDung = false;
      })
      .addCase(layDanhSachNguoiDung.rejected, (state, action) => {
        state.errDanhSachNguoiDung = action.payload;
        state.isFetchDanhSachNguoiDung = false;
      })
      // th??m ng?????i d??ng
      .addCase(themNguoiDung.pending, (state, action) => {
        state.isFetchAddNguoiDung = true;
      })
      .addCase(themNguoiDung.fulfilled, (state, action) => {
        state.isFetchAddNguoiDung = false;
        state.addNguoiDung = action.payload; //tr??? v??? ng?????i d??ng
        state.errAddNguoiDung = undefined;
      })
      .addCase(themNguoiDung.rejected, (state, action) => {
        state.isFetchAddNguoiDung = false;
        state.errAddNguoiDung = action.payload; // tr??? v??? l???i form
      })
      // l???y th??ng tin ng?????i d??ng
      .addCase(layThongTinNguoiDung.pending, (state, action) => {
        state.isFetchTtNguoiDung = true;
      })
      .addCase(layThongTinNguoiDung.fulfilled, (state, action) => {
        state.isFetchTtNguoiDung = false;
        state.ttNguoiDung = action.payload; //tr??? v??? tt ng?????i d??ng
      })
      .addCase(layThongTinNguoiDung.rejected, (state, action) => {
        state.isFetchTtNguoiDung = false;
        state.errTtNguoiDung = action.payload;
      })
      // c???p nh???t th??ng tin ng?????i d??ng
      .addCase(capNhatThongTinNguoiDung.pending, (state, action) => {
        state.isCapNhat = true;
      })
      .addCase(capNhatThongTinNguoiDung.fulfilled, (state, action) => {
        state.isCapNhat = false;
        state.capNhat = action.payload; //tr??? v??? tt ng?????i d??ng
        state.errCapNhat = undefined;
      })
      .addCase(capNhatThongTinNguoiDung.rejected, (state, action) => {
        state.isCapNhat = false;
        state.errCapNhat = action.payload;
      });
  },
});
//dangnhap
export const dangNhap = createAsyncThunk(
  "quanLyNguoiDung/dangNhap",
  async (taiKhoan, { rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDung.dangNhap(taiKhoan);
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
//dangKyNguoiDung
export const dangKyNguoiDung = createAsyncThunk(
  "quanLyNguoiDung/dangKyNguoiDung",
  async (taiKhoan, { rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDung.dangKy(taiKhoan);
      console.log(result);
      console.log("thanh cong");
      return result.data.content;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.content);
    }
  }
);
export const getNguoiDung = createAsyncThunk(
  "quanLyNguoiDungReducer/getNguoiDung",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const value = getState().quanLyNguoiDungReducer;
      const result = await quanLyNguoiDung.getNguoiDung();
      console.log(result);
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const xoaNguoiDung = createAsyncThunk(
  "quanLyNguoiDung/xoaNguoiDung",
  async (taiKhoan, { rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDung.xoaNguoiDung(taiKhoan);
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data.content);
    }
  }
);
export const thongTinTaiKhoan = createAsyncThunk(
  "quanLyNguoiDung/thongTinTaiKhoan",
  async (data, { rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDung.thongTinTaiKhoan();
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data.content);
    }
  }
);
export const layDanhSachNguoiDung = createAsyncThunk(
  "quanLyNguoiDung/layDanhSachNguoiDung",
  async (keyword, { rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDung.layDanhSachNguoiDung(keyword);
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data.content);
    }
  }
);
export const themNguoiDung = createAsyncThunk(
  "quanLyNguoiDung/themNguoiDung",
  async (nguoiDung, { rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDung.themNguoiDung(nguoiDung);
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data.content);
    }
  }
);
export const layThongTinNguoiDung = createAsyncThunk(
  "quanLyNguoiDung/layThongTinNguoiDung",
  async (taiKhoan, { rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDung.layThongTinNguoiDung(taiKhoan);
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data.content);
    }
  }
);
export const capNhatThongTinNguoiDung = createAsyncThunk(
  "quanLyNguoiDung/capNhatThongTinNguoiDung",
  async (taiKhoan, { rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDung.capNhatThongTinNguoiDung(taiKhoan);
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response.data.content);
    }
  }
);
