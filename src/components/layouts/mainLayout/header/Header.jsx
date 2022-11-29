import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Navigate, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { UserLogin } from "../../../../constants/api";
import { quanLyNguoiDungActions } from "../../../../stores/quanLyNguoiDungReducer/quanLyNguoiDungReducer";
import { getKhoaHocList } from "../../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useQuanLyKhoaHoc } from "../../../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";
const Header = () => {
  const {handleSubmit } = useForm()
  const [searchParam, setSearchParam] = useSearchParams()
  const [tuKhoa, setTuKhoa] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nguoiDung = JSON.parse(localStorage.getItem(UserLogin)) ;
  const { listKhoaHoc } = useQuanLyKhoaHoc();
  useEffect(() => {
    dispatch(getKhoaHocList(`${tuKhoa}${searchParam.get('tuKhoa')}`))
  },[])
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black py-4 lg:px-12 shadow border-solid border-t-2 border-amber-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <NavLink to="home">
            <img
              className="w-30"
              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="block lg:hidden ">
          <button
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="text-md font-bold lg:flex-grow">
          <NavLink
            href="#responsive-header"
            to="danhmuc"
            className="block mt-4 lg:inline-block text-amber-500 lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-amber-600 mr-2"
          >
            Danh Mục Khóa Học
          </NavLink>
        </div>
        {/* This is an example component */}
        <form onSubmit={handleSubmit(data => {
            setSearchParam({ tuKhoa: `${data.paramSearch.trim()}` })
            setTuKhoa('tuKhoa=')
         })}  className="relative mx-auto text-gray-600 lg:block hidden">
          <input 
           onInput={(e) => {
            if (e.target.value === '') {
               setTuKhoa()
               setSearchParam()
            }
         }}
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Nhập khóa học"
          />
          <button onClick={() =>{
            navigate("/timKiemKhoaHoc");
          }} type="submit" className="absolute right-0 top-0 mt-3 mr-2">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </form>
        <div className="hidden lg:block">
                  {nguoiDung ? (
                     <div className="inline-block space-x-2">
                        <NavLink to="profile" className="inline-block text-lg rounded-lg px-6 py-2 text-white bg-amber-600 hover:bg-gray-500 hover:text-white transition duration-300">
                           Hello! {nguoiDung.taiKhoan}
                        </NavLink>
                        <button onClick={() => {
                           dispatch(quanLyNguoiDungActions.dangXuat());
                           navigate("/home");
                        }} className="inline-block px-4 py-2 text-black bg-white rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300">
                           Đăng xuất
                        </button>
                        {nguoiDung.maLoaiNguoiDung === 'GV' ? <NavLink to="/admin/coures" className="inline-block px-4 py-2 text-white bg-gray-800 rounded-md shadow hover:bg-gray-500 hover:text-white transition duration-300">
                           Page Admin
                        </NavLink> : ''}
                     </div>
                  ) : (
                     <div className="inline-block space-x-2">
                        <NavLink to="/user/login" className="block mt-4 lg:inline-block text-amber-500 lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-amber-600 mr-2">
                           Đăng nhập
                        </NavLink>
                        <NavLink to="/user/register" className="block mt-4 lg:inline-block text-amber-500 lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-amber-600 mr-2">
                           Đăng kí
                        </NavLink>
                     </div>
                  )}
               </div>
      </div>
    </nav>
  );
};

export default Header;
