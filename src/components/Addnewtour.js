import React, { useState } from 'react'
import { Button,  Form } from 'semantic-ui-react'
import{Link} from 'react-router-dom';
 const mystyle ={
  justifycontent: 'center'
 }

const FormExampleForm = (add) => { 
  const [image ,setImage] =useState("")
    const [name ,setName] =useState("")
    const [price ,setPrice] =useState("")
    const [description ,setDescription] =useState("")
    const adding =()=>{ 
      add ({id:Date.now() ,image,name,price,description})
      
    
     setImage("");
     setName("");
     setPrice("");
     setDescription("");
    } ;
    return (
        <Form >
    <Form.Field>
      <label> Name</label>
      <input 
      value ={name}
      onChange = {e=> setName(e.target.value)}
      placeholder=' Name' />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input
       value ={description}
       onChange = {e=> setDescription(e.target.value)}
       placeholder='Description' />
    </Form.Field>
    <Form.Field>
    <label>price</label>
      <input 
       value ={price}
       onChange = {e=> setPrice(e.target.value)}
      placeholder='Price' />
    </Form.Field>
    <Form.Field>
    <label> Image</label>
      <input
       value ={image}
       onChange = {e=> setImage(e.target.value)}
       placeholder='Image' />
    </Form.Field>
     <Link to ="/Tours"><Button onClick= {adding} >Add new tour </Button></Link>
    
  </Form>

    );
};

export default FormExampleForm