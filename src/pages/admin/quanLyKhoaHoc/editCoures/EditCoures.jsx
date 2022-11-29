import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { useForm } from "react-hook-form";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  capNhatKhoaHocUpload,
  getKhoaHocTheoDanhMuc,
  quanLyKhoaHocActions,
} from "../../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useQuanLyKhoaHoc } from "../../../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";
export default function EditCoures() {
  const { upDateKhoaHoc, errUpdateKhoaHoc } = useSelector(
    (state) => state.quanLyKhoaHocReducer
  );
  const { listKhoaHocTheoDanhMuc } = useSelector(
    (state) => state.quanLyKhoaHocReducer
  );
  const { register, handleSubmit, setValue, reset } = useForm();
  const dispatch = useDispatch();
  const param = useParams();
  const [urlHinhAnh, setUrlHinhAnh] = useState();

  useEffect(() => {
    dispatch(getKhoaHocTheoDanhMuc(param.maKhoaHoc));
    dispatch(quanLyKhoaHocActions.suaKhoaHoc());
  }, []);
  useEffect(() => {
    reset({
      tenKhoaHoc: listKhoaHocTheoDanhMuc.tenKhoaHoc,
      maNhom: listKhoaHocTheoDanhMuc.maNhom,
      soLuongHocVien: listKhoaHocTheoDanhMuc.soLuongHocVien,
      moTa: listKhoaHocTheoDanhMuc.moTa,
      ngayTao: moment(listKhoaHocTheoDanhMuc.ngayTao).format("YYYY-MM-DD"),
    });
  }, [listKhoaHocTheoDanhMuc]);

  const handleSubmitForm = handleSubmit((data) => {
    data.maNhom = listKhoaHocTheoDanhMuc.maNhom;
    data.maKhoaHoc = listKhoaHocTheoDanhMuc.maKhoaHoc;
    data.ngayTao = moment(data.ngayTao).format("DD/MM/YYYY");
    // tạo biến formdata
    let formData = new FormData();
    formData.append("maPhim", data.maKhoaHoc);
    formData.append("maNhom", data.maNhom);
    formData.append("tenPhim", data.tenKhoaHoc);
    formData.append("moTa", data.moTa);
    formData.append("ngayKhoiChieu", data.ngayTao);
    if (data.hinhAnh) {
      formData.append("File", data.hinhAnh, data.hinhAnh.name);
    }

    dispatch(capNhatKhoaHocUpload(formData));
  });

  return (
    <div className="SuaPhim p-3">
      <p className="font-bold text-xl mb-3">
        Sửa khóa học: {listKhoaHocTheoDanhMuc.tenKhoaHoc}
      </p>
      <div className="flex">
        <div>
          <img src={listKhoaHocTheoDanhMuc.hinhAnh} alt="" width={150} />
        </div>
        <form onSubmit={handleSubmitForm} className="flex-1">
          {/* tên khóa học */}
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
          {/* Ngày Tạo khóa học */}
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
            <img
              src={urlHinhAnh || listKhoaHocTheoDanhMuc.hinhAnh}
              alt="..."
              className="w-40 h-40 bg-gray-200"
            />
          </div>
          {/* Nút thêm phim */}
          <div className="flex mb-2 items-center">
            <p className="m-0 font-semibold w-40 text-right pr-2">Tác vụ: </p>
            {upDateKhoaHoc && !errUpdateKhoaHoc ? (
              ""
            ) : (
              <button className="px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-800 transition duration-300">
                Cập nhật
              </button>
            )}
            <p className=" m-0 text-red-500 text-xl pl-2">
              {upDateKhoaHoc && !errUpdateKhoaHoc ? (
                <span className="text-green-500">
                  Cập nhật khóa học thành công!
                </span>
              ) : (
                errUpdateKhoaHoc
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
