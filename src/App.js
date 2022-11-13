
import { useState } from 'react';
import './App.css';
import Contact from './componenets/Contact';
import FormInput from './componenets/FormInput';
import {AddData} from './utils/functions';

function App() {
  const initialValues = { username: "", phone: "", gender: "" }
  const[values,setValues]=useState(initialValues)
  const handleSubmit = (e)=> {
    e.preventDefault();
    AddData(values);
  }

  return (
    <div className="App w-100 d-flex justify-content-evenly align-items-center">
      <FormInput values={values} setValues={setValues} handleSubmit={handleSubmit} />
      <Contact/>
    </div>
  );
}

export default App;
