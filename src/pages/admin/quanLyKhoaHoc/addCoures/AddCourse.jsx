import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import { MaNhom } from "../../../../constants/api";
import { useDispatch, useSelector } from "react-redux";

import { Switch } from "antd";
import {
  quanLyKhoaHocActions,
  themKhoaHocUploadHinh,
} from "../../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";

export default function AddCourse(props) {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const [urlHinhAnh, setUrlHinhAnh] = useState();
  const { themKhoaHoc, errThemKhoaHoc } = useSelector(
    (state) => state.quanLyKhoaHocReducer
  );

  useEffect(() => {
    dispatch(quanLyKhoaHocActions.themKhoaHoc());
  }, []);

  const handleSubmitFrom = handleSubmit((data) => {
    data.ngayKhoiChieu = moment(data.ngayKhoiChieu).format("DD/MM/YYYY");
    data.danhGia = Number(data.danhGia);
    data.maNhom = MaNhom;
    // tạo biến formdata
    let formData = new FormData();
    formData.append("tenKhoaHoc", data.tenKhoaHoc);
    formData.append("moTa", data.moTa);
    formData.append("ngayTao", data.ngayTao);
    formData.append("maNhom", data.maNhom);
    if (data.hinhAnh) {
      formData.append("File", data.hinhAnh, data.hinhAnh.name);
    }

    dispatch(themKhoaHocUploadHinh(formData));
  });

  return (
    <div className="ThemPhim p-3">
      <p className="font-bold text-xl mb-3">Thêm mới khóa học</p>
      <form onSubmit={handleSubmitFrom}>
        {/* tên phim */}
        <div className="flex mb-2">
          <p className="m-0 font-semibold w-40 text-right pr-2">
            Tên khóa học:{" "}
          </p>
          <input
            required
            {...register("tenKhoaHoc")}
            type="text"
            className="flex-1 border border-gray-500 focus:outline-none px-2 py-[2px] focus:border-blue-600 "
          />
          <p className="m-0 text-red-500 h-5 pl-2 w-60"></p>
        </div>
        {/* Mô tả */}
        <div className="flex mb-2">
          <p className="m-0 font-semibold w-40 text-right pr-2">Mô tả: </p>
          <textarea
            required
            rows={3}
            {...register("moTa")}
            type="text"
            className="resize-none flex-1 border border-gray-500 focus:outline-none px-2 py-[2px] focus:border-blue-600 "
          />
          <p className="m-0 text-red-500 h-5 pl-2 w-60"></p>
        </div>
        {/* Ngày khởi chiếu */}
        <div className="flex mb-2">
          <p className="m-0 font-semibold w-40 text-right pr-2">Ngày Tạo: </p>
          <input
            required
            {...register("ngayTao")}
            type="date"
            className="border border-gray-500 focus:outline-none px-2 py-[2px] focus:border-blue-600 "
          />
          <p className="m-0 text-red-500 h-5 pl-2 w-60"></p>
        </div>
        {/* Hình ảnh */}
        <div className="flex mb-2">
          <p className="m-0 font-semibold w-40 text-right pr-2">Hình ảnh: </p>
          <input
            required
            type="file"
            accept="image/jpg, image/jpeg, image/png, image/gif"
            className="p-0"
            onChange={(e) => {
              // lấy file đã chọn
              const file = e.target.files[0];
              // tạo đối tượng đọc file
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = (e) => {
                setUrlHinhAnh(e.target.result);
              };
              setValue("hinhAnh", file);
            }}
          />
          <p className="m-0 text-red-500 h-5 pl-2 w-60"></p>
        </div>
        <div className="flex mb-2">
          <p className="m-0 font-semibold w-40 text-right pr-2"></p>
          <img src={urlHinhAnh} alt="..." className="w-40 h-40 bg-gray-200" />
        </div>
        {/* Nút thêm phim */}
        <div className="flex mb-2 items-center">
          <p className="m-0 font-semibold w-40 text-right pr-2">Tác vụ: </p>
          {themKhoaHoc && !errThemKhoaHoc ? (
            ""
          ) : (
            <button className="px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-800 transition duration-300">
              Thêm Khóa học
            </button>
          )}
          <p className="m-0 text-red-500 text-xl pl-2 ">
            {themKhoaHoc && !errThemKhoaHoc ? (
              <span className="text-green-500">Thêm khóa học thành công!</span>
            ) : (
              errThemKhoaHoc
            )}
          </p>
        </div>
      </form>
    </div>
  );
}
