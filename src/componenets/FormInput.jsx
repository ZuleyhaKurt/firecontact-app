import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const FormInput = () => {
  return (
   
    
    <div className='w-25 ml-5  p-5' 
 >
          <h3>ADD CONTACT</h3>
        <Form>
       
            <Form.Group className="mb-3">
             
              <Form.Control id="disabledTextInput" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3">
            
              <Form.Control id="disabledTextInput" placeholder="Phone" />
            </Form.Group>
            <Form.Group className="mb-3">
           
              <Form.Select id="disabledSelect">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
           
            <Button type="submit">Add</Button>
       
          </Form>
          </div>
    
  )
}

export default FormInput