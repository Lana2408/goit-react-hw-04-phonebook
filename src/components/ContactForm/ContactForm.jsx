import React, { useState } from 'react';
import { Button, Form, Label } from './ContactForm.styled';


const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onAddContact(name, number);
    setName('');
    setNumber('');
  };

 


    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );

}

export default ContactForm;
