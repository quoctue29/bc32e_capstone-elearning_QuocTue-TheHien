import { appendErrors } from "react-hook-form";
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
    return api.get("/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?MaNhom=GP01", {
      params,
    });
  },
  huyGhiDanh: (data) => {
    return api.get("/api/QuanLyKhoaHoc/HuyGhiDanh", data);
  },
  // themKhoaHocUploadHinh: (data)=>{
  //   return api.post('/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh',data)
  // },
  themKhoaHoc: (data) => {
    return api.post(`/api/QuanLyKhoaHoc/ThemKhoaHoc`, data);
  },
  capNhatPhimUpload: (data) => {
    return api.post(`/api/QuanLyKhoaHoc/CapNhatKhoaHoc`, data);
  },
  xoaKhoaHoc: (data) => {
    return api.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${data}`);
  },
  searchCourses: (nameCourses) => {
    return api.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${nameCourses}`
    );
  },
  dangKyKhoaHoc: (data) => {
    return api.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`, data);
  },
  getCourseChoXetDuyet: (data) => {
    return api.post(`/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`, data);
  },
  getCourseDaXetDuyet: (data) => {
    return api.post(`/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`, data);
  },
};
