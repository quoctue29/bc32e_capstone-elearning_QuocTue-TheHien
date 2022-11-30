import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = ({ item }) => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className="w-full flex justify-between py-4 border-b-slate-200 border-b-[1px] relative"
      onClick={() => navigate(`/detail/${item.maKhoaHoc}`)}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <div className="flex-1 ">
        <div className="flex gap-5 rounded-md">
          <img
            src={item.hinhAnh}
            alt=""
            className="sm:w-[260px] sm:h-[150px] w-16 h-16  object-cover rounded-md shrink-0"
          />
          <div>
            <h3 className="text-4 font-bold mb-0">{item.tenKhoaHoc}</h3>
            <p className="text-[14px] font-normal mb-0">
              {item.moTa.slice(0, 150) + "..."}
            </p>
            <p className="text-[14px] font-normal mb-0">
              {item.nguoiTao.hoTen}
            </p>
            <div className="flex gap-1">
              <div className="flex color text-amber-500 ">
                {Array.from(new Array(5))
                  .fill("1")
                  .map((item) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
              </div>
              <span>{`(${item.luotXem})`}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="font-bold text-4">
          ₫{Math.floor(Math.random() * 100)}
        </span>
      </div>
      {isShow && (
        <div className="absolute bottom-0 z-40 left-[30%] bg-white w-[400px] shadow-md rounded-md">
          <div
            className="p-6 relative before:content-[' '] before:absolute
       before:w-[0] before:h-[0] before:border-l-[25px] 
       before:border-r-[25px] before:border-b-white z-30 before:border-r-transparent 
       before:border-b-[25px] before:border-l-transparent before:shadow-sm before:-top-5 before:left-40"
          >
            <h2 className="text-4 font-bold mb-2">Bạn sẽ học được gì</h2>
            <p className="text-[14px]">{item.moTa}</p>
            <div className="flex gap-7">
              <button className="flex-1 text-[16px] border rounded-sm border-violet-500 bg-violet-500 text-white hover:bg-violet-700">
                Chi Tiết - Đăng ký
              </button>
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border hover:bg-red-300 hover cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
