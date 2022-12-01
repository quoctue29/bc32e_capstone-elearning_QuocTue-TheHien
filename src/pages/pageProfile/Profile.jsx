import React, { useEffect } from "react";
import { Collapse } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { thongTinTaiKhoan } from "../../stores/quanLyNguoiDungReducer/quanLyNguoiDungReducer";
import { useQuanLyNguoiDung } from "../../stores/quanLyNguoiDungReducer/quanLyNguoiDungSelector";
import { removeFromCart } from "../../stores/Card/cardSlice";
import { quanLyCourseServices } from "../../services/quanLyCourseServices";
const Profile = () => {
  const { Panel } = Collapse;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.card.cartItems);
  console.log(cartItems);
  const { ttTaiKhoan } = useQuanLyNguoiDung();
  const user = JSON.parse(localStorage.getItem("UserLogin"));

  useEffect(() => {
    dispatch(thongTinTaiKhoan());
  }, []);
  const handleRemove = async (id) => {
    const res = await quanLyCourseServices.huyGhiDanh({
      maKhoaHoc: id,
      taiKhoan: JSON.parse(localStorage.getItem("UserLogin")).taiKhoan,
    });
    dispatch(removeFromCart(id));
  };
  return (
    <div className="ThongTinCaNhan container py-20">
      <p className="text-xl text-center mb-10">Trang cá nhân</p>
      <div className="text-lg font-semibold border-b pb-3 flex">
        <div>
          <img
            src="https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg"
            alt=""
            className="w-40"
          />
        </div>
        <div className="pl-5">
          <p>
            <span>Tài Khoản :</span>
            <span className="text-amber-500 mr-2">{user?.taiKhoan}</span>
            <span className="text-blue-500 text-sm">
              ( {user?.maLoaiNguoiDung} )
            </span>
          </p>
          <p>
            <span>Email: </span>
            <span className="text-amber-500 mr-2">{user?.email}</span>
          </p>
          <p>
            <span>Họ tên: </span>
            <span className="text-amber-500 mr-2">{user?.hoTen}</span>
          </p>
          <p>
            <span>Số điện thoại: </span>
            <span className="text-amber-500">{user?.soDT}</span>
          </p>
        </div>
      </div>
      <div>
        <span className=" font-semibold text-amber-500 text-[40px] my-5">
          Khóa học của tôi
        </span>
      </div>
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <Collapse accordion key={item.id}>
            <Panel
              header={
                <span className="text-lg  ">{item.courses.tenKhoaHoc}</span>
              }
            >
              <div className="w-full flex justify-between items-start ">
                <div className="flex gap-8">
                  <div className="w-[259px] h-[150px]  shrink-0 ">
                    <img
                      className="w-full h-full object-cover"
                      src={item.courses.hinhAnh}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2>{item.courses.tenKhoaHoc}</h2>
                    <p>{item.courses.moTa}</p>
                  </div>
                </div>
                <button
                  className="px-6 py-3 bg-red-500 rounded-md text-[16px] shrink-0"
                  onClick={() => handleRemove(item.id)}
                >
                  Hủy đăng kí
                </button>
              </div>
            </Panel>
          </Collapse>
        ))}
    </div>
  );
};

export default Profile;
