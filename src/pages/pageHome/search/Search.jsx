import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { quanLyCourseServices } from "../../../services/quanLyCourseServices";
import Courses from "./component/Courses";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listCourses, setListCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    (async () => {
      console.log(1);
      try {
        const tenKhoaHoc = searchParams?.get("q");
        const res = await quanLyCourseServices.searchCourses(
          encodeURIComponent(tenKhoaHoc)
        );
        setListCourses(res.data);
        console.log(res.data);
      } catch (error) {
        setListCourses([]);
        console.log(error);
      }
    })();
  }, [location.search]);
  return (
    <div className="max-w-[1340px] w-full mx-auto px-6 py-12 min-h-[550px] ">
      <h2 className="sm:text-[32px] text-[25px] font-bold mb-4 ">
        {listCourses?.length || 0} kết quả cho {`"${searchParams?.get("q")}"`}
      </h2>
      <div className="flex flex-col">
        {listCourses.length > 0 &&
          listCourses.map((item, index) => <Courses item={item} />)}
      </div>
    </div>
  );
};

export default Search;
