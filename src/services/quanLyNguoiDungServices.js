import { api } from '../constants/api'


export const quanLyNguoiDung = {
    getNguoiDung: () => {
        return api.get('/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung')
    },
    dangNhap: (taiKhoan) => {
        return api.post('/api/QuanLyNguoiDung/DangNhap', taiKhoan)
     },
     dangKy: (taiKhoan) => {
        return api.post('/api/QuanLyNguoiDung/DangKy', taiKhoan)
     },
     thongTinTaiKhoan:()=>{
        return api.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
     },
     layDanhSachNguoiDung:(keyword)=>{
        return api.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=gp00&${keyword}`)
     },
}