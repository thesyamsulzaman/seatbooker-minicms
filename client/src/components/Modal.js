import React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import Button from "./Button";

import history from "../lib/history";

function Modal() {
  return (
    <React.Fragment>
      {createPortal(
        <div
          onClick={() => history.push("/dashboard")}
          className="fixed inset-0 z-40 h-screen flex justify-center items-center bg-gray-900 opacity-80"
        >
          <div className="p-3 bg-white rounded shadow-md">
            <h1 className="text-center text-2xl">Are you sure ?</h1>
            <div className="flex content-around my-2">
              <Button variant="danger" size="md">
                Delete
              </Button>
              <Link to={`/dashboard`} className="ml-2">
                <Button variant="info" size="md">
                  Cancel
                </Button>
              </Link>
            </div>
          </div>
        </div>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
}

export default Modal;
