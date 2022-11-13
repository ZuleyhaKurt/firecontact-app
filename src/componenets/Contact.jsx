import Table from 'react-bootstrap/Table';

function Contact() {
    return (
        <div className='w-50 '>
            <h3 className="text-center">CONTACTS</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>UserName</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        
      </tbody>
            </Table>
            </div>
  );
}

export default Contact;