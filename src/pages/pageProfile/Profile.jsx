import React, { useEffect } from "react";
import { Collapse } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { thongTinTaiKhoan } from "../../stores/quanLyNguoiDungReducer/quanLyNguoiDungReducer";
import { useQuanLyNguoiDung } from "../../stores/quanLyNguoiDungReducer/quanLyNguoiDungSelector";
const Profile = () => {
  const { Panel } = Collapse;
  const dispatch = useDispatch()
  const { ttTaiKhoan } = useQuanLyNguoiDung()
  useEffect(() => {
    dispatch(thongTinTaiKhoan())
 }, [])
  return (
    <div className='ThongTinCaNhan container py-20'> 
    <p className="text-xl text-center mb-10">Trang cá nhân</p>
       <div className='text-lg font-semibold border-b pb-3 flex'>
          <div>
             <img src="https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg" alt="" className="w-40" />
          </div>
          <div className="pl-5">
             <p><span>Tài khoản: </span><span className='text-amber-500 mr-2'>{ttTaiKhoan?.taiKhoan}</span><span className="text-blue-500 text-sm">( {ttTaiKhoan?.loaiNguoiDung.tenLoai} )</span></p>
             <p><span>Email: </span><span className='text-amber-500 mr-2'>{ttTaiKhoan?.email}</span></p>
             <p><span>Họ tên: </span><span className='text-amber-500 mr-2'>{ttTaiKhoan?.hoTen}</span></p>
             <p><span>Số điện thoại: </span><span className='text-amber-500'>{ttTaiKhoan?.soDT}</span></p>
          </div>
       </div>
       <Collapse accordion>
          <Panel header={<span className="text-lg font-semibold text-amber-500">Khóa học của tôi</span>}>
             <div>
             </div>
          </Panel>
       </Collapse>         
    </div>
  )
}

export default Profile