import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error/Error";
import Posts from "../pages/Order";
import PostItem from "../pages/Order/PostItem";

const RouterLinks = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostItem/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default RouterLinks;
