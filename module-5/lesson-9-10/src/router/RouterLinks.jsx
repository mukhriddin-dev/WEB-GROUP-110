import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error/Error";
import Posts from "../pages/Order";
import PostItem from "../pages/Order/PostItem";
import Extra from "../pages/Extra";

const RouterLinks = () => {
  console.log('render Routers')
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostItem />} />
        <Route path='/extra/' element={<Extra/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default memo(RouterLinks);
