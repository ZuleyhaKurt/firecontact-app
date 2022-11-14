
import React, { useState } from "react";

import "./App.css";
import Contact from "./componenets/Contact";
import FormInput from "./componenets/FormInput";
import { AddData, EditUser } from "./utils/functions";
import { ToastContainer } from "react-toastify";
import ToastifySuccess from "./utils/toastfy";
function App() {
  const initialValues = { username: "", phone: "", gender: "other" };
  const [values, setValues] = useState(initialValues);

  // !Form Event
  const handlesubmit = (e) => {
    e.preventDefault();
    if (values.id) {
      EditUser(values);
      ToastifySuccess("Veri değiştirildi..");
    } else {
      AddData(values);
      ToastifySuccess("Veri eklendi..");
    }
    setValues(initialValues);
    console.log("form handle");
  };
  // !EditHandler
  const handleUserEdit = (id, username, phone, gender) => {
    setValues({ id, username, phone, gender });
  };

  return (
    <div className="App m-5 d-flex flex-lg-row flex-md-column  flex-sm-column flex-column gap-5 justify-content-between align-items-center  ">
     
      <FormInput
        values={values}
        setValues={setValues}
        handlesubmit={handlesubmit}
      />
      <Contact handleUserEdit={handleUserEdit} />
      <ToastContainer />
    </div>
  );
}

export default App;