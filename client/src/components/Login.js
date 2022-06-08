import React, { useRef ,useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
// import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }) {
  
  const [newID,setNewID] = useState('')
  
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  const getNewID = event =>
  {
    setNewID(event.target.value)
  }

  function createNewId() {
    onIdSubmit(newID)
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your ID:</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>   
        <Button type="submit" className="mr-2">Login</Button>
        <h2 style={{marginTop: "20px"}} >Not a User?</h2>
        <h3>Create a new ID</h3>
        <Form.Group>
          <Form.Label>Type your number to create ID:</Form.Label>
          <Form.Control type="text" ref={idRef} required onchange={getNewID}  />
        </Form.Group> 
        <Button onClick={createNewId} variant="secondary">Create A New Id</Button>
      </Form>
    </Container>
  )
}
