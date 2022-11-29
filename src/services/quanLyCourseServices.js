import { api } from "../constants/api";

export const quanLyCourseServices = {
  getKhoaHocList: () => {
    return api.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");
  },
  getChiTietKhoaHoc: (maKhoaHoc) => {
    return api.get(
      `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  },
  getDanhMucKhoaHoc: () => {
    return api.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
  getKhoaHocTheoDanhMuc: (params) => {
    return api.get(
      "/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?MaNhom=GP01",
      { params }
    );
  },
  themKhoaHoc: (data)=>{
    return api.get('/api/QuanLyKhoaHoc/ThemKhoaHoc',data)
  },
  capNhatPhimUpload: (data) => {
    return api.post(`/api/QuanLyKhoaHoc/CapNhatKhoaHoc`, data)
  },
  xoaPhim: (maKH) => {
    return api.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKH}`)
  },
};
