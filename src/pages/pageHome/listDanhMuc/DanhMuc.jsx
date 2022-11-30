import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDanhMucKhoaHoc } from "../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useQuanLyKhoaHoc } from "../../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";
import ListKhoaHoc from "../listKhoaHoc/ListKhoaHoc";
//import Category from "./listcategory/Category";

export default function DanhMuc() {
  const dispatch = useDispatch();
  const { listDanhMuc } = useQuanLyKhoaHoc();
  useEffect(() => {
    dispatch(getDanhMucKhoaHoc());
  }, []);
  return (
    <div className="max-w-[1340px] w-full mx-auto px-6 py-12 min-h-[550px] ">
      <div>
        <ListKhoaHoc />
      </div>
    </div>
  );
}
