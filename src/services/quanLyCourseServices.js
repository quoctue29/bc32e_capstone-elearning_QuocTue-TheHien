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
  // themKhoaHocUploadHinh: (data)=>{
  //   return api.post('/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh',data)
  // },
  themKhoaHoc: (data)=>{
    return api.post(`/api/QuanLyKhoaHoc/ThemKhoaHoc`,data)
  },
  capNhatPhimUpload: (data) => {
    return api.post(`/api/QuanLyKhoaHoc/CapNhatKhoaHoc`, data)
  },
  xoaPhim: (maKH) => {
    return api.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKH}`)
  },
  searchCourses: (nameCourses) => {
    return api.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${nameCourses}`
    );
  },
  dangKyKhoaHoc: (data) => {
    return api.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`,data)
  },
};
