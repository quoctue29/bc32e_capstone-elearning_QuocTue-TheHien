import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { quanLyCourseServices } from "../../../services/quanLyCourseServices";
import {
  getKhoaHocList,
  quanLyKhoaHocActions,
  xoaKhoaHoc,
} from "../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useQuanLyKhoaHoc } from "../../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";

export default function QuanLyCoures() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const [tenKhoaHoc, setTenKhoaHoc] = useState();

  useEffect(() => {
    (async () => {
      const res = await quanLyCourseServices.getKhoaHocList();
      setListKhoaHoc(res.data);
    })();
  }, [listKhoaHoc]);
  const handleDele = async (id, i) => {
    console.log(id, i);

    const res = await quanLyCourseServices.xoaKhoaHoc(id);
    console.log(res);
  };
  return (
    <div className="QuanLyPhim p-3">
      <p className="font-bold text-xl mb-3">Quản lý Khóa học</p>
      <button
        onClick={() => navigate("addnew")}
        className="py-1 px-3 border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white"
      >
        Thêm Khóa học
      </button>
      <form
        onSubmit={handleSubmit((data) => {
          setSearchParam({ tenKhoaHoc: `${data.paramSearch.trim()}` });
          setTenKhoaHoc("tenKhoaHoc=");
        })}
        className="flex mt-2"
      >
        <input
          onInput={(e) => {
            if (e.target.value === "") {
              setTenKhoaHoc();
              setSearchParam();
            }
          }}
          {...register("paramSearch")}
          type="text"
          placeholder="Nhập tên khóa học"
          className="border w-full p-1 outline-none"
        />
        <button className=" bg-sky-500 text-white p-1 hover:bg-sky-800">
          search
        </button>
      </form>
      <table className="w-full mt-3">
        <thead>
          <tr className="text-left border-b bg-gray-300 pr-5 pl-3 flex py-1">
            <th className="w-10">STT</th>
            <th className="w-20">Mã Khóa học</th>
            <th className="w-20">Hình ảnh</th>
            <th className="w-40">Tên Khóa học</th>
            <th className="flex-1">Mô tả</th>
            <th className="w-40">Hành động</th>
          </tr>
        </thead>
        <tbody className="block h-[500px] overflow-auto">
          {listKhoaHoc?.length > 0 &&
            [...listKhoaHoc].reverse().map((kh, i) => (
              <tr key={i} className="border-b text-left flex pl-3 py-2">
                <td className="w-10">{i + 1}</td>
                <td className="w-20">{kh.maKhoaHoc}</td>
                <td className="w-20">
                  <img src={kh.hinhAnh} alt="" className="w-12" />
                </td>
                <td className="w-40">{kh.tenKhoaHoc}</td>
                <td className="flex-1">{kh.moTa}</td>
                <td className="w-40 space-x-2">
                  <button
                    onClick={() => handleDele(kh.maKhoaHoc, i)}
                    className="bg-red-500 p-1 rounded-md shadow text-white hover:bg-red-800"
                  >
                    Del
                  </button>
                  <button
                    onClick={() => navigate(`edit/${kh.maKhoaHoc}`)}
                    className="bg-green-700 p-1 rounded-md text-white hover:bg-green-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => navigate(`create/${kh.maKhoaHoc}`)}
                    className="bg-blue-700 p-1 rounded-md shadow text-white hover:bg-blue-800"
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
