import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import Profile from "../pages/pageProfile/Profile";
import Home from "../pages/pageHome/Home";
import Detail from "../pages/pageHome/detail/Detail";
import DanhMuc from "../pages/pageHome/listDanhMuc/DanhMuc";
import UserLayout from "../components/layouts/userLayout/UserLayout";
import Login from "../pages/pageLogin/Login";
import Register from "../pages/pageRegister/Register";
import AdminLayout from "../components/layouts/adminLayout/AdminLayout";
import QuanLyCoures from "../pages/admin/quanLyKhoaHoc/QuanLyCoures";
import AddCourse from "../pages/admin/quanLyKhoaHoc/addCoures/AddCourse";
import CreateCourse from "../pages/admin/quanLyKhoaHoc/createSourse/CreateCourse";
import EditCoures from "../pages/admin/quanLyKhoaHoc/editCoures/EditCoures";
import QuanLyUsers from "../pages/admin/quanLyUsers/QuanLyUsers";
import SuaNguoiDung from "../pages/admin/quanLyUsers/suaNguoiDung/SuaNguoiDung";
import ThemNguoiDung from "../pages/admin/quanLyUsers/themNguoiDung/ThemNguoiDung";
import Search from "../pages/pageHome/search/Search";

export default function Routers() {
  return useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="home" />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "detail/:maKhoaHoc",
          element: <Detail />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "danhmuc",
          element: <DanhMuc />,
        },
        {
          path: "timKiemKhoaHoc",
          element: <Search />,
        },
      ],
    },

    {
      path: "user",
      element: <UserLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },

    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          path: "coures",
          element: <QuanLyCoures />,
        },
        {
          path: "coures/addnew",
          element: <AddCourse />,
        },
        {
          path: "coures/edit/:id",
          element: <EditCoures />,
        },
        {
          path: "coures/create/:id",
          element: <CreateCourse />,
        },
        {
          path: "users",
          element: <QuanLyUsers />,
        },
        {
          path: "users/themnguoidung",
          element: <ThemNguoiDung />,
        },
        {
          path: "users/suanguoidung/:id",
          element: <SuaNguoiDung />,
        },
      ],
    },
  ]);
}
