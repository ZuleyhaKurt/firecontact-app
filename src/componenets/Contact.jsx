import Table from "react-bootstrap/Table";
import { DeleteBtn, EditBtn } from "../assests/Icons";
import { GetUser, DeleteUser } from "../utils/functions";

function Contact({ handleUserEdit }) {
  const { contactList } = GetUser();

  return (
    <div className="contact " >
      <h3 className="text-center bg-light mb-3 rounded-2"  >CONTACTS</h3>
     
      <Table striped bordered hover  className="bg-light tables " >
        <thead >
          <tr>
            <th>UserName</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody >
          {contactList?.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.username}</td>
                <td>{element.phone}</td>
                <td>{element.gender}</td>

                <td>
                  <button
                    onClick={() => {
                      handleUserEdit(
                        element?.id,
                        element?.username,
                        element?.phone,
                        element?.gender
                      );
                    }}
                  >
                    <EditBtn />
                  </button>
                </td>
                <td>
                  <button className="border-none outline-none" onClick={() => DeleteUser(element.id)}>
                    <DeleteBtn />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </Table>
        </div>
    
  );
}

export default Contact;