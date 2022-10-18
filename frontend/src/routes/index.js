import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Home = lazy(() => import("pages/home"));
const Client = lazy(() => import("pages/client"));
const Error = lazy(() => import("pages/error"));

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<Client />} />
        <Route path="*" element={<Error />} />
        <Route component={Error} />
        
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        autoDismiss={true}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        icon={true}
        theme={"colored"}
        pauseOnHover={false}
        rtl={false}
      />
    </>
  );
};

export default AppRoutes;
