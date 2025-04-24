import React, { useState } from 'react';
import { Card, Container, Button, Form } from 'react-bootstrap';
import SButton from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';

function PageSigin() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        console.log('e.target.name: ', e.target.name);
        console.log('e.target.value: ', e.target.value);
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    return (
        <Container>
            <Card style={{ width: '50%' }} className='m-auto mt-5'>
                <Card.Body>
                    <Card.Title className='text-center'>Form Signin</Card.Title>
                    <Form>
                        <TextInputWithLabel
                            label='Email'
                            name='email'
                            value={form.email}
                            type='email'
                            placeholder='Masukkan email'
                            onChange={handleChange}
                        />
                        <TextInputWithLabel
                            label='Password'
                            name='password'
                            value={form.password}
                            type='password'
                            placeholder='Masukkan Password'
                            onChange={handleChange}
                        />
                        <SButton variant='primary'>Submit</SButton>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default PageSigin;