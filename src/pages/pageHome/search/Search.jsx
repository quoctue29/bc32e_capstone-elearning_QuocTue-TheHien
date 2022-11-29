import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch()
  const [searchParam, setSearchParam] = useSearchParams()
  const [tuKhoa, setTuKhoa] = useState()
  return <div>Search</div>;
};

export default Search;
