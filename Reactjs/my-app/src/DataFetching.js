//DataFetching.js
/* This file uses reactjs hook to send a GET request to an base url
User can request an id with a field to get a json response
GET is immediately sent after inputing, but the value is only displayed 
after button press
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Form} from 'react-bootstrap';
import {NavBar} from './NavBar.js';

export function DataFetching(){
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)
  const handleClick = () => {setIdFromButtonClick(id)}

  useEffect(() => { axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
        })
      .catch(err => {
        console.log(err)
        })
  }, [idFromButtonClick])

  return (
      <>
        <NavBar>
        </NavBar>
      <div>
        <row>
          <Col md={{ span: 4, offset: 4 }} fluid="md">
            <h3>fetch a json from https://jsonplaceholder.typicode.com/posts</h3>
            <Form.Control type="text" size="sm" value={id} onChange={e => setId(e.target.value)}>
            </Form.Control>
            <button type ="button" onClick={handleClick}> Fetch Post</button>
            <div>{post.title}</div>
          </Col>
        </row>
      </div>
    </>
  )
}