import React, { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddUsers = () =>{

    const initialFormState = {
        name: '',
        email: '',
        password: ''
    };

    const [user, setUser] = useState(initialFormState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
    
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        await fetch(`/user`, {
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        setUser(initialFormState);
        navigate('/');

    }

    return(<div>
        <Container>
        <h1>Add User</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" name="email" id="email" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                </FormGroup>
            </Form>
        </Container>
        </div>
    );

};

export default AddUsers;
