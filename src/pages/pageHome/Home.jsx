import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getKhoaHocList,
  getKhoaHocTheoDanhMuc,
} from "../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useQuanLyKhoaHoc } from "../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";
import Banner from "./banner/Banner";
import Intro from "./intro/Intro";
import Course from "./listCourse/Course";

export default function Home() {
  const dispatch = useDispatch();
  const { listKhoaHoc } = useQuanLyKhoaHoc();
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getKhoaHocList());
  }, []);
  return (
    <div>
      <Banner />
      <Intro />
      <Course listKhoaHoc={listKhoaHoc} />
    </div>
  );
}
