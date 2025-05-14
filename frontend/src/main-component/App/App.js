// frontend/src/main-component/App/App.js
import React, { Fragment, useEffect } from "react";
// Removed: import { BrowserRouter as Router } from 'react-router-dom';
// Assuming AllRoute already contains the Router (e.g., BrowserRouter)
import AllRoute from "../router"; // Your main router component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { loadUserFromStorage } from "../../store/actions/authActions"; // Verify this path

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Attempt to load user from localStorage when the app initializes.
    // This helps re-establish the session if the page is refreshed.
    dispatch(loadUserFromStorage());
  }, [dispatch]); // dispatch should be stable, so this runs once on mount

  return (
    <Fragment>
      {/* The Redux <Provider> and <PersistGate> are already in your src/index.js.
        The <Router> (e.g., BrowserRouter) is assumed to be inside your AllRoute component.
      */}
      <div className="App" id="scrool">
        {" "}
        {/* Restored your original div wrapper */}
        <AllRoute />{" "}
        {/* This component should define your <BrowserRouter>, <Routes>, and <Route> */}
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Fragment>
  );
}

export default App;
