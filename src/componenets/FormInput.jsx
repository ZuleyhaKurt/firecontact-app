import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const FormInput = ({ handlesubmit, values, setValues }) => {
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className=" " style={{width:"250px"}} >
      <h3 className="bg-light mb-3 mt-3  text-center rounded-2">ADD CONTACT</h3>
      <div className="bg-light p-3">
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={changeHandler}
            id="disabledTextInput"
            placeholder="Name"
            name="username"
            value={values.username}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={changeHandler}
            id="disabledTextInput"
            placeholder="Phone"
            name="phone"
            value={values.phone}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            onChange={changeHandler}
            name="gender"
            value={values.gender}
            id="disabledSelect"
          >
            <option value="Gender">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Button className="w-100 m-auto" type="submit">Add</Button>
        </Form>
        </div>
    </div>
  );
};

export default FormInput;