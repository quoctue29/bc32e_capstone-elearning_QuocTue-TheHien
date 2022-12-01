import { Modal } from "antd";
import { formatStrategyValues } from "rc-tree-select/lib/utils/strategyUtil";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { quanLyNguoiDung } from "../../../services/quanLyNguoiDungServices";

const ModalEdit = ({ open, user, setOpen }) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setValue("taiKhoan", user.taiKhoan);
    setValue("matKhau", user.matKhau);
    setValue("email", user.email);
    setValue("hoTen", user.hoTen);
    setValue("soDT", user.soDt);
    setValue("maLoaiNguoiDung", user.maLoaiNguoiDung);
  }, []);
  console.log(user);
  return (
    <Modal open={open} onCancel={() => setOpen(false)}>
      <div className="SuaNguoiDung p-3">
        <form
          onSubmit={handleSubmit(async (values) => {
            const res = await quanLyNguoiDung.updateUser(values);
            setOpen(false);
          })}
        >
          <div>
            <p className="m-0 font-bold">Tài khoản</p>
            <input
              control={control}
              disabled
              {...register("taiKhoan")}
              type="text"
              className="text-lg border border-gray-500 w-full focus:outline-none px-2 py-1 rounded-lg focus:border-blue-600 "
            />
          </div>
          <div>
            <p className="m-0 font-bold">Mật khẩu</p>
            <input
              control={control}
              name="matKhau"
              required
              {...register("matKhau")}
              type="password"
              className="text-lg border border-gray-500 w-full focus:outline-none px-2 py-1 rounded-lg focus:border-blue-600 "
            />
            <p className="m-0 text-red-500 h-5"></p>
          </div>
          <div>
            <p className="m-0 font-bold">Email</p>
            <input
              control={control}
              required
              {...register("email")}
              type="email"
              className="text-lg border border-gray-500 w-full focus:outline-none px-2 py-1 rounded-lg focus:border-blue-600 "
            />
          </div>
          <div>
            <p className="m-0 font-bold">Họ Tên</p>
            <input
              control={control}
              required
              {...register("hoTen")}
              type="text"
              className="text-lg border border-gray-500 w-full focus:outline-none px-2 py-1 rounded-lg focus:border-blue-600 "
            />
            <p className="m-0 text-red-500 h-5"></p>
          </div>
          <div>
            <p className="m-0 font-bold">Số điện thoại</p>
            <input
              control={control}
              required
              {...register("soDT")}
              type="text"
              className="text-lg border border-gray-500 w-full focus:outline-none px-2 py-1 rounded-lg focus:border-blue-600 "
            />
            <p className="m-0 text-red-500 h-5"></p>
          </div>
          <div>
            <p className="m-0 font-bold">Loại người dùng</p>
            <select
              {...register("maLoaiNguoiDung")}
              className="text-lg border border-gray-500 w-full focus:outline-none px-2 py-1 rounded-lg focus:border-blue-600 "
            >
              <option value="GV">Giáo Vụ</option>
              <option value="HV">Học viên</option>
            </select>
            <p className="m-0 text-red-500 h-5"></p>
          </div>

          <div className="lg:text-right mt-3 flex justify-between">
            <button
              type="submit"
              className="px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-800 transition duration-300"
            >
              Cập nhật người dùng
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalEdit;
