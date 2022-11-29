import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AccessToken, UserLogin } from '../../constants/api';
import { quanLyNguoiDung } from '../../services/quanLyNguoiDungServices';

const initialState = {
    listnguoidung: [], isFetchListNguoiDung: false, errListNguoiDung: undefined,nguoiDung: null, isFetchNguoiDung: false, errNguoiDung: undefined,
    dangKy: null, isFetchDangKi: false, errDangKi: undefined,
    ttTaiKhoan: null, isFetchTtTaiKhoan: false, errTtTaiKhoan: undefined,
    danhSachNguoiDung: null, isFetchDanhSachNguoiDung: false, errDanhSachNguoiDung: undefined,
}

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = createSlice({
    name: 'quanLyKhoaHoc',
    initialState,
    reducers: {
        dangXuat: (state, action) => {
            state.nguoiDung = null
            state.dangKy = null
            localStorage.removeItem(UserLogin)
            localStorage.removeItem(AccessToken)
         },
         dangKy: (state, action) => {
            state.errDangKi = undefined
         },
         dangNhap: (state, action) => {
            state.errNguoiDung = undefined
         },
    },
    extraReducers: (builder) => {
        builder

        //dang nhap
        .addCase(dangNhap.pending, (state, action) => {
            state.isFetchNguoiDung = true
         }).addCase(dangNhap.fulfilled, (state, action) => {
            state.nguoiDung = action.payload
            state.isFetchNguoiDung = false
            state.errNguoiDung = undefined
            localStorage.setItem(UserLogin, JSON.stringify(action.payload))
            localStorage.setItem(AccessToken, JSON.stringify(action.payload.accessToken))
         }).addCase(dangNhap.rejected, (state, action) => {
            state.errNguoiDung = action.payload
            state.isFetchNguoiDung = false
         })
          // đăng ký người dùng
          .addCase(dangKyNguoiDung.pending, (state, action) => {
            state.isFetchDangKi = true
         }).addCase(dangKyNguoiDung.fulfilled, (state, action) => {
            state.dangKy = action.payload
            state.isFetchDangKi = false
            state.errDangKi = undefined
         }).addCase(dangKyNguoiDung.rejected, (state, action) => {
            state.errDangKi = action.payload
            state.isFetchDangKi = false
         })
              // thông tin tài khoản
              .addCase(thongTinTaiKhoan.pending, (state, action) => {
               state.isFetchTtTaiKhoan = true
            }).addCase(thongTinTaiKhoan.fulfilled, (state, action) => {
               state.isFetchTtTaiKhoan = false
               state.ttTaiKhoan = action.payload
            }).addCase(thongTinTaiKhoan.rejected, (state, action) => {
               state.isFetchTtTaiKhoan = false
               state.errTtTaiKhoan = action.payload
            })
                     // lấy danh sách người dùng
         .addCase(layDanhSachNguoiDung.pending, (state, action) => {
            state.isFetchDanhSachNguoiDung = true
         }).addCase(layDanhSachNguoiDung.fulfilled, (state, action) => {
            state.danhSachNguoiDung = action.payload
            state.isFetchDanhSachNguoiDung = false
         }).addCase(layDanhSachNguoiDung.rejected, (state, action) => {
            state.errDanhSachNguoiDung = action.payload
            state.isFetchDanhSachNguoiDung = false
         })
         //
        .addCase(getNguoiDung.pending, (state, action) => {
            state.isFetchListNguoiDung = true
         }).addCase(getNguoiDung.fulfilled, (state, action) => {
            state.listnguoidung = action.payload
            state.isFetchListNguoiDung = false
         }).addCase(getNguoiDung.rejected, (state, action) => {
            state.errListNguoiDung = action.payload
            state.isFetchListNguoiDung = false
         })
    }
});
//dangnhap
export const dangNhap = createAsyncThunk('quanLyNguoiDung/dangNhap',
   async (taiKhoan, { rejectWithValue }) => {
      try {
         const result = await quanLyNguoiDung.dangNhap(taiKhoan)
         console.log(result)
         return result.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
//dangKyNguoiDung
export const dangKyNguoiDung = createAsyncThunk('quanLyNguoiDung/dangKyNguoiDung',
   async (taiKhoan, { rejectWithValue }) => {
      try {
         const result = await quanLyNguoiDung.dangKy(taiKhoan)
         return result.data.content
      } catch (err) {
         return rejectWithValue(err.response.data.content)
      }
   }
)
export const thongTinTaiKhoan = createAsyncThunk('quanLyNguoiDung/thongTinTaiKhoan',
   async (data, { rejectWithValue }) => {
      try {
         const result = await quanLyNguoiDung.thongTinTaiKhoan()
         return result.data.content
      } catch (err) {
         return rejectWithValue(err.response.data.content)
      }
   }
)
export const layDanhSachNguoiDung = createAsyncThunk('quanLyNguoiDung/layDanhSachNguoiDung',
   async (keyword, { rejectWithValue }) => {
      try {
         const result = await quanLyNguoiDung.layDanhSachNguoiDung(keyword)
         return result.data.content
      } catch (err) {
         return rejectWithValue(err.response.data.content)
      }
   }
)
export const getNguoiDung = createAsyncThunk(
    'quanLyNguoiDungReducer/getNguoiDung',
    async (data, { dispatch, getState, rejectWithValue }) => {
        try {
            const value = getState().quanLyNguoiDungReducer
            const result = await quanLyNguoiDung.getNguoiDung();
            console.log(result);
            return result.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
 )