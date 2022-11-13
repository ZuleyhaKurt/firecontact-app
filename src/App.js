
import './App.css';
import Contact from './componenets/Contact';
import FormInput from './componenets/FormInput';


function App() {
  return (
    <div className="App w-100 d-flex justify-content-evenly align-items-center">
      <FormInput />
      <Contact/>
    </div>
  );
}

export default App;
